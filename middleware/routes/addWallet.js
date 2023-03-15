const express = require("express");
const NewAddrSchema = require("../models/newAddrSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/addWallet",async (req,res) => {
    
    console.log('info', req.body)
    
    const {name, slt_pat_agent,nOutputs, outputValue, mempool, wallet, accountAddress, email} = req.body;
    

    if(!name || !slt_pat_agent || !nOutputs || !outputValue || !mempool || !wallet || !accountAddress || !email)
    {
        return res.status(422).json({error:"Please fill the fields"});
    }

        const DockerOptions = dockerCLI.Options;
        const Docker = dockerCLI.Docker;
        const docker = new Docker(); 
       
    
            docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} mint ${nOutputs} ${outputValue}`,async function (err, data) {
                    console.log('data = ', data);
                    const resData = await data.raw;
                    let lines = resData.split('\n');
                    let AccountAddress;

                    console.log('no. of lines', lines)

                    if(lines.length > 2){
                        
                    AccountAddress = lines[lines.length - 2]
                    }
                    else{
                        AccountAddress = resData

                    }
                    AccountAddress = AccountAddress.replace('\n','')
                    
                    res.status(200).json({data}); 
                    
                });
        
    

    
})

module.exports = router;