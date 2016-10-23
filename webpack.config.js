var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./app.js",
    output: {
        path: __dirname + "/app/bundle",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
        ]
    },
    plugins: [
        new ExtractTextPlugin("bundle.css")
    ]
};