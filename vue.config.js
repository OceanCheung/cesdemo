const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Timestamp = new Date().getTime();

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: './', //打包
    lintOnSave: false, //去掉代码检查,
    productionSourceMap:false,
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'));
        config.plugin("html").tap(args => {
            args[0].minify = false;
            return args;
        });
    },
    configureWebpack: {
        plugins: [
            new MiniCssExtractPlugin({
                // 修改打包后css文件名
                filename: `css/[name].${Timestamp}.css`,
                chunkFilename: `css/[name].${Timestamp}.css`
            })
        ],
        output: {
            // 输出重构  打包编译后的 文件名称  【模块名称.版本号.时间戳】
            filename: `js/[name].${Timestamp}.js`,
            chunkFilename: `js/[name].${Timestamp}.js`
        }
    }
}