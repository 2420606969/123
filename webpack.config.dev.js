var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack') //是因为引入jquery导入的
module.exports = {
    entry: './src/main.js',
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader'
                    }
                ]
            },
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" }
                ]
            },
            {
                test: /\.(ttf|eot|svg|woff|jpg|png)$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.vue', '.js', '.json', '*']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './template.html', //参照文件的路径
            filename: 'index.html'
        }),
        new webpack.ProvidePlugin({
            $:"jquery",
            jQuery:"jquery"
        })//全局导入jquery
    ]
} 