// arguments:
const multipleArguments = (...args) => {
	let subtotal = 1
	for (let i = 0; i < args.length; i++) {
		subtotal *= args[i];
		console.log(subtotal)
	}
	return subtotal;
}
console.log(multipleArguments(1,2,3,4,5,6,7));


// Don't alter the lines below
module.exports = {
	multipleArguments
}

