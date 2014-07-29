var myMenu = require('./menu.js')
// annalgous: <script src='menu.js'><script>
console.log(myMenu.lunchMenu);

var lunchItems = process.argv.slice(2)

if(lunchItems.length === 0) {
	console.log('You must order at least one item!')
}

else if(lunchItems.length > 3) {
	console.log('You cannot order more than three items!')
}

else{
	console.log('You have ordered: \n' + lunchItems.join('\n'))
}

