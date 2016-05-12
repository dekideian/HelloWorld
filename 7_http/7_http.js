var http = require('http')
var url = "www.google.com" //process.argv[2]
console.log("process.argv:"+process.argv[2])
var ghet = http.get(process.argv[2], function(response){
	response.on("data", function(data){
		console.log(data)
	}).setEncoding("utf8")
	
	response.on("error", function(data){
		//console.log(data)
	}).setEncoding("utf8")
	
	response.on("end", function(data){
		//console.log(data)
	}).setEncoding("utf8")
})
//ghet.setEncoding("utf8")