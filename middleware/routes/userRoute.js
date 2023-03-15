
const express = require("express");
const User = require("../models/userSchema");
const router = express.Router();
const cors = require("cors");
router.use(cors());
const dockerCLI = require("docker-cli-js");
const md5 = require('md5');

router.post("/register",async(req,res)=>{
    
    const {username,firstname,lastname,password} = req.body;
    const hashPassword = md5(password);
    // console.log("firstname " +firstname +lastname)
    if(!firstname || !lastname || !password || !username)
    {
        return res.status(422).json({error:"Please fill the fields"});
    }
    try{
            const user = new User({username,firstname,lastname,password:hashPassword});
           const userExist = await user.save();
          
        res.status(201).json({message:"user register successfully"});
        
    }catch(err){
        console.log(err);
    }
})


router.get("/about",(req,res) => {
    res.status(201).json({message:"hi"});
   
})

// router.get("/exploit",(req,res) => {
//     const DockerOptions = dockerCLI.Options;
//     const Docker = dockerCLI.Docker;
//     const docker = new Docker(); 
//     const userInput = "echo 'Hello from the container'";
    
//     // executing the userinput info
//     docker.command(`exec reactnode bash -c ${userInput}`, function (err, data) {
//             if(data===null){
//                 console.log('docker container is not running');
//                 res.status(201).json('docker container is not running');
//             }else{
//              console.log('data = ', data); 
//              res.status(201).json({data});
//             }
//         });
// })

router.get("/images",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
   //executing the docker images
   docker.command(`images`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/ps",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 

   //executing the docker running images list
   docker.command(`ps`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/network",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker();

   //executing the docker Network list
   docker.command(`network ls`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/inspect",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const container = "reactnode";

   //executing the docker Container inspect
   docker.command(`inspect ${container}`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/search",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const container = "reactnode";

   //executing the docker Container search
   docker.command(`search ${container}`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/loginSuccess",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const username = "sreecharitha";
    const password = "sreecharitha@30";

   //executing the docker login Success
   docker.command(`login -u ${username} -p ${password}`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/loginFail",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const username = "sreecharitha";
    const password = "sreecharitha";

   //executing the docker Login Fail
   docker.command(`login -u ${username} -p ${password}`, function (err, data) {
            if(data===null){
                console.log('data = Login credentials are incorrect'); 
                 res.status(201).json("Login credentials are incorrect");
            }else{
             console.log('data = ', data); 
             res.status(201).json({data});
            }
        });
})

router.get("/pullLatest",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const repository = "sreecharitha/curd";
    
   //executing the docker pull latest from docker hub
   docker.command(`pull ${repository}`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/pullVersion",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const repository = "sreecharitha/curd:1.0";
    
   //executing the docker pull specific version from docker hub
   docker.command(`pull ${repository}`, function (err, data) {
    console.log('data = ', data); 
    res.status(201).json({data});
        });
})

router.get("/pullfake",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const repository = "sreecharitha/fake";
    
   //executing the docker pull fake version from docker hub
   docker.command(`pull ${repository}`, function (err, data) {
    if(data===null){
        console.log('data = An image does not exist'); 
         res.status(201).json('An image does not exist');
        }else{
        console.log('data = ', data); 
         res.status(201).json({data});
        }
        });
})

router.get("/push",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const repository = "sreecharitha/curd";
    
   //executing the docker push specific version from docker hub
   docker.command(`push ${repository}`, function (err, data) {
             console.log('data = ', data); 
             res.status(201).json({data});
        });
})

router.get("/pushFake",(req,res) => {
    const DockerOptions = dockerCLI.Options;
    const Docker = dockerCLI.Docker;
    const docker = new Docker(); 
    const repository = "abcd";
    
   //executing the docker push fake version from docker hub
   docker.command(`push ${repository}`, function (err, data) {
            if(data===null){
            console.log('data = An image does not exist locally'); 
             res.status(201).json('An image does not exist locally');
            }else{
            console.log('data = ', data); 
             res.status(201).json({data});
            }
             
        });
})

module.exports = router;


