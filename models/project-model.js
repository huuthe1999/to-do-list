const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		color: {
			value: {
				type: String,
				required: true,
			},
			label: {
				type: String,
				required: true,
			},
			color: {
				type: String,
				required: true,
			},
		},
		todoListId: [{ type: mongoose.Types.ObjectId, ref: 'Todo' }],
	},
	{ timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

module.exports = mongoose.model('Project', ProjectSchema);
