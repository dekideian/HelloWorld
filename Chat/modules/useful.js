var fs=require('fs')
var mime=require('mime')
var path=require('path')

function send404(response){
	response.writeHead(404,{'Content-Type':'text/plain'})
	response.write('Error 404: resource not found.')
	response.end();
}

function sendFile(response,filePath, fileContents){
	response.writeHead(200,{'content-type':mime.lookup(path.basename(filePath))})
	response.end(fileContents)
}

function serveStatic(response, cache, absPath){
	if(cache[absPath]){ //check if the file is cached in memory
		sendFile(response, absPath, cache[absPath]) // serve the file from memory
	}else{
		fs.exists(absPath, function(exists){ //check if file exists
			if(exists){
				fs.readFile(absPath, function(err, data){
					if(err){
						send404(response)
					}else{
						cache[absPath] = data
						sendFile(response, absPath, data) // serve file from disk
					}
				})
			}else{
				send404(response)
			}
		})
	}
}

module.exports.serveStatic=serveStatic