async function f() {
	let response = await fetch('http://xyzurl');
}

f().catch((e) => console.log(e.message));
