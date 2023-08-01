const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "houseofdev681@gmail.com",
    pass: "qtiaogmcuhbdvzoy",
  },
});

transporter.verify().then(() => {
  console.log("ready for send mails");
});

module.exports = transporter;
