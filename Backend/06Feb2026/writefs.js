const http = require('http');
const fs = require('fs').promises;

const server = http.createServer();

async function writeFileExample() {
	try {
		await fs.writeFile('myfile.txt', 'Hello,World!', 'utf8');

		const data = { name: 'John', age: 30, city: 'New York' };
		await fs.writeFile('data.json', JSON.stringify(data, null, 2), 'utf8');

		console.log('Files created successfully');
	} catch (e) {
		console.error('Error writing files:', e);
	}
}

writeFileExample();

const port = 3000;
server.listen(port, () => {
	console.log(`Server  listening to port ${port}`);
});
