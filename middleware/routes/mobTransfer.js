const express = require("express");
const Currency = require("../models/currencySchema");
const router = express.Router();
const Account = require("../models/newAddrSchema");
const cors = require("cors");
router.use(cors());
const nodemailer = require("nodemailer");
const dockerCLI = require("docker-cli-js");


router.post("/mobWalletTansfer",async (req,res) => {

    console.log("req.body "+JSON.stringify(req.body))
    
    const {currency, toAccAddr,accAddr_patient} = req.body;
    
    let toAccAddr_Split,toAccAddr_email,toAccAddr_address,pat_acc,mempool_patient,wallet_patient,patient_AccountAddress,patient_email,currency_patient,toAccAddr_name,patient_name;

    toAccAddr_Split = toAccAddr.split("-");
    toAccAddr_email = toAccAddr_Split[1];
    toAccAddr_address = toAccAddr_Split[0];
    toAccAddr_name = toAccAddr_Split[2];

    pat_acc = accAddr_patient.split("-");
    mempool_patient = pat_acc[1];
    wallet_patient = pat_acc[2];
    patient_AccountAddress = pat_acc[0];
    patient_email = pat_acc[3];
    patient_name = pat_acc[4];
    currency_patient = currency*100

    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
    const email_arr = [patient_email,toAccAddr_email];
    const arr_content = ["You Sent Amount of $"+currency+" to "+toAccAddr_name,"You received amount of $"+currency+ " from " + patient_name]


   await  docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_patient} ${wallet_patient} info`,async function (err, data) {
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

        let getpatDecimal = parseInt(currency/100)
        console.log("check "+currency+ " "+Patient_balance);
        console.log("checkType "+typeof(getpatDecimal) + " "+typeof(Patient_balance));


        if( currency < Patient_balance ){
            console.log(mempool_patient,wallet_patient,currency_patient,toAccAddr_address)
            await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_patient} ${wallet_patient} send ${currency_patient} ${toAccAddr_address}`,async function (err, data) {
                console.log('data = '+ JSON.stringify(data)); 


                if(data){

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
    
                        if(patient_importinput){
                            
                            const AccountDetails = await Account.findOne({AccountAddress:toAccAddr_address});
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
    
                    }
    
    
                        const CurrencyVal = new Currency({currency, toAccAddr_address,patient_AccountAddress,mempool_patient,wallet_patient,patient_importinput});
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
                                res.status(201).json({"Patient":data}); 
                                
                            }
                            
                    }catch(err){
                        console.log(err);
                    } 
                }




            });

        }else{
            console.log("Insufficient Balance In Account")
            res.status(400).json({"message":"Insufficient Balance In Account"}); 
        }

    });
    

    
})

module.exports = router;
