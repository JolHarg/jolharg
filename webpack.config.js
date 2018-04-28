const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname,
    entry: './js/src/index.js',
    output: {
        path: __dirname+'/',
        publicPath: '/',
        filename: "js/index.js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader"
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: "pug-loader"
            },
            { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" },
            { test: /\.svg/, use: "file-loader" },
            { test: /\.ttf/, use: "file-loader" },
            { test: /\.woff2?/, use: "url-loader?limit=10000&mimetype=application/font-woff" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                template: './src/index.pug'
            }
        )
    ]
};
