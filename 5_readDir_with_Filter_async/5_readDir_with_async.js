var fs = require('fs')
var pathLib = require('path')
var ext = process.argv[3]
var path = process.argv[2]

fs.readdir(pathLib.normalize(path), afterReadingDir) //afterReadingDir is a callback, it will call the function
function afterReadingDir(error, list){
	//console.log('we are searching for:'+path+", and extension:"+ext)
	var i =0;	 
	for(i = 0;i<list.length;i++){
		if(ext=='*'){
			console.log(list[i])
		}else{			
		    //console.log('we are searching for:'+ext+", and we found:"+pathLib.extname(list[i]))
			if('.'+ext==pathLib.extname(list[i]))
				console.log(list[i])			
		}
	} 
}

module.exports=helloNurse