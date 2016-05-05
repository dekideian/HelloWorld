//console.log('Start');
var fs = require('fs');
var file = fs.readFileSync(process.argv[2]);
//console.log('Contains:'+file.toString());
console.log(file.toString().split('\n').length-1)