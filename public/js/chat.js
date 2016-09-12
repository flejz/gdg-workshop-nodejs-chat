var socket = io();

$('#color').keyup(function() {
  $('#color').css('background-color', $('#color').val());
})

$('#message').keydown(function(key) {
  if (key.keyCode == 13)
    $('#send').click();
});

$('#send').click(function() {

  var username = $('#user').val();
  var message = $('#message').val();
  var color = $('#color').val();


  if (!username) {
    alert('insira um usuário');
    return;
  }

  if (message) {
    socket.emit('message', username, message, color);

    $('#messages').append($('<li><b style="color:' + color +
      '">' + username + ':</b>' + message + '</li>'));
    $('#message').val('').focus();
  }
});

socket.on('message', function(username, message, color) {

  $('#messages').append($('<li><b style="color:' + color +
    '">' + username + ':</b>' + message + '</li>'));
});
