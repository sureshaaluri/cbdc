const express = require("express");
const Currency = require("../models/currencySchema");
const router = express.Router();
const Account = require("../models/newAddrSchema");
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/sendCurrency",async (req,res) => {
    
    const {currency, toAccAddr,accAddr_patient,accAddr_InsAgent,amount_per_ins,amount_per_pat} = req.body;
    
    let mempool_patient,wallet_patient,mempool_InsAgent,wallet_InsAgent;

    pat_acc = accAddr_patient.split("-");
    mempool_patient = pat_acc[1];
    wallet_patient = pat_acc[2];
    patient_AccountAddress = pat_acc[0];

    pat_ins = accAddr_InsAgent.split("-");
    mempool_InsAgent = pat_ins[1];
    wallet_InsAgent = pat_ins[2];
    InsAgent_AccountAddress = pat_ins[0];

    const currency_patient = (amount_per_pat/100)*currency;
    console.log(currency_patient);

    const currency_Insurance = (amount_per_ins/100)*currency;
    console.log(currency_Insurance);

    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
//    executing the docker push fake version from docker hub
   await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_patient} ${wallet_patient} send ${currency_patient} ${toAccAddr}`, function (err, data) {
            console.log('data = '+ data.raw); 
             
       
             docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_InsAgent} ${wallet_InsAgent} send ${currency_Insurance} ${toAccAddr}`, async function (err, data1) {
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
                        
                        const AccountDetails = await Account.findOne({AccountAddress:toAccAddr});
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


                    const CurrencyVal = new Currency({currency, toAccAddr,patient_AccountAddress,mempool_patient,wallet_patient,InsAgent_AccountAddress,mempool_InsAgent,wallet_InsAgent,patient_importinput,Insurance_importinput});
                    const CurrencyValExist =  CurrencyVal.save();  
                    res.status(201).json({"Patient":data,"Insurance":data1}); 
                }catch(err){
                    console.log(err);
                } 
             }

        });
    });
    
})

module.exports = router;