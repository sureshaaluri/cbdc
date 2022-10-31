const mongoose = require("mongoose");

const AccountSchema = new mongoose.Schema({
    name:String,
    mempool: String,
    wallet: String,
    AccountAddress:String,
    role:String,
    slt_pat_agent:String,
    nOutputs: Number,
    outputValue: Number,
})

var Account = mongoose.model("Account", AccountSchema);

module.exports = Account;
