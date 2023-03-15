const express = require("express");
const Account = require("../models/newAddrSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");
const md5 = require('md5');
const nodemailer = require("nodemailer");

router.post("/newAddress", async (req,res) => {
    
    const {name, mempool, wallet, password,email} = await req.body;
    const hashPassword = md5(password);
    if(!name || !mempool || !wallet || !password || !email)
    {
        return res.status(422).json({error:"Please fill the fields"});
    }
    
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    
   await docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} info`,async function (err, data) {
        const resInfo = await data;
        // let respArry = resInfo.split('\n');
        // let respBal     =   respArry[0] 

        // let msginfo = respArry[0].split(' ');

        console.log('data type', typeof(resInfo));
        console.log('balce', resInfo);
        const rawData = resInfo.raw
        const searchVal =  rawData.search("Existing client file not found")
        
        // console.log(" validate info"+info.command)
        if(searchVal == -1){
            res.status(400).json("Mempool and Wallet already exists");
        }else{

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

            console.log('length', lines.length);
            console.log('address', AccountAddress);

             res.status(201).json(AccountAddress); 

            if(data){
                
                // const subStringAcc = AccountAddress.substring(AccountAddress.indexOf("\n")+1,AccountAddress.lastIndexOf("\n"));
                
                // console.log("subStringAcc "+subStringAcc +" "+indexIs);
                const role = "Provider";
                if(!name || !mempool || !wallet || !password || !email)
                {
                    return res.status(422).json({error:"Please fill the fields"});
                }
                try{
                        const NewAddrVal = await new Account({name, mempool, wallet,role,AccountAddress, password:hashPassword, email});
                    const NewAddrExist =  await NewAddrVal.save();
                    
                    if(NewAddrExist){
                        var transporter = nodemailer.createTransport({
                            service:'gmail',
                            auth:{
                                user : process.env.email,
                                pass : process.env.password
                            }
                        });
                            
                        var mailOptions = {
                            from : process.env.email,
                            to : email,
                            subject : 'CBDC Login Credentials',
                            html : `<p>Thank you for registering with us, Please find the details below to login into your account.</p><h3>Username : ${name}</h3><h3>Password : ${password}</h3>`
                        };
                    
                        transporter.sendMail(mailOptions,async function(err,info){
                            if(err){
                                console.log("err: "+err)
                            }else{
                                console.log("email sent "+info.response)
                            }
                        })
                    }

                    // res.status(201).json({message:"New Address successfully"});
                    
                }catch(err){
                    console.log(err);
                } 

            // console.log(mempool + wallet);
                    }

        });

    }
})
    
})


router.get("/getProvider", async function (req, res) {
    const getProviderData = await Account.find({role : "Provider"},function(err,getData){
        
        // console.log("getData"+getData);
        // let test = {'one':'1','two':'2','three':'3'}
        return res.status(201).send({'data':getData});
    })
        
        // console.log("getProviderData "+JSON.stringify(getProviderData));
    // return getProviderData
});

router.get("/getPatient", async function (req, res) {
    const getPatientData =await Account.find({role : "patient"},function(err,getData){
        console.log("getData "+getData);
        return res.status(201).send({'data':getData});
    })
});

router.get("/getInsuranceAgent", async function (req, res) {
    const getInsuranceData =await Account.find({role : "insurance_agent"},function(err,getData){
        // console.log("getData "+getData);
        return res.status(201).send({'data':getData});
    })
});

router.get("/getAllAccounts", async function (req, res) {
    console.log("hi")
    const getAll =await Account.find({},function(err,getData){
        console.log("getData "+getData);
        return res.status(201).send({'data':getData});
    })
});

router.get("/getMempoolWallet", async function (req, res) {
    // const pat_Details = Account.find({},{sort:{_id:-1}},function(err,getData){
    //     console.log("getData "+getData);
    //     return res.status(201).send({'data':getData});
    // })

    const getlast = await Account.find().sort({_id:-1}).limit(1);
    console.log("getlast "+getlast);
    return res.status(201).send({'data':getlast});
});

module.exports = router;
