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

		if (!Object.keys(req.body).length)
			return res.json('No data entered');

		const { name, email, password } = req.body;
		const userExists = await User.findOne({ email: email });

		if (userExists)
			return res.json("Usuário já existe!");

		await User.create({ name, email, password, });
		return res.json('Ok');
	},

	async update(req, res) {
		if (!Object.keys(req.body).length)
			return res.json('No data entered');

		const filter = { _id: req.params.userId };
		const user = await User.findOneAndUpdate(filter, req.body, { new: true });
		return res.json('Ok');
	},

	async delete(req, res) {
		const user = await User.findOneAndRemove({ _id: req.params.userId });
		return res.json(user);
	}
};

module.exports = UserController;