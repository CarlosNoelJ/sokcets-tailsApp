// Command to stablish the connection
var socket = io();

var searchParams = new URLSearchParams( window.location.search );


if(!searchParams.has('Desktop')){
    window.location = 'index.html';
    throw new Error('Desktop is necessary');
}

var desktop = searchParams.get('Desktop');
var label = $('small');

console.log(desktop);
$('h1').text('Desktop ' + desktop);


$('button').on('click',function(){

    socket.emit('attendTicket',{desktop: desktop}, function(resp){

        console.log(resp);
    });
});