console.log('Hello nurse!')
var fs = require('fs')
var pathLib = require('path')
var ext = process.argv[3]
var path = process.argv[2]
var list = undefined

function doAllTheWork(directory, extension, callbackFunction){
    fs.readdir(pathLib.normalize(path), function doStuff(error, files){
        if (error){ 		
            callbackFunction(error,null)            
        }    
	    else{
		    //console.log(data.toString().split('\n').length-1)
            var i =0;	 
            for(i = 0;i<list.length;i++){
                if(ext=='*'){
                    console.log(list[i])
                }else{			
                    //console.log('we are searching for:'+ext+", and we found:"+pathLib.extname(list[i]))
                    if('.'+ext==pathLib.extname(list[i]))
                        list=list[i]+'\n'
                       // console.log(list[i])		
                           	
                }
            } 
            callbackFunction(null,list)
	    }	
        
    }) //afterReadingDir is a callback, it will call the function
}
module.exports.doAllTheWork=doAllTheWork