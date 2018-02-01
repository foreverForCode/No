const path = require('path');
const webpack = require('webpack');
const BabiliPlugin = require("babili-webpack-plugin");
module.exports = {
    devtool: 'eval-source-map',
    entry: "./src/app/main.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./public", //本地服务器所加载的页面所在的目录
        historyApiFallback: true, //不跳转
        inline: true //实时刷新
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['es2015']
                }
            },
            exclude: /node_modules/
        }]
    },
    plugins: [
        // 代码压缩
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: true
        }),
        new BabiliPlugin(null, {
            //   移除注释
            comments: false
        }),
        //   添加title
        new webpack.BannerPlugin('版权所有，翻版必究'),
    ]
}