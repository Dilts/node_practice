var red = process.argv[2]
var green = process.argv[3]
var blue = process.argv[4]

var multiply = (0.2126*red)+(0.7152*green)+(0.0722*blue)

console.log(multiply)

// var lightOrDark = multiply;

if(multiply > 155) {
	console.log('This is a light color')
}


else{
	console.log('This is a dark color')
}