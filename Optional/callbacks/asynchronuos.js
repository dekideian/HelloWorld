var fs = require('fs') // require is a special function provided by node
var myNumber = 0 // we don't know what the number is yet since it is stored in a file

function addOne() {
  fs.readFile('./number.txt', function doneReading(err, fileContents) {	 
    myNumber = parseInt(fileContents)
    myNumber++
console.log('new nr:'+myNumber)
  })
}

addOne()

console.log(myNumber) // logs out undefined -- this line gets run before readFile is done