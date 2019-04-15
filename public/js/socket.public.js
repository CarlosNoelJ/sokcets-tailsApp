var socket = io();


var lbTicket1 = $('#lblTicket1');
var lbTicket2 = $('#lblTicket2');
var lbTicket3 = $('#lblTicket3');
var lbTicket4 = $('#lblTicket4');

var lblDesktop1 = $('#lblEscritorio1');
var lblDesktop2 = $('#lblEscritorio2');
var lblDesktop3 = $('#lblEscritorio3');
var lblDesktop4 = $('#lblEscritorio4');

var lblTickets = [lbTicket1, lbTicket2, lbTicket3, lbTicket4];
var lblDektops = [lblDesktop1, lblDesktop2, lblDesktop3, lblDesktop4];

socket.on('actualState', function (data) {
    // console.log(data);

    updateHtml(data.last4);
});

socket.on('last4', function (data) {
    // console.log(data);

    var audio = new Audio('audio/new-ticket.mp3');
    audio.play();

    updateHtml(data.last4);
});

function updateHtml(last4) {

    for (let i = 0; i <= last4.length - 1; i++) {
        lblTickets[i].text('Ticket ' + last4[i].number);
        lblDektops[i].text('Desktop ' + last4[i].desktop);
    }

}