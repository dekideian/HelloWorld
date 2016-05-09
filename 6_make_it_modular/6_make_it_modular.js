var ext = process.argv[3]
var path = process.argv[2]
var pathLib = require('path')
var returnFilesModule = require('./returnFiles')

function callbackFunction(error, list){
	//console.log('msg:'+list)	
	if(error){
		
	}else{
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
}

returnFilesModule.returnFolder(path, ext, callbackFunction) 
 