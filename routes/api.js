var express = require('express');
var multer = require('multer');
var upload = multer();

var router = express();

router.get('/', function(req,res) {
    res.render('../views/index.pug');
});

router.post('/', upload.any(), function(req,res) {
    res.json({bytes: req.files[0].size});
});

module.exports = router;