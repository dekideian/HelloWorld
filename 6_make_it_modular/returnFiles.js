var fs = require('fs')
var pathLib = require('path')
//var ext = process.argv[3]
//var path = process.argv[2]
var ext = undefined
var cbFunc = undefined

 //afterReadingDir is a callback, it will call the function
function afterReadingDir(error, list){
	//console.log('we are searching for:'+path+", and extension:"+ext)
	if(error){
		cbFunc(null)
	}else{
		cbFunc(null,list)
	}
}
function returnFolder(path, extension, callbackFunction){	
	ext = extension
	cbFunc = callbackFunction
    fs.readdir(pathLib.normalize(path), afterReadingDir)
	//callbackFunction(null, "caca")
}

module.exports.returnFolder=returnFolder
