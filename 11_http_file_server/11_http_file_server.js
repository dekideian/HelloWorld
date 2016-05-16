var http = require('http')
var fs = require('fs')
var port = process.argv[2]
var pathToFile =  (process.argv[3])   
//var serverFile = fs.createReadStream()
var hostname = "0.0.0.0"

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"})
	var streamObject = fs.createReadStream(pathToFile)
	streamObject.pipe(response)
	//response.end("...")
})
server.listen(port,hostname,function(){
	console.log('Server running')
})
