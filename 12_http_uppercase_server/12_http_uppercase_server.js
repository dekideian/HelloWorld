var http = require('http')
var map = require('through2-map')
var port = process.argv[2]
var pathToFile =  (process.argv[3])   
//var serverFile = fs.createReadStream()
var hostname = "0.0.0.0"

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"})	
		if(request.method!='POST')
			return response.end('Send me a post!')
	request.pipe(map(function(chunk){
		return chunk.toString().split(',').join().toUpperCase()
	})).pipe(response)
})
server.listen(port,hostname,function(){
	console.log('Server running')
})
