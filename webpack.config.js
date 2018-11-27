const dev = require("./config/webpack.dev.js");
const product = require("./config/webpack.product.js");
const config = {
    host: "127.0.0.1",
    port: "3003"
};
module.exports =
    process.env.NODE_ENV == "production"
        ? product(__dirname)
        : dev(__dirname, config);
