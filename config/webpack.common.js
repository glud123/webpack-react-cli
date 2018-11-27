const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = (dirname) => {
    return {
        entry: {
            app: "./app.js"
        },
        output: {
            path: path.join(dirname, "./dist"),
            filename: "[name].[hash].js", // 生产环境可以使用 chunkhash 文件内容 hash 校验
            libraryTarget: "umd"
        },
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                },
                {
                    test: /\.(png|jpg|jpeg|gif|svg)(\?.+)?$/,
                    exclude: /favicon\.png$/,
                    use: [
                        {
                            loader: "url-loader",
                            options: {
                                limit: 500,
                                name: "[name].[ext]",
                                outputPath: "images/"
                            }
                        }
                    ]
                },
                {
                    test: /\.(eot|ttf|woff|woff2|svgz)(\?.+)?$/,
                    use: [
                        {
                            loader: "file-loader",
                            options: {
                                name: "[name].[ext]",
                                outputPath: "font/"
                            }
                        }
                    ]
                }
            ]
        },
        resolve: {
            extensions: [".jsx", ".js"],
            alias: {
                Components: path.resolve(dirname, "src/components/"),
                Assets: path.resolve(dirname, "src/assets/"),
                Pages: path.resolve(dirname, "src/pages/"),
                Utils: path.resolve(dirname, "src/utils/"),
                Store: path.resolve(dirname, "src/store/")
            }
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: "index.html",
                template: "./index.html",
                inject: "body",
                favicon: "src/assets/images/favicon.ico",
                cache: true,
                showErrors: true
            })
        ]
    };
};
