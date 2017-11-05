const openStream = require('./openStream');

const $ = require('jquery');
//openStream();


const Peer = require('simple-peer');
const p = new Peer({initiator: location.hash === '#1', trickle: false});
p.on('signal', token => {
    $('#txtSignal').val(JSON.stringify(token));
});

p.on('connect', () => {
    setInterval(() => p.send(Math.random()), 2000)
});

p.on('data', data => console.log('nhan dc ' + data));

$('#connect').on('click',()=>{
    var otherSignal =  JSON.parse($('#otherSignal').val());
    p.signal(otherSignal);
});