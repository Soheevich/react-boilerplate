const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const _DEV_ = process.env.NODE_ENV !== "production";
const PORT = 3000;

module.exports = {
	entry: './src/index.js',
	mode: _DEV_ ? 'development' : 'production',
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: _DEV_ ? 'source-map' : 'eval',
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: "babel-loader",
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.less$/,
				exclude: /node_modules/,
				rules: [
					{
						use: [
							{loader: "style-loader"},
							{
								loader: "css-loader",
								options: {
									modules: true
								}
							},
							"less-loader",
						],
					},
				],
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html"
		}),
		new MiniCssExtractPlugin({
			filename: "[name].css",
		}),
	],
	devServer: {
		port: PORT,
	}
};