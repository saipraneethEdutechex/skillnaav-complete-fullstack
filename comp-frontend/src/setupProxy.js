const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/website",
    createProxyMiddleware({
      target: "http://localhost:5000",
      changeOrigin: true,
      pathRewrite: { "^/website": "" },
    })
  );

  app.use(
    "/webapp",
    createProxyMiddleware({
      target:
        "http://localhost:5100",
      changeOrigin: true,
      pathRewrite: { "^/webapp": "" },
    })
  );
};
