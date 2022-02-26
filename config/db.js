const mongoose = require('mongoose');
const connectionDB = async () => {
	try {
		const connection = await mongoose.connect(process.env.MONGO_URI);
		console.log(
			`MongoDB connected: ${connection.connection.host}` +
				':' +
				connection.connection.port,
		);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};
module.exports = connectionDB;
