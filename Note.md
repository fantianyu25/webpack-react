### 1.安装 webpack

```
npm install --save-dev webpack
npm install --save-dev webpack@<version>
```

如果要安装 v4 或者最新版本的 webpack 就需要安装 CLI

```
npm install --save-dev webpack-cli
```

启动命令: package.json 文件里

```
"scripts": {
   "start": "webpack --config webpack.config.js"
}
```

自动配置 package.json 文件使用命令

```
npm init -y
```

tweak directory stucture slightly —— 轻微调整项目目录结构

bundle 绑定

### 2.将 lodash dependency（依赖） 和 index.js 绑定 需要安装 lodash 库

```
npm install --save lodash 发布环境(生产环境)

npm install --save-dev lodash 开发环境
```

### 3.HtmlSWebpackPlugin 用来设置入口 html 文件和模板使用。如果没有入口 html 文件，会自动生成一个设置的入口 html 文件

### 4. clean-webpack-plugin 用于清理打包后的文件件，将不用的文件清理掉,追用使用的模块的显示使用的是

```
   webpack-manifest-plugin
```

### 5 搭建一个简便的开发环境

* 在 webpack.config.js 里将 mode 设置为 development
* 使用 source maps(让我们更加容易追踪代码) 在 webpack.config.js 里 设置 devtool 为任何一种 source-map
* 使用本地服务器 webpack-dev-server
* 是用前端本地服务器的话，需要使用 webpack-dev-middleware
  安装
  ```
    npm install --save-dev express webpack-dev-middleware
  ```
  package.json 设置 "server": "node server.js"

### 6 模块热替换(热更新)

* 更新 webpack-dev-server 的配置进行 热更新在 webpack.config.js 中

```
devServer: {
    hot: true
}

plugins: [
    new webpack.HotModuleReplacementPlugin()
]
```

* 如果使用了 webpack-dev-middleware nodejs 中间件服务器，使用 webpack-hot-middleware 进行服务器热更新
* 针对react 有一套自己的热更新 react hot loader

### 7 环境搭建
两个问题 开发环境 与 生产环境 \
开发环境：
   * 需要更大的 source-mapping (追踪代码错误)
   * 需要本地的服务器 并且 包含热加载功能
生产环境：
   * 需要项目文件更小
   * 更轻的source map
   * 最佳的配置提高图区时间
结论：最好把配置文件分开写


