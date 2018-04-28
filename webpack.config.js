const webpack = require(`webpack`),
    HtmlWebpackPlugin = require(`html-webpack-plugin`),
    CopyWebpackPlugin = require(`copy-webpack-plugin`);

module.exports = {
    context: __dirname,
    entry: `./js/src/index.js`,
    output: {
        path: __dirname+`/.site/`,
        publicPath: `/`,
        filename: `js/index.js`
    },
    devServer: {
        contentBase: `./`,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {
                        loader: `style-loader`
                    },
                    {
                        loader: `css-loader`
                    }
                ]
            },
            {
                test: /\.pug$/,
                use: `pug-loader`
            },
            { test: /\.js$/, exclude: /node_modules/, use: `babel-loader` },
            { test: /\.svg/, use: `file-loader` },
            { test: /\.ttf/, use: `file-loader` },
            { test: /\.woff2?/, use: `url-loader?limit=10000&mimetype=application/font-woff` }
        ]
    },
    plugins: [
        new webpack.EnvironmentPlugin(
            [
                `GITHUB_ACCESS_TOKEN`
            ]
        ),
        new HtmlWebpackPlugin(
            {
                template: `./templates/index.pug`
            }
        ),
        new CopyWebpackPlugin(
            [
                {
                    from: `./img`,
                    to: `./img`
                }
            ]
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
