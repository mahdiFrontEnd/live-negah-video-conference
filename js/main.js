navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
}).then(stream => {
    let video = document.getElementById('bgVideo');
    let l1 = document.getElementById('l1');
    video.srcObject = stream;
    l1.srcObject = stream;


}).catch(function (err) {
    $('#errorMsg').text(err);

    console.log(err);
});
