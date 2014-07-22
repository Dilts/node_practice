

var luma = function (r, g, b) {
	return (0.2126*r)+(0.7152*g)+(0.0722*b)
}

var darken = function (r,g,b) {
	return (.8*r)+(.8*g)+(.8*b)
}

// console.log(multiply)

module.exports = {
	luminocity: luma,
	dark: darken
}