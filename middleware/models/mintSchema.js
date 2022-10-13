const mongoose = require("mongoose");

const MintSchema = new mongoose.Schema({
    nOutputs: Number,
    outputValue: Number,
    mempool:String,
    wallet:String
})

var Mint = mongoose.model("Mint", MintSchema);

module.exports = Mint;
