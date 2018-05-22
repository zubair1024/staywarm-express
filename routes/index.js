var express = require('express');
var router = express.Router();

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

module.exports = router;
