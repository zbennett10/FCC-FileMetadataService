var express = require('express');
var multer = require('multer');
var upload = multer();
var fileObject = {
    fileName: '',
    fileSize: 0
};

var router = express();

router.get('/', function(req,res) {
    res.render('../views/index.pug', {Bytes: JSON.stringify(fileObject)});
});

router.post('/', upload.any(), function(req,res, next) {
    fileObject.fileName = req.files[0].originalname;
    fileObject.fileSize = req.files[0].size;
    res.end();
});

module.exports = router;