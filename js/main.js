navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then(stream => {
    let video = document.getElementById('bgVideo');
    video.srcObject = stream;


}).catch(function (err) {
    $('#errorMsg').text(err);

    console.log(err);
});
