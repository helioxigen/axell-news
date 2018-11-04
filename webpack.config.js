const path = require("path");

const СleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const isProd = process.env.NODE_ENV === "production";

module.exports = {
    entry: [
        path.join(__dirname, "./node_modules/uikit/dist/js/uikit.js"),
        path.join(__dirname, "./node_modules/uikit/dist/js/uikit-icons.js"),
        path.join(__dirname, "./node_modules/uikit/dist/css/uikit.css"),
        path.join(__dirname, "./src/index.tsx")
    ],

    optimization: {
        mergeDuplicateChunks: true,
        splitChunks: {
            chunks: "all"
        }
    },

    output: {
        path: path.resolve(__dirname, "build"),
        chunkFilename: "[name].[chunkhash].js",
        filename: "[hash].bundle.js",
        library: "build"
    },

    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                include: path.join(__dirname, "src"),
                loader: "ts-loader"
            },
            {
                test: /\.(s?)css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|svg|gif|jpg|woff|woff2)$/,
                exclude: /node_modules/,
                loader: "file-loader"
            }
        ]
    },

    plugins: [
        new СleanWebpackPlugin("build"),
        new HtmlWebpackPlugin({
            title: "",
            template: "./src/assets/index.htmltpl"
        })
    ],

    resolve: {
        extensions: ["*", ".js", ".ts", ".tsx", ".json"],
        modules: ["node_modules", path.resolve(__dirname, "src")]
    },

    devtool: isProd ? "nosources-source-map" : "eval-source-map",

    devServer: {
        host: "0.0.0.0",
        port: 3000,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "build/"),
        watchOptions: {
            ignored: /node_modules|build/
        }
    }
};
