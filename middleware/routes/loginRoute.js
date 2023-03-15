const jwt=require("jsonwebtoken");
const jsonwebtoken = require("jsonwebtoken")
const express = require("express");
const User = require("../models/userSchema");
const Account = require("../models/newAddrSchema")
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");
const nodemailer = require("nodemailer");
const md5 = require('md5');

router.post("/login", async (req,res)=>{
    // console.log("hiiii ",req.body)
    const {username,password} = req.body;
    const hashPassword = md5(password);

    if(!username || !password)
    {
        return res.status(422).json({error:"Please fill the fields"});
    }
    try{
        const userExist = await User.findOne({username:username,password:hashPassword});
        if(userExist)
        {
            const token = await userExist.generateAuthToken();
            // console.log(token);

            res.cookie("jwtoken",token,{
                expires : new Date(Date.now()+25892000000),
                httpOnly : true 
            });
            res.status(201).json({message:"user register successfully",UserDetails : userExist,token:token});
        }else{
            res.status(423).json({message:"user register Incorrect"});
        
        }
    }catch(err){
        console.log(err);
    }
})


router.post("/walletLogin", async (req,res)=>{


    const {username,password, role} = req.body;

    const hashPassword = md5(password);
    console.log(req.body)
    if(!username || !password || !role)
    {
        return res.status(422).json({error:"Please fill the fields"});
    }
    try{
        const userExist = await Account.findOne({name:username,password:hashPassword,role:role});
        
        if(userExist)
        {
           

            const OTP = Math.floor(Math.random() * (9999 - 1111 + 1) ) + 1111;
            console.log("userExist proof "+ userExist.email + "-"+process.env.email+"-"+process.env.password+"-"+OTP)
            var transporter = nodemailer.createTransport({
                service:'gmail',
                auth:{
                    user : process.env.email,
                    pass : process.env.password
                }
            });
                
            var mailOptions = {
                from : process.env.email,
                to : userExist.email,
                subject : 'CBDC Verification',
                html : `<h3>Your OTP ${OTP} </h3>`
            };
        
            transporter.sendMail(mailOptions,async function(err,info){
                if(err){
                    console.log("err: "+err)
                }else{
                    const token = await userExist.generateAuthToken();
            
                    res.cookie("jwtoken",token,{
                        expires : new Date(Date.now()+25892000000),
                        httpOnly : true 
                    });
                    console.log("email sent "+info.response)
                    res.status(201).json({message:"user Login successfully",UserDetails : userExist,otp:OTP,token:token});
                }
            })
            
            
        }else{
            res.status(423).json({message:"user Login Incorrect"});
        
        }
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
