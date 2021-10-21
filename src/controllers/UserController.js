const axios = require('axios');
const User = require('../models/User');

const UserController = {

	async getUserById(req, res) {
		const { userId } = req.params;
		const users = await User.findById(userId);
		return res.json(users);
	},

	async getAllUsers(req, res) {
		const users = await User.find();
		return res.json(users);
	},

	async store(req, res) {

		const { name, email, password } = req.body;
		const userExists = await User.findOne({ email: email });
		if (userExists)
			return res.json("Usuário já existe!");

		const user = await User.create({
			name,
			email,
			password,
		});

		return res.json(user);
	},

	async update(req, res) {

		const data = {};
		if (req.body.name)
			data.name = req.body.name

		if (req.body.email)
			data.email = req.body.email

		const filter = { _id: req.params.userId };
		const user = await User.findOneAndUpdate(filter, data, { new: true });
		return res.json(user);
	},

	async delete(req, res) {
		const user = await User.findOneAndRemove({ _id: req.params.userId });
		return res.json(user);
	}
};

module.exports = UserController;