const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/okonomi/faktura/fakturautsteder/',
        createProxyMiddleware({
            target: 'https://play-with-fint.felleskomponent.no',
            changeOrigin: true,
        })
    );

    app.use(
        '/api/member',
        createProxyMiddleware({
            target: 'http://localhost:8090',
            changeOrigin: true,
        })
    );

    app.use(
        '/api/orgunits',
        createProxyMiddleware({
            target: 'http://localhost:8081',
            changeOrigin: true,
        })
    );
};