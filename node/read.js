var fs = require('fs')

var find = process.argv[2]

var destination = process.argv[3]

var textContent = fs.readFileSync(find, 'utf-8')

var createNew = fs.writeFileSync(destination, textContent)










// var textContent = fs.readFileSync(process.argv[2], 'utf-8')






// var newTextContent = fs.writeFileSync(process.argv['new.js'], 'utf-8')`


// console.log(textContent)