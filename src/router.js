module.exports = server => {
	require('./routes/auth')(server);
	require('./routes/user')(server);
	require('./routes/dev')(server);
}