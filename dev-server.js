const express = require('express');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
// const webpackDevMiddleware =  require('webpack-dev-middleware');

const app = express();
const config = require('./webpack.config.js');
const options = {
    contentBae: './public',
    hot: true,
    host: 'localhost'
}

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

const serevr = new webpackDevServer(compiler, options);
serevr.listen(3000, 'localhost', () => {
    console.log('start server on port 3000');
});

// npm run dev-sever.js 执行不通过