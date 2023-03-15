const express = require("express");
const Balance = require("../models/receiverCheck");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/receiverBlnCheck",async (req,res) => {
    
    const {mempool, wallet, importinput} = req.body;
    console.log(mempool + wallet +importinput);
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
   //executing the docker push fake version from docker hub
   await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} importinput ${importinput}`, function (err, data) {
            console.log('data = ', data); 
        });
    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} sync`, function (err, data) {
        console.log('data = ', data); 
    });
    await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} info`, function (err, data) {
        console.log('data = ', data); 
        res.status(201).json({data}); 
    });
        
})

module.exports = router;