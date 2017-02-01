console.log('script loaded');
const form = document.querySelector('form');
const fileInput = document.querySelector('#fileInput');


form.onsubmit = function(e) {
    var formData = new FormData(form);
    var file = fileInput.files[0];
    formData.set('userUpload', file);

    $.ajax({
        url: '/',
        type: 'POST',
        data: formData,
        cache: false,
        //these parameters must be set for file uploading
        processData: false,
        contentType: false,
        error: function(err, status) {
            console.log(err, status);
        },
        success: function(result) {
            console.log(result);
            formData.delete('userUpload');
            location.reload();
        }
    });

     e.preventDefault();
     return false;
}

