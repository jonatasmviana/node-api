const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

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

UserSchema.pre('save', async function (next) {
	try {
		this.password = await bcrypt.hash(this.password, 10);
		return next();
	} catch (err) {
		return next(err);
	}
})

module.exports = model('User', UserSchema);