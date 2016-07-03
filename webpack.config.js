var webpack = require('webpack');

module.exports = {
    entry: './src/main.js',
    devtool: 'source-map',
    output: {
        filename: './dist/main.js'
    },
    module: {
        loaders: [
        // {
        //     test: /\.js$/,
        //     loader: 'buble'
        // },
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel', // 'babel-loader' is also a legal name to reference
            query: {
                presets: ['es2015']
            }
        }]
    }
};
