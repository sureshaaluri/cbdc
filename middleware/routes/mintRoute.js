const express = require("express");
const Mint = require("../models/mintSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/mint",(req,res) => {
    
    const {nOutputs, outputValue,mempool,wallet} = req.body;
    // console.log(nOutputs + outputValue);
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
   //executing the docker push fake version from docker hub
   docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} mint ${nOutputs} ${outputValue}`, function (err, data) {
            console.log('data = ', data); 
             res.status(201).json({data}); 
        });
    
})

module.exports = router;