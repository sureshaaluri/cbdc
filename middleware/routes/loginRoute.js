const jwt=require("jsonwebtoken");
const jsonwebtoken = require("jsonwebtoken")
const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");

router.post("/login",async(req,res)=>{
    const {username,password} = req.body;
    if(!username || !password)
    {
        return res.status(422).json({error:"Please fill the fields"});
    }
    try{
        const userExist = await User.findOne({username:username,password:password});
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

module.exports = router;
