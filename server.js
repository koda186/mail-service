//nodemon server
const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 4444;
var cors = require('cors')

app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
//use the sendToMe route file
app.use('/sendtome', require('./routes/sendToMe'));


app.listen(PORT, () => {
  console.log(`app is live on ${PORT}`);
});
