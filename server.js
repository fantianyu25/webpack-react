/**
 * @file 写文件名字
 * @author fanty@jingoal.com
 *
 * 写文件功能
 */
const express = require("express");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackDevServer = require("webpack-dev-server");

const app = express();
const config = require("./webpack.config.js");
const options = {
  contentBase: "./dist",
  hot: true,
  host: "localhost"
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath
  })
);

app.listen(5000, "localhost", () => {
  console.log("Example app listening on port 5000");
});
