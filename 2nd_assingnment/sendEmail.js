const nodemailer = require('nodemailer');
require("dotenv").config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD
  }
});
const sendingMail = (email,name) => {

    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Hi ${name}`,
      text: 'How are you?'
    };
    
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    }); 
}

module.exports = {sendingMail}
