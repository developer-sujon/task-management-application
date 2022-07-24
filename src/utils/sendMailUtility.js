const nodemailer = require("nodemailer");

//external import
const sendMailUtility = async (emailTo, emailText, emailSubject) => {
  let transporter = await nodemailer.createTransport({
    name: "mail.sujon.one",
    host: "mail.sujon.one",
    port: 25,
    secure: false,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const mailOption = {
    from: "Task Management App <contact@sujon.one>", // sender address
    to: emailTo, // list of receivers
    subject: emailSubject, // Subject line
    text: emailText, // plain text body
  };

  return await transporter.sendMail(mailOption);
};

module.exports = sendMailUtility;
