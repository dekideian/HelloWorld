var port = process.argv[2]
var resultString=undefined
var net = require('net')
	
net.createServer(function ourTCPcallback(socket){
	//socket handling logic
	//we only need to write data and then close the socket.
	var date = new Date()
	var year = date.getFullYear()
	var month = date.getMonth()
	month = month+1
	var day = date.getDate()
	var hours = date.getHours()
	var minutes = date.getMinutes()	
	if(month<10)
		theMonth="0"+month++
	socket.write(year+"-"+theMonth+"-"+day+" "+hours+":"+minutes+"\n")	
	socket.end();
}).listen(port)