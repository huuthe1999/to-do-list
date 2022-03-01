const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		date: {
			type: Date,
			required: true,
		},
		time: {
			type: Date,
			required: true,
		},
		day: {
			type: Number,
			required: true,
		},
		checked: {
			type: Boolean,
			default: false,
		},
		color: {
			type: String,
		},
		projectId: {
			type: mongoose.Types.ObjectId,
			ref: 'Project',
		},
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);
module.exports = mongoose.model('Todo', TodoSchema);
