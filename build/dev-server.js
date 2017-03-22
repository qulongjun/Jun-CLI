// 引入必要的模块
var express = require('express')
var webpack = require('webpack')
var config = require('./webpack.dev.conf')
var history = require('connect-history-api-fallback')
var proxy = require('http-proxy-middleware') //代理HTTP请求
// 创建一个express实例
var app = express()

app.use(history());
// 调用webpack并把配置传递过去
var compiler = webpack(config)

// 使用 webpack-dev-middleware 中间件
var devMiddleware = require('webpack-dev-middleware')(compiler, {
    publicPath: config.output.publicPath,
    stats: {
        colors: true,
        chunks: false
    }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

// webpack插件，监听html文件改变事件
compiler.plugin('compilation', function (compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
        // 发布事件
        hotMiddleware.publish({action: 'reload'})
        cb()
    })
})

// 注册中间件
app.use(devMiddleware)
// 注册中间件
app.use(hotMiddleware)

//当发送/api请求时，自动会跨域访问8080端口，前后端分离
app.use('/api', proxy({target: 'http://localhost:8080', changeOrigin: true}));

// 监听 8888端口，开启服务器
app.listen(8888, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('Listening at http://localhost:8888')
})