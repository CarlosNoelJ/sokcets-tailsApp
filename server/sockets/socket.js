const { io } = require('../server');

const { TicketControl } = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {
    
    client.on('nextTicket', (data, callback) => {

        let next = ticketControl.nextTicket();

        console.log(next);
        callback(next);
    })

    // emit an event call 'actualState' and return the last ticket in a formtar.
    client.emit('actualState', {
        actual: ticketControl.getLastTicket() ,
        last4: ticketControl.getLast4()
    });


    client.on('attendTicket', (data, callback) => {

        if (!data.desktop) {
            return callback({
                err: true,
                message: 'desktop is necessary'
            })
        }

        let attendTicket = ticketControl.attendTicket(data.desktop);

        callback(attendTicket);

        // update/notify change about the last 4
        // emit 'last4'
        client.broadcast.emit('last4', {
            last4: ticketControl.getLast4()
        });
    });

});