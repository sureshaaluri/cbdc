const mongoose = require("mongoose");

const BalanceSchema = new mongoose.Schema({
    mempool: String,
    wallet: String,
    
})

var Balance = mongoose.model("Balance", BalanceSchema);

module.exports = Balance;
