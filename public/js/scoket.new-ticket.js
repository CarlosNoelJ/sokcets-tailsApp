
// Command to stablish the connection
var socket = io();

var label = $('#lblNewTicket');


socket.on('connect', function () {
    console.log('Connected to the Server');
});

socket.on('disconnect', function () {
    console.log('Disconnected to the server');
});

// on 'actualState'
socket.on('actualState' ,function(resp){
    label.text( resp.actual )
});

$('button').on('click', function () {
    socket.emit('nextTicket', null, function (nextTicket) {
        label.text(nextTicket);
    });
});