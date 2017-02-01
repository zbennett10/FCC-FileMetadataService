var express = require('express');
var multer = require('multer');

var router = express();

router.get('/', function(req,res) {
    res.render('../views/index.pug');
});

router.post('/', function(req,res) {
    //do multer stuff and get file size in bytes
    //render json containing byte size
});

module.exports = router;