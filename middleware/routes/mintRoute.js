const express = require("express");
const NewAddrSchema = require("../models/newAddrSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/mint",async (req,res) => {
    
    const {name, slt_pat_agent,nOutputs, outputValue,mempool,wallet} = req.body;
    // console.log(nOutputs + outputValue);

        const DockerOptions = dockerCLI.Options;
        const Docker = dockerCLI.Docker;
        const docker = new Docker(); 
        
    //executing the docker push fake version from docker hub
    docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} mint ${nOutputs} ${outputValue}`, function (err, data) {
                console.log('data = ', data.raw); 
                res.status(201).json({data}); 
                if(data){
                    AccountAddress = data.raw;
                    AccountAddress = AccountAddress.replace('\n','')
                    role = slt_pat_agent;
                    try{
                            const mint = new NewAddrSchema({name,nOutputs, outputValue,mempool,wallet,role,AccountAddress});
                        const mintExist = mint.save();
                        
                        // res.status(202).json({message:"mint register successfully"});
                        
                    }catch(err){
                        console.log(err);
                    }
                }
            });
    
})

module.exports = router;