
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
// app.use(express.urlencoded())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

dotenv.config({path:'./config.env'});

require('./DB/conn');
const User = require('./models/userSchema');
app.use(require('./routes/userRoute'));
app.use(require('./routes/loginRoute'));

const Mint = require('./models/mintSchema');
app.use(require('./routes/mintRoute'));

const Balance = require('./models/balanceSchema');
app.use(require('./routes/balanceRoute'));

app.use(require('./routes/newAddress'));

const Currency = require('./models/currencySchema');
app.use(require('./routes/currencyRoutes'));

const Receiver = require('./models/receiverCheck');
app.use(require('./routes/receiverCheck'));


const PORT = process.env.PORT;

app.listen(PORT, function () {
    console.log(`server started at ${PORT}`);
})