const express = require('express');
const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');


const app = express();
const config = require('./webpack.common.js');
const options = {
    contentBase: './dist',
    hot: true,
    host: 'localhost'
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

// Serve the files on port 3000
server.listen(5000, 'localhost', function() {
    console.log('Example app listening on port 3000!\n')
})