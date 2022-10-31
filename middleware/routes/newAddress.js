const express = require("express");
const Account = require("../models/newAddrSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");


router.post("/newAddress", async (req,res) => {
    
    const {name, mempool, wallet} = await req.body;

    
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
   //executing the docker push fake version from docker hub
   await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} newaddress`, async function (err, data) {
            // console.log('data = ', data.raw);
            
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

            // const lastLine = AccountAddress.match(/.*$/)[0];

            // var str = "foo\nbar\ntest123.html\n";
            // var n = str.lastIndexOf('\n');
            // var result = str.substring();

            console.log('lenght', lines.length);
            console.log('address', AccountAddress);

             res.status(201).json(AccountAddress); 

            if(data){
                
                // const subStringAcc = AccountAddress.substring(AccountAddress.indexOf("\n")+1,AccountAddress.lastIndexOf("\n"));
                
                // console.log("subStringAcc "+subStringAcc +" "+indexIs);
                const role = "Provider";
                if(!name || !mempool || !wallet)
                {
                    return res.status(422).json({error:"Please fill the fields"});
                }
                try{
                        const NewAddrVal = await new Account({name, mempool, wallet,role,AccountAddress});
                    const NewAddrExist =  await NewAddrVal.save();
                    
                    // res.status(201).json({message:"New Address successfully"});
                    
                }catch(err){
                    console.log(err);
                } 

            // console.log(mempool + wallet);
                    }

        });
    
})


router.get("/getProvider", function (req, res) {
    const getProviderData = Account.find({role : "Provider"},function(err,getData){
        
        // console.log("getData"+getData);
        // let test = {'one':'1','two':'2','three':'3'}
        return res.status(201).send({'data':getData});
    })
        
        // console.log("getProviderData "+JSON.stringify(getProviderData));
    // return getProviderData
});


module.exports = router;