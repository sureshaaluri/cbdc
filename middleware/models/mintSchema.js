const mongoose = require("mongoose");

const MintSchema = new mongoose.Schema({
    slt_pat_agent:String,
    name:String,
    nOutputs: Number,
    outputValue: Number,
    mempool:String,
    wallet:String
})

var Mint = mongoose.model("Mint", MintSchema);

module.exports = Mint;
