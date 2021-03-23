const socket = io();
$('form').submit(function() {
    const name = $('#name').val();
    const message = $('#message').val();

    socket.emit('chatter', `${name} : ${message}`);
    $('#message').val('');
    return false; 
});

socket.on('chatter', function(message) {
    $('#chat-messages').append($('<li>').text(message));
});