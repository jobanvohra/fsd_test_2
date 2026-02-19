const express = require('express');
const app = express();

const port = 8080;

app.get('/', (req, res) => {
	res.send('GET request to homepage');
});

app.post('/', (req, res) => {
	res.send('POST request to homepage');
});

app.get('/about', (req, res) => {
	res.send('GET request to about page');
});

app.post('/about', (req, res) => {
	res.send('POST request to about page');
});

app.all('*', (req, res) => {
	res.status(400).send('404-Page not found');
});

app.listen(port, () => {
	console.log(`Server now listening to port ${port}`);
});
