const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
	app.use(
		"/code/base",
		createProxyMiddleware({
			target: "https://api.base.com",
			secure: false,
			changeOrigin: true,
		})
	);
	app.use(
		"/code",
		createProxyMiddleware({
			target: "https://api.com",
			secure: false,
			changeOrigin: true,
		})
	);
};
