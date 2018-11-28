/**
 * @file 写文件名字
 * @author fanty@jingoal.com
 *
 * 写文件功能
 */
const path = require("path");

module.exports = {
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].bundle.js",
    chunkFilename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
