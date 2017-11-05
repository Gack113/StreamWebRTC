const openStream = require('./openStream');
const playVideo = require('./playVideo');
const Peer = require('simple-peer');
const $ = require('jquery');

openStream(stream => {
    playVideo(stream,'localStream')
    
    const p = new Peer({initiator: location.hash === '#1', trickle: false, stream});
    p.on('signal', token => {
        $('#txtSignal').val(JSON.stringify(token));
    });
    
    
    $('#connect').on('click',()=>{
        var otherSignal =  JSON.parse($('#otherSignal').val());
        p.signal(otherSignal);
    });

    p.on('stream', otherStream => playVideo(otherStream,'otherStream'));
});

