const mongoose = require("mongoose");

const ReceiverSchema = new mongoose.Schema({
    mempool: String,
    wallet: String,
    importinput:String
})

var Receiver = mongoose.model("Receiver", ReceiverSchema);

module.exports = Receiver;
