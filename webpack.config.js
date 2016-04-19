var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/public');
var APP_DIR = path.resolve(__dirname, 'src/js');

var config = {
    debug: true,
    //devtool: 'inline-source-map',
    entry: [
        //'webpack-dev-server/client?http://localhost:9000',
        APP_DIR + '/main.jsx'
    ],
    output: {
        path: BUILD_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel',
                query:
                {
                    presets:['es2015']
                }
            }
        ]
    },
    /*
    devServer: {
        port: 9000,
        hot: true,
        contentBase: 'src/client/',
        stats: { colors: true },
        historyApiFallback: true,
        filename: "bundle.js"
    }
    */
};

module.exports = config;
