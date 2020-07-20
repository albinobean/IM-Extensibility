$(document).ready(function(){
    var curPage = parseInt($('input[name=currentpage]').val(), 10);
    switch(curPage){
        case 1:
            $('.alleg-uploader').html('<input id="fileUploader" type="file">');
            $('.nextButton').unbind();
            $('.nextButton').click(function(){
                uploadPhoto();
                
            });
            break;
        case 2:
            $('.alleg-imagePreview').html('<img class="imagePreview" src="' + $('.alleg-imagePreview').text() + '">');
            $('.alleg-imagePreview').show();
            break;
    }
    
});
function uploadPhoto(){
    
    var bucketName = "uploadtester";
    var bucketRegion = 'us-east-2';
    var IdentityPoolId ='us-east-2:d3fa98ff-a4c7-44bc-a923-d0c65d5d1457' ;
    
    AWS.config.update({
      region: bucketRegion,
      credentials: new AWS.CognitoIdentityCredentials({
        IdentityPoolId: IdentityPoolId
      })
    });
    
    var s3 = new AWS.S3({
      apiVersion: "2006-03-01",
      params: { Bucket: bucketName }
    });
    
    var uploader=document.getElementById('fileUploader');
    console.log(uploader.files.length);
    var files = uploader.files;
    
    if (files.length) {
        var file = files[0];
        var fileName = file.name;
        var fileKey="upload" + fileName;
        // Use S3 ManagedUpload class as it supports multipart uploads
        var upload = new AWS.S3.ManagedUpload({
            params: {
                Bucket: bucketName,
                Key: fileKey,
                Body: file,
                ACL: "public-read"
            }
        });

        var promise = upload.promise();

        promise.then(
            function(data) {
                console.log(data);
                $('#filePath').val(data.Location);
                nextButtonClicked();
            },
            function(err) {
                console.log(err.message);
                // return alert("There was an error uploading your photo: ", err.message);
            }
        );
    } else {
        nextButtonClicked();
    }
    
}