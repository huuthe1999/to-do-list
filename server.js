const express = require('express');
const app = express();
require('dotenv').config();
const connectionDB = require('./config/db');
const port = process.env.PORT || 5000;

connectionDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', async (req, res) => {
	res.send('Hello World!');
});
app.listen(port, function () {
	console.log('Server is running on port ' + port);
});
