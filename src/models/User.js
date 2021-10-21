const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
		lowercase: true,
	},
	password: {
		type: String,
		select: false,
		required: true,
	}
}, {
	timestamps: true
});

module.exports = model('User', UserSchema);