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
