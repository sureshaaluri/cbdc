const mongoose = require("mongoose");
const jwt=require("jsonwebtoken")
const jsonwebtoken = require("jsonwebtoken")

const AccountSchema = new mongoose.Schema({
    name:String,
    mempool: String,
    wallet: String,
    AccountAddress:String,
    role:String,
    slt_pat_agent:String,
    nOutputs: Number,
    outputValue: Number,
    password:String,
    email:String,
    accountAddress:String
})

AccountSchema.methods.generateAuthToken = async function(){
    
    let token = jwt.sign({_id:this.id},process.env.SECRET_KEY);
    if(!this.tokens){
        this.tokens = token;
    }
    
    const decoded = jwt.decode(token);
    await this.save();
    return token;

}

var Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
