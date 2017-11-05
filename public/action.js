
//var socket = io("http://localhost:3000");

navigator.mediaDevices.getUserMedia({audio:true, video:true})
.then(stream => {
    const video = $('#localStream');
    video.srcObject = stream;
    video.onloadedmetadata = function(){
        video.play();
    };
})
.catch(err => console.log(err));

$(document).ready(function(){

});