module.exports = {
	requrieAuthentication: function (req, res, next) {
		console.log('Privat route hit!');
		next();
	},
	logger: function (req, res, next) {
		console.log('Request: ' + new Date().toString() + ' ' + req.method + ' ' + req.originalUrl);
		next();
	},
};