const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

router.get('/', (req, res) => {
  res.render('index', {
    layout: 'layout'
  });
});

router.get('/dev', (req, res) => {
  res.render('index', {
    layout: 'layout-dev'
  });
});

//robot.txt file handling
router.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send(`Sitemap: https://247staywarmco.uk/sitemap\nUser-agent: *\nDisallow: /`);
});

router.post('/contact', function (req, res) {
  // setup email data with unicode symbols
    let mailOptions = {
        from: '"Fred Foo 👻" <foo@example.com>', // sender address
        to: 'bar@example.com, baz@example.com', // list of receivers
        subject: 'Hello ✔', // Subject line
        text: 'Hello world?', // plain text body
        html: '<b>Hello world?</b>' // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

});

module.exports = router;
