const express = require("express");
const Currency = require("../models/currencySchema");
const router = express.Router();
const Account = require("../models/newAddrSchema");
const cors = require("cors");
router.use(cors());
const nodemailer = require("nodemailer");
const dockerCLI = require("docker-cli-js");


router.post("/sendCurrency",async (req,res) => {
    
    const {currency, toAccAddr,accAddr_patient,accAddr_InsAgent,amount_per_ins,amount_per_pat} = req.body;


    if(!currency || !toAccAddr || !accAddr_patient || !accAddr_InsAgent || !amount_per_ins || !amount_per_pat )
    {
        return res.status(422).json({error:"Please fill the fields"});
    }
    
    let mempool_patient,wallet_patient,mempool_InsAgent,wallet_InsAgent,Provider_email,Provider_address,Provider_name,patient_name,InsAgent_name;

    toAccAddr_Split = toAccAddr.split("-");
    Provider_email = toAccAddr_Split[1];
    Provider_address = toAccAddr_Split[0];
    Provider_name = toAccAddr_Split[2];

    pat_acc = accAddr_patient.split("-");
    mempool_patient = pat_acc[1];
    wallet_patient = pat_acc[2];
    patient_AccountAddress = pat_acc[0];
    patient_email = pat_acc[3];
    patient_name = pat_acc[4];

    pat_ins = accAddr_InsAgent.split("-");
    mempool_InsAgent = pat_ins[1];
    wallet_InsAgent = pat_ins[2];
    InsAgent_AccountAddress = pat_ins[0];
    InsAgent_Email = pat_ins[3];
    InsAgent_name = pat_ins[4];

    let provider_amount = parseInt(amount_per_pat)+parseInt(amount_per_ins)

    const email_arr = [patient_email,InsAgent_Email,Provider_email];
    // const amount_arr = [amount_per_pat,amount_per_ins,parseInt(amount_per_pat)+parseInt(amount_per_ins)];
    // const address_arr = [patient_AccountAddress,InsAgent_AccountAddress,Provider_address];
    
    // const currency_patient = (amount_per_pat/100)*currency;
    const currency_patient = (amount_per_pat)*currency;
    console.log("currency_patient "+currency_patient);
    // const currency_Insurance = (amount_per_ins/100)*currency;
    const currency_Insurance = (amount_per_ins)*currency;
    console.log("currency_Insurance "+currency_Insurance);


    const arr_content = ["You Sent Amount of $"+parseInt(currency_patient/100)+" to "+Provider_name,"You Sent Amount of $"+parseInt(currency_Insurance/100)+" to "+Provider_name,"You received amount $"+currency+ " from " + patient_name +" and "+InsAgent_name]


    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
    // Patient Balance Check
    docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_patient} ${wallet_patient} info`,async function (err, data) {
        const resData = await data.raw;
        let lines = resData.split('\n');
        let AccountAddress;
        if(lines.length > 2){         
            AccountAddress = lines[lines.length - 2]
        }
        else{
            AccountAddress = resData
        }
        let getBalanceKey = AccountAddress.split(',');
        const Patient_balance = parseInt( getBalanceKey[0].slice(10,getBalanceKey[0].length) )

        let getpatDecimal = parseInt(currency_patient/100)
        console.log("check "+getpatDecimal+ " "+Patient_balance);
        console.log("checkType "+typeof(getpatDecimal) + " "+typeof(Patient_balance));

        // Insurer Balance Check
        docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_InsAgent} ${wallet_InsAgent} info`,async function (err, data_Ins) {
            const resDataIns = await data_Ins.raw;
            let lines_Ins = resDataIns.split('\n');
            let AccountAddressIns;    
            if(lines_Ins.length > 2){         
                AccountAddressIns = lines_Ins[lines_Ins.length - 2] 
            }
            else{
                AccountAddressIns = resDataIns
            }
    
            let getBalanceKeyIns = AccountAddressIns.split(',');
            const Insurer_balance = parseInt( getBalanceKeyIns[0].slice(10,getBalanceKeyIns[0].length) )

            let getInsDecimal = parseInt(currency_Insurance/100)
            console.log("check "+getInsDecimal + " "+Insurer_balance);

            console.log("checkTypeOne "+typeof(getInsDecimal) + " "+typeof(Insurer_balance));
            
        if( ( getpatDecimal < Patient_balance ) && ( getInsDecimal < Insurer_balance ) ){

            //    executing the docker push fake version from docker hub
        await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_patient} ${wallet_patient} send ${currency_patient} ${Provider_address}`, function (err, data) {
            console.log('data = '+ data.raw); 
            

            docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_InsAgent} ${wallet_InsAgent} send ${currency_Insurance} ${Provider_address}`, async function (err, data1) {
            // console.log('data = ', data1); 
            

            if(data1){

                try{
                    const patient_rawdata = data.raw;
                    let lines = patient_rawdata.split('\n');
                    let patient_importinput;
                    console.log('no. of lines', lines)
                    if(lines.length > 2){  
                        patient_importinput = lines[lines.length - 3]
                    }
                    else{
                        patient_importinput = resData
                    }
                    patient_importinput = patient_importinput.replace('\n','')

                    const insurance_rawdata = data1.raw;
                    let lines_ins = insurance_rawdata.split('\n');
                    let Insurance_importinput;
                    console.log('no. of lines', lines_ins)
                    if(lines_ins.length > 2){  
                        Insurance_importinput = lines_ins[lines_ins.length - 3]
                    }
                    else{
                        Insurance_importinput = resData
                    }
                    Insurance_importinput = Insurance_importinput.replace('\n','')

                    // console.log("getdat "+lines_ins.length);
                    // console.log("importinput "+Insurance_importinput);

                    if(Insurance_importinput && patient_importinput){
                        
                        const AccountDetails = await Account.findOne({AccountAddress:Provider_address});
                        console.log("Account Details :"+ AccountDetails)

                        
                    //executing the docker push fake version from docker hub
                    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${AccountDetails.mempool} ${AccountDetails.wallet} importinput ${patient_importinput}`, function (err, data) {
                        console.log('execute pat data = ', data); 
                    });
                    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${AccountDetails.mempool} ${AccountDetails.wallet} sync`, function (err, data) {
                    console.log('execute pat data = ', data); 
                    });
                    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${AccountDetails.mempool} ${AccountDetails.wallet} info`, function (err, data) {
                    console.log('execute pat data = ', data); 
                    // res.status(201).json({data}); 
                    });


                    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${AccountDetails.mempool} ${AccountDetails.wallet} importinput ${Insurance_importinput}`, function (err, data) {
                        console.log('execute data = ', data); 
                    });
                    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${AccountDetails.mempool} ${AccountDetails.wallet} sync`, function (err, data) {
                    console.log('execute ins data = ', data); 
                    });
                    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${AccountDetails.mempool} ${AccountDetails.wallet} info`, function (err, data) {
                    console.log(' execute ins data = ', data); 
                    // res.status(201).json({data}); 
                    });

                }


                    const CurrencyVal = new Currency({currency, Provider_address,patient_AccountAddress,mempool_patient,wallet_patient,InsAgent_AccountAddress,mempool_InsAgent,wallet_InsAgent,patient_importinput,Insurance_importinput});
                    const CurrencyValExist =  CurrencyVal.save();  
                    if(CurrencyValExist){


                        var transporter = nodemailer.createTransport({
                            service:'gmail',
                            auth:{
                                user : process.env.email,
                                pass : process.env.password
                            }
                        });
                        
                        for(var i=0;i<email_arr.length;i++){

                            var mailOptions = {
                            from : process.env.email,
                            to : email_arr[i],
                            subject : 'CBDC Transfer Currency',
                            html : `<h3>${arr_content[i]}</h3>`
                            };

                            await transporter.sendMail(mailOptions,async function(err,info){
                                if(err){
                                    console.log("err: "+err)
                                }else{
                                    console.log("email sent "+info.response)
                                }
                            })
                            
                            }
                            res.status(200).json({"Patient":data,"Insurance":data1}); 
                            
                        }
                        
                }catch(err){
                    console.log(err);
                } 
            }

        });
        });
        }else{
            if(Patient_balance < getpatDecimal){
                res.status(202).json({"message":"Patient Has Insufficient Balance "}); 
            }else if(Insurer_balance < getInsDecimal){
                res.status(202).json({"message":"Insurer Has Insufficient Balance "}); 
            }else{
                res.status(202).json({"message":"Insufficient Balance In Both Accounts"}); 
            }
        }

    });

    });

    
})

module.exports = router;
