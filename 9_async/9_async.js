var http = require('http')
var bl = require('bl')
var result = []
 
function print(){
	for(var i =0;i<3;i++)
		console.log(result[i])	
} 
function getHttp(index){
	http.get(process.argv[2+index], function(response){
		response.pipe(bl(function(err,data){		
			if(err)
				console.err("error")
			else{
				result[index] = data.toString()
				if(index==2)
					print()				
			}
		}))
	})	
}
for (var i = 0;i<3;i++)
	getHttp(i)


/* old approach
var bl2= require('bl')
var bl3= require('bl')
var bl4= require('bl')


http.get(process.argv[2], function(response){	
	response.pipe(bl2(function(err,data){		
			console.log(data.toString())			
		}))
})
http.get(process.argv[3], function(response){	
	response.pipe(bl3(function(err,data){		
			console.log(data.toString())			
		}))
})
http.get(process.argv[4], function(response){	
	response.pipe(bl4(function(err,data){		
			console.log(data.toString())			
		}))
})
*/

