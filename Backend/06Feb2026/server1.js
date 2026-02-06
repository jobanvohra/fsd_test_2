const http = require('http');
const fs = require('fs').promises;

const server = http.createServer();

async function readFileExample() {
	try {
		const data = await fs.readFile('myfile.txt', 'utf8');
		console.log('File content:', data);
	} catch (e) {
		console.error('Error reading file:', e);
	}
}

readFileExample();

const { promisify } = require('util');
const readFileAsync = promisify(require('fs').readFile);

async function readWithPromisify() {
	try {
		const data = await readFileAsync('myfile.txt', 'utf8');
		console.log(data);
	} catch (e) {
		console.error(e);
	}
}

readWithPromisify();

const port = 3000;
server.listen(port, () => {
	console.log(`Server listening to port ${port}`);
});
