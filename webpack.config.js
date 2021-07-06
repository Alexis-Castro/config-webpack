const HtmlWebpack    = require('html-webpack-plugin');
const MiniCssExtract = require('mini-css-extract-plugin');
// const CopyPlugin     = require("copy-webpack-plugin");

module.exports = {

    mode: "development",

    output: {
        clean: true,
        assetModuleFilename: 'assets/img/[name].[ext]',
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
                options: {
                    sources: false,
                }
               
            },
            {
                test: /\.css$/i,
                exclude: /styles.css$/,
                use: [ 'style-loader', 'css-loader']
            },
            {
                test: /styles.css$/,
                use: [ MiniCssExtract.loader, 'css-loader' ]

            },
            {
                test: /\.(png|svg|jpe?g|gif|webp)$/i,
                type: 'asset/resource'
            }
        ]
    },

    optimization: {},

    plugins: [
        new HtmlWebpack({
            title: 'Mi Webpack App',
            template: './src/index.html'
            // filename: 'index.html'
        }),

        new MiniCssExtract({
            filename: '[name].css',
            ignoreOrder: false
        }),

        // new CopyPlugin({
        //     patterns: [
        //         { from: "src/assets/", to: "assets/" },
        //         // { from: "other", to: "public" },
        //     ],
        // })
    ]



}