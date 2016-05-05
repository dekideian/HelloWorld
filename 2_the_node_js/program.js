//console.log(process.argv);these are the parameters that we send to the node app.
var i = 0,s=0;
for(i=2; i<process.argv.length;i++){
	s=s+Number(process.argv[i]);
}
console.log(s);