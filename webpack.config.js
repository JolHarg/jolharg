const webpack = require(`webpack`),
    HtmlWebpackPlugin = require(`html-webpack-plugin`),
    CopyWebpackPlugin = require(`copy-webpack-plugin`),
    repoMap = require(`./lib/repo-map`);

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
        new HtmlWebpackPlugin(
            {
                template: `./templates/index.pug`,
                templateParameters: {
                    "repos": [
                        require(`./github/jolharg`).map(repoMap),
                        require(`./github/danwdart`).map(repoMap)
                    ]
                }
            }
        ),
        new CopyWebpackPlugin(
            [
                {
                    from: `./static`,
                    to: `./`
                }
            ]
        ),
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
