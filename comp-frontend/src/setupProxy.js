const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  // Proxy for the second API
  app.use(
    "/api2", // Route for the second proxy
    createProxyMiddleware({
      target: "http://35.95.38.233:5100", // Target server for the second proxy
      changeOrigin: true,
      pathRewrite: { "^/api2": "" }, // Optionally rewrite the path
    })
  );
};
