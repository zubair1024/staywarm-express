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


router.get('/.well-known/acme-challenge/OStyx9PAUK0T2x4Pb8atGxT4b42pg5JogmudT9uuyiM', (req, res) => {
  res.type('text/plain');
  res.send('OStyx9PAUK0T2x4Pb8atGxT4b42pg5JogmudT9uuyiM.Nj7TUfeTu7aF_1fjMIf9VRf3b6xIuzJ9QBPH-oG_O0E');
});


//robot.txt file handling
router.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send(`Sitemap: https://247staywarmco.uk/sitemap\nUser-agent: *\nDisallow: /`);
});

router.post('/contact', function (req, res) {
  // setup email data with unicode symbols
    let mailOptions = {
        from: '"STAYWARM 👻" <foo@example.com>', // sender address
        to: 'staywarm@247homerescue.co.uk, za@razrlab.com, jg@razrlab.com, ma@razrlab.com', // list of receivers
        subject: 'StayWarm Contact ✔', // Subject line
        text: `
        
        `, // plain text body
        html: `
        <table>
        <tr>
        <td>Name</td>
        <td>TEST</td>
        </tr>
        <tr>
        <td>Email Address</td>
        <td>TEST</td>
        </tr>
        <tr>
        <td>Message</td>
        <td>TEST</td>
        </tr>
        </table>
        ` // html body
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
