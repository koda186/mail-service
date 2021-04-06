const express = require('express');
const app = express();
require('dotenv').config();
const morgan = require('morgan');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 4444;

app.use(morgan('dev'));
app.use(express.json());


app.listen(PORT, () => {
  console.log(`app is live on ${PORT}`);
});
