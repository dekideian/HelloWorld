//console.log('Start');
var fs = require('fs');
var file = fs.readFile(process.argv[2],afterReading);
//console.log('Contains:'+file.toString());
var file = undefined

function afterReading(error,data){
	if (error) 
		return console.error(error)
	else{
		console.log(data.toString().split('\n').length-1)
	}		
}

