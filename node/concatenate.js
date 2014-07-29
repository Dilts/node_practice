var fs = require('fs')

var source1 = process.argv[2]

var source2 = process.argv[3]

var destination = process.argv[4]

var textContent = fs.readFileSync(source1, 'utf-8')

var textContent2 = fs.readFileSync(source2, 'utf-8')



var concat = fs.writeFileSync(destination, textContent + textContent2)

// console.log(source2, source1, destination)

