const merge = require("webpack-merge");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cleanPlugin = require("clean-webpack-plugin");
// const CopyWebpackPlugin = require("copy-webpack-plugin"); // webpack 复制插件
module.exports = dirname => {
    console.log("production >>>>>>>>>>>>>>>>>>>>>>>>>>>");
    return merge(common(dirname), {
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.(css|less)$/,
                    // exclude: /node_modules/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader",
                        "postcss-loader",
                        "less-loader"
                    ]
                }
            ]
        },
        devtool: "eval",
        optimization: {
            minimizer: [new UglifyJsPlugin({ cache: true })]
        },
        plugins: [
            new cleanPlugin(["dist"], {
                root: dirname,
                verbose: true
            }),
            new MiniCssExtractPlugin({
                // Options similar to the same options in webpackOptions.output
                // both options are optional
                filename: "[name].[hash].css",
                chunkFilename: "[id].[hash].css"
            })
        ]
    });
};
