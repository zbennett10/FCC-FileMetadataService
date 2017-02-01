const form = document.querySelector('form');
const fileInput = document.querySelector('#fileInput');

//handle form submission
form.onsubmit = function(e) {

    //create new FormData object with the submitted file within it
    var formData = new FormData(form);
    var file = fileInput.files[0];
    formData.set('userUpload', file);

    //post FormData object to server and reload page upon successful post
    $.ajax({
        url: '/',
        type: 'POST',
        data: formData,
        cache: false,
        processData: false, //this parameter must be set for file uploading
        contentType: false, //this parameter must be set for file uploading
        error: function(err, status) {
            console.log(err, status);
        },
        success: function(result) {
            formData.delete('userUpload'); //delete file after its been posted
            location.reload();
        }
    });
     e.preventDefault();
     return false;
}

