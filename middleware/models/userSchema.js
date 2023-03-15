const jwt=require("jsonwebtoken")
const mongoose = require("mongoose");
const jsonwebtoken = require("jsonwebtoken")

const UserSchema = new mongoose.Schema({
    username: String,
    lastname: String,
    firstname: String, 
    password:  String,
    
})

UserSchema.methods.generateAuthToken = async function(){
    
        let token = jwt.sign({_id:this.id},process.env.SECRET_KEY);
        // this.tokens = this.tokens.concat({token:token})
        if(!this.tokens){
            this.tokens = token;
        }
        
        const decoded = jwt.decode(token);
        // const verified = jwt.verify(token,process.env.SECRET_KEY)
        // console.log(decoded._id)
        await this.save();
        return token;
    
}

var User = mongoose.model("User", UserSchema);

module.exports = User;
