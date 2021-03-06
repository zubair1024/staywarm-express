const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.get("/", (req, res) => {
  res.render("index", {
    layout: "layout"
  });
});

router.get("/dev", (req, res) => {
  res.render("index", {
    layout: "layout-dev"
  });
});

router.get("/thankyou", (req, res) => {
  res.render("thankyou", {
    layout: "layout"
  });
});

router.get("/faqs", (req, res) => {
  res.render("index", {
    layout: "layout"
  });
});

router.get(
  "/.well-known/acme-challenge/9zRYklBj-oWbC0v-fr_DGtmJ9gZJJECwZujRoEZfWD4",
  (req, res) => {
    res.type("text/plain");
    res.send(
      "9zRYklBj-oWbC0v-fr_DGtmJ9gZJJECwZujRoEZfWD4.Nj7TUfeTu7aF_1fjMIf9VRf3b6xIuzJ9QBPH-oG_O0E"
    );
  }
);

//robot.txt file handling
// router.get('/robots.txt', function (req, res) {
//   res.type('text/plain');
//   res.send(`Sitemap: https://247staywarmco.uk/sitemap\nUser-agent: *\n`);
// });

router.post("/contact", function(req, res) {
  // setup email data with unicode symbols
  let mailOptions = {
    from: '"STAYWARM 👻" <foo@example.com>', // sender address
    to:
      "staywarm@247homerescue.co.uk, za@razrlab.com, jg@razrlab.com, ma@razrlab.com", // list of receivers
    subject: "StayWarm Contact ✔", // Subject line
    text: `
        
        `, // plain text body
    html: `
        <table>
        <tr>
        <td>Name</td>
        <td>${req.body.name}</td>
        </tr>
        <tr>
        <td>Email Address</td>
        <td>${req.body.email}</td>
        </tr>
        <tr>
        <td>Message</td>
        <td>${req.body.message}</td>
        </tr>
        </table>
        ` // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return console.log(error);
    }
    res.status(200).send({
      status: "success"
    });
    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  });
});

module.exports = router;
