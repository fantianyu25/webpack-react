/**
 * @file 写文件名字
 * @author fanty@jingoal.com
 *
 * 写文件功能
 */
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
	entry: {
		index: './src/index.js',
		another: './src/another-module.js'
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'Production'
		})
	],
	output: {
		filename: '[name].bundle.js',
		chunkFilename:'[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
