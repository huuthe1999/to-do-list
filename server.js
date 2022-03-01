const express = require('express');
const app = express();
require('dotenv').config();
const connectionDB = require('./config/db');
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT || 5000;

connectionDB();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
	res.send('Hello World!');
});

app.use('/api/projects', require('./routes/project-route'));
app.use('/api/todos', require('./routes/todo-route'));

// handle error
app.use((req, res, next) => {
	res.status(404).json({
		message: 'Could not find this route.',
	});
});

app.listen(port, function () {
	console.log('Server is running on port ' + port);
});
