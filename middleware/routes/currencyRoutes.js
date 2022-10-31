const express = require("express");
const Currency = require("../models/currencySchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/sendCurrency",(req,res) => {
    
    const {currency, accAddr,mempool,wallet} = req.body;
    console.log(currency + accAddr);
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
   //executing the docker push fake version from docker hub
   docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} send ${currency} ${accAddr}`, function (err, data) {
            console.log('data = ', data); 
             res.status(201).json({data}); 
        });
    
})

module.exports = router;