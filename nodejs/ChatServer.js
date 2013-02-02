var io = require('socket.io').listen(3333, {
	'browser client minification': true
});

io.sockets.on('connection', function (socket) {

	var user;

	socket.on('register', function (u) {
		user = u;
		socket.emit('message', {
			nickname: '** SERVER **',
			message: 'Welcome to chat ' + user.nickname + '!'
		});
	});

	socket.on('message', function (m) {
		socket.broadcast.emit('message', m);
	});

});