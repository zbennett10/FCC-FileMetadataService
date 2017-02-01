var express = require('express');
var router = express();
var multer = require('multer');
var upload = multer();

//instantiate empty file object to hold uploaded file data
var fileObject = {
    fileName: '',
    fileSize: 0
};

//handle get request on main page
router.get('/', function(req,res) {
    res.render('../views/index.pug', {Bytes: JSON.stringify(fileObject)}); //send fileObject to index.pug
});

//handle file upload
router.post('/', upload.any(), function(req,res, next) {
    //set properties of fileObject - ajax request from script.js reloads page with new fileObject info
    fileObject.fileName = req.files[0].originalname;
    fileObject.fileSize = req.files[0].size;
    res.end();
});

module.exports = router;