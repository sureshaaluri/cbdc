const express = require("express");
const Currency = require("../models/currencySchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/sendCurrency",async (req,res) => {
    
    const {currency, toAccAddr,accAddr_patient,mempool_patient,wallet_patient,accAddr_InsAgent,mempool_InsAgent,wallet_InsAgent,amount_per_ins,amount_per_pat} = req.body;
    
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
             
       
             docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool_InsAgent} ${wallet_InsAgent} send ${currency_Insurance} ${toAccAddr}`, function (err, data1) {
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

                    console.log("getdat "+lines_ins.length);
                    console.log("importinput "+Insurance_importinput);
                    const CurrencyVal = new Currency({currency, toAccAddr,accAddr_patient,mempool_patient,wallet_patient,accAddr_InsAgent,mempool_InsAgent,wallet_InsAgent,patient_importinput,Insurance_importinput});
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