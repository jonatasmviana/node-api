const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth.json');

const AuthController = {

	async authenticate(req, res) {
		const { email, password } = req.body;
		const user = await User.findOne({ email }).select('+password');

		if (!user || (!await bcrypt.compare(password, user.password)))
			return res.status(400).send({ error: 'Invalid data' });

		const userReturn = {
			_id: user._id,
			name: user.name,
			email: user.email,
		}

		const token = jwt.sign({ id: user.id }, authConfig.secret, {
			expiresIn: 86400
		});

		return res.json({ userReturn, token });
	}
};

module.exports = AuthController;