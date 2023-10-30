const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: "iamfarmanmalik@gmail.com",
    pass: "qlvkbxaweflkdtke",
  },
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to,subject,text,html) {
  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: 'iamfarmanmalik@gmail.com', // sender address
    to,
    subject,
    text,
    html
  })

}


module.exports = {sendMail}