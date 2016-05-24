var socketio = require('socket.io')
var io
var guestNumber = 1
var nickNames = {}
var namesUsed=[]
var currentRoom = {}

function assignGuestName(socket,guestNumber, nickNames, namesUsed){
	var name = 'Guest'+guestNumber //generate guest name 
	nickNames[socket.id]=name //associate guest name with client connection id
	socket.emit('nameResult',{success:true, name:name}) //let the user know his
	//guest name
	namesUsed.push(name) //note that guest name is now used.
	return guestNumber+1
}

function listen(server){
	io = socketio.listen(server)//start the socket.io server, it piggybacks on the http server
	io.set('log level', 1)
	io.sockets.on('connection',function(socket){ // defines how user connections will be handled
		guestNumber = assignGuestName(socket, guestNumber, nickNames, namesUsed) //assign the user a 
		//guestName when they connect.
		joinRoom(socket, 'Lobby') // place the user in the lobby room when they connect
		handleMessageBroadcasting(socket)
		handleNameChangeAttempts(socket, nickNames, namesUsed)
		handleRoomJoining(socket)
		socket.on('rooms', function(){ //provide user with list of occupied rooms on request
			socket.emit('rooms', io.sockets.manager.rooms)
		})
		handleClientDisconnection(socket, nickNames, namesUsed) //define cleanup logic for when a user 
		//disconnects
	})
	
}

module.exports.listen = listen