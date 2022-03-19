const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    createProxyMiddleware('/data',
      {
        target: 'http://apis.data.go.kr',
        changeOrigin: true,
        pathRewrite: {
          [`^/data`]: '',
        }
      })
  );
};