const path = require('path');

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'public/assets/js'),
        filename: 'app.js',
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: 8081,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ],
    },
}