const nodemailer = require("nodemailer");
const config = require("config");
// module.exports = function(name, email) {
//   const transporter = nodemailer.createTransport({
//     host: "mail.mavisgate.herokuapp.com",
//     port: 25,
//     secure: false,
//     auth: {
//       user: "no-reply@mavisgate.herokuapp.com",
//       pass: "mavisgateemail32"
//     },
//     tls: { rejectUnauthorized: false }
//   });

//   const mailOptions = {
//     from: "no-reply@mavisgate.herokuapp.com",
//     to: `${email}`,
//     subject: `${name}, welcome to Mavisgate!`,
//     html: `
//             <h1>Hello, ${name}. Welcome to Mavisgate</h1>
//         `
//   };

//   transporter.sendMail(mailOptions, function(error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// };

module.exports = function(name, email) {
  //   console.log(name, email);
  const transporter = nodemailer.createTransport({
    host: "smtp.sendgrid.net",
    port: 25,
    secure: false,
    auth: {
      user: "apikey",
      pass: config.get("sendGridKey")
    }
  });

  const message = {
    from: "dankfullstack@gmail.com",
    to: email,
    subject: "Welcome to Mavisgate",
    text: "Welcome"
  };

  transporter.sendMail(message, (error, info) => {
    if (error) {
      console.log(error);
    }
    console.log("Email sent: " + info);
  });
};
