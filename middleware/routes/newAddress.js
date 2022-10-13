const express = require("express");
const Balance = require("../models/balanceSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/newAddress",(req,res) => {
    
    const {mempool, wallet} = req.body;
    // console.log(mempool + wallet);
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
   //executing the docker push fake version from docker hub
   docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} newaddress`, function (err, data) {
            console.log('data = ', data); 
             res.status(201).json({data}); 
        });
    
})

module.exports = router;