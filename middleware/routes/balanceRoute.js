const express = require("express");
const Balance = require("../models/balanceSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/balance", async (req,res) => {

    
    const {getMempoolWallet} = req.body;
    SplitDAta = getMempoolWallet.split("-");
    mempool = SplitDAta[0];
    wallet = SplitDAta[1];
    // console.log(mempool + wallet);

    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
   //executing the docker push fake version from docker hub
await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} info`, function (err, data) {
            

        const rawData = data.raw
        const searchVal = rawData.search("Existing client file not found")
        if(searchVal == -1){
            res.status(200).json({data}); 
            console.log('data = ', data); 
        }else{
            console.log("User Not Register")
            res.status(400).json({msg:"User Not Register"}); 
             
        }
        });
    
})

module.exports = router;
