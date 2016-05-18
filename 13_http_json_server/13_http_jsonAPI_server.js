var http = require('http')
var url = require('url')
var port = process.argv[2]
var hour = undefined
var minutes = undefined
var seconds = undefined
var unixtime = undefined
var pathToFile =  (process.argv[3])   
//var serverFile = fs.createReadStream()
var hostname = "0.0.0.0"

var server = http.createServer(function(request,response){
	response.writeHead(200,{"Content-Type":"text/html"})		
	if(request.method=='GET'){
		var dataRAW = url.parse(request.url, true).query
		if(url.parse(request.url).pathname=='/api/parsetime'){			
			var data = new Date(dataRAW.iso);				
			hour = data.getHours()
			minutes = data.getMinutes()
			seconds = data.getSeconds()
			response.write(JSON.stringify({"hour":hour,"minute":minutes,"second":seconds}))
			//response.write("\n data procesata :"+hour+", "+minutes+", "+seconds)			
		} else if(url.parse(request.url).pathname=='/api/unixtime'){			
			var unixtime = Math.floor(new Date(dataRAW.iso)/1000)
			//response.write("\n Hello nurse! :"+url.parse(request.url).pathname+"; avem:"+data.iso)
			response.write(JSON.stringify({"unixtime":unixtime}))			
		}	
	}	 
})
server.listen(port,hostname,function(){
	//console.log('Server running')
})
