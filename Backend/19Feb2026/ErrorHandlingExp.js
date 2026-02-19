function doSomething() {
	throw new Error('an error is thrown from doSomething');
}

function init() {
	try {
		doSomething();
	} catch (e) {
		console.log(e);
	}
	console.log('After successful error handling');
}

init();
