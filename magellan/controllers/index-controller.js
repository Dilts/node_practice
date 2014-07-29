var locations = require('../models/locations.js');


var controller = {

	index: function(req, res) {
			// console.log(req.params)

			res.render('index', {local: locations[0]});
	},

	nextPage: function(req, res) {
		// console.log(req.params)
			for (var i = 0; i < locations.length; i++) {
				if (req.params.name === locations[i].location) {
					res.render('index', {local: locations[i]})
				}
			}
	}
}

module.exports = controller;