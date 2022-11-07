const mongoose = require("mongoose");

const CurrencySchema = new mongoose.Schema({
    currency:String,
    toAccAddr:String,
    patient_AccountAddress:String,
    mempool_patient:String,
    wallet_patient:String,
    InsAgent_AccountAddress:String,
    mempool_InsAgent:String,
    wallet_InsAgent:String,
    patient_importinput :String,
    Insurance_importinput : String
})

var Currency = mongoose.model("Currency", CurrencySchema);

module.exports = Currency;
