const mongoose = require("mongoose");

const CurrencySchema = new mongoose.Schema({
    currency: Number,
    accAddr: String,
    mempool:String,
    wallet:String
})

var Currency = mongoose.model("Currency", CurrencySchema);

module.exports = Currency;
