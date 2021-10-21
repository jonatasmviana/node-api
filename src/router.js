module.exports = server => {
	require('./routes/user')(server);
	require('./routes/dev')(server);
}