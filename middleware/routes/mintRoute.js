const express = require("express");
const NewAddrSchema = require("../models/newAddrSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");
const md5 = require('md5');
const nodemailer = require("nodemailer");

router.post("/mint",async (req,res) => {

    console.log('info', req.body)
    
    const {name, slt_pat_agent,nOutputs, outputValue, mempool, wallet, password, email} = req.body;
    const hashPassword = md5(password);

    if(!name || !slt_pat_agent || !nOutputs || !outputValue || !mempool || !wallet || !password || !email)
    {
        return res.status(422).json({error:"Please fill the fields"});
    }

        const DockerOptions = dockerCLI.Options;
        const Docker = dockerCLI.Docker;
        const docker = new Docker(); 
        // console.log(mempool+" "+wallet);
    //executing the docker push fake version from docker hub

    docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} info`, async function (err, data) {

        // let info = JSON.stringify(data);
        

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
                    
                    
                    if(data){
                        
                        role = slt_pat_agent;
                        
                           
                            try{

                                docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} info`, function (err, balancedata) {
                                    console.log('data = ', balancedata); 
                                    res.status(200).json({data:data,balancedata:balancedata}); 
                                });


                            const mint = new NewAddrSchema({name,nOutputs, outputValue,mempool,wallet,role,AccountAddress,password:hashPassword,email});
                            const mintExist = mint.save();

                            if(mintExist){
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
                            // res.status(202).json({message:"mint register successfully"});
                            
                        }catch(err){
                            console.log(err);
                        }
                    }
                });
        
        }
    });


    // docker.command(`exec client_cli ./build/src/uhs/client/client-cli 2pc-compose.cfg ${mempool} ${wallet} mint ${nOutputs} ${outputValue}`,async function (err, data) {
    //             console.log('data = ', data);
    //             const resData = await data.raw;
    //             let lines = resData.split('\n');
    //             let AccountAddress;

    //             console.log('no. of lines', lines)

    //             if(lines.length > 2){
                    
    //             AccountAddress = lines[lines.length - 2]
    //             }
    //             else{
    //                 AccountAddress = resData

    //             }
    //             AccountAddress = AccountAddress.replace('\n','')
                
    //             res.status(201).json({data}); 
    //             if(data){
                    
    //                 role = slt_pat_agent;
    //                 try{
    //                         const mint = new NewAddrSchema({name,nOutputs, outputValue,mempool,wallet,role,AccountAddress,password,email});
    //                     const mintExist = mint.save();
                        
    //                     // res.status(202).json({message:"mint register successfully"});
                        
    //                 }catch(err){
    //                     console.log(err);
    //                 }
    //             }
    //         });
    
})

module.exports = router;