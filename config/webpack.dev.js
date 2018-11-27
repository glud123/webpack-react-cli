const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const OpenBrowserPlugin = require("open-browser-webpack-plugin");
const common = require("./webpack.common");

module.exports = (dirname, config) => {
    const { host, port } = config;
    console.log("development >>>>>>>>>>>>>>>>>>>>>>>>>>>");
    return merge(common(dirname), {
        mode: "development",
        devtool: "eval-source-map",
        devServer: {
            contentBase: path.join(dirname, "dist"),
            port: port, // 端口号
            host: host, // 主机地址
            inline: true,
            hot: true,
            open: false,
            lazy: false,
            overlay: {
                warnings: true,
                errors: true
            },
            clientLogLevel: "error",
            // 开启报错提示
            stats: "errors-only",
            proxy: {
                "/": {
                    // 代理地址
                    target: "http://10.11.115.25:8888/"
                }
            }
        },
        module: {
            rules: [
                {
                    test: /\.(css|less)$/,
                    // exclude: /node_modules/,
                    use: [
                        "style-loader",
                        "css-loader",
                        "postcss-loader",
                        "less-loader"
                    ]
                }
            ]
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new OpenBrowserPlugin({ url: `http://${host}:${port}` })
        ]
    });
};
