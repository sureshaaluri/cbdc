
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv");

const fs = require("fs");
const https     =       require('https');

const key = fs.readFileSync('private.key');
const cert = fs.readFileSync('certificate.crt');


const app = express();
app.use(express.json());
// app.use(express.urlencoded())
app.use(cors())
app.use(express.urlencoded({ extended: true }));



dotenv.config({path:'./config.env'});

require('./DB/conn');

const cred = {key, cert};

const User = require('./models/userSchema');
app.use(require('./routes/userRoute'));
app.use(require('./routes/loginRoute'));

const Mint = require('./models/mintSchema');
app.use(require('./routes/mintRoute'));
app.use(require('./routes/addWallet'))

const Balance = require('./models/balanceSchema');
app.use(require('./routes/balanceRoute'));

app.use(require('./routes/newAddress'));

const Currency = require('./models/currencySchema');
app.use(require('./routes/currencyRoutes'));
app.use(require('./routes/mobTransfer'));

const Receiver = require('./models/receiverCheck');
app.use(require('./routes/receiverCheck'));


const PORT = process.env.PORT;


app.listen(PORT, function () {
    console.log(`server started at ${PORT}`);
})

const httpsServer = https.createServer(cred, app);
// httpsServer.listen(443);