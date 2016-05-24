var http=require('http')
var cache = {}
var useful = require('./modules/useful')
var chatServer=require('./lib/chat_server')

var server = http.createServer(function(request,response){
	var filePath = false
	if(request.url=='/'){
		filePath = 'public/index.html'
	}else{
		filePath = 'public'+request.url		
	}
	var absPath = './'+filePath
	useful.serveStatic(response,cache, absPath)
}).listen(3000,function(){
	console.log('Server listening on port 3000..')
})

chatServer.listen(server)

