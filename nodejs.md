1.node安装:官网下载LTS的安装包msi文件,打开安装向导直接安装,安装npm和自动添加环境变量path 安装成功命令行输入node -v 会有版本提示
默认全局安装了npm包管理器,可以实现npm i 的安装和卸载

2.重点:node是javascript的一个运行环境,浏览器不认识node代码,文件名不能起成node.js.浏览器中的javascript不具有操作文件的能力,但是node可以


3.nodejs中的文件系统:
####读取文件
*导入var fs = require("fs")
*使用readFile()异步读取文件第二个参数为(err,data)=>{};
*使用readFileSync()方法同步读取文件 直接返回读取到的数据 var syncdata = fs.readFileSync('./data/3344.txt')
####写入文件
*使用writeFile()方法异步写入文件第二个参数err=>{};
*写入文件也有同步的版本writeFileSync


4.nodejs WEB 模块:
####搭建服务器
*导包var http = require('http')
*创建一个服务器实例: var server = http.createServer()
*注册请求时候的回调:
server.on('request',function(){
    console.log("收到请求了");
})
*监听端口:server.listen(8852)
####服务器响应数据
*接收请求的数据
req和res 请求和响应,结合fs,
*将html中的数据发送给请求响应,注意'Content-Type',应该设置为html
res.setHeader('Content-Type', 'text/html; charset=utf-8')

5.模块系统
####模块导入
require('...')
####模块导出
使用module.exports导出
一般导出对象,或者构造函数exports是每个模块都有的对象,可以往对象添加成员或者方法
或者直接导出构造函数

6.path模块
用于格式化或拼接一个完整的路径
常用:
1) path.join(__dirname,xx)	拼接路径
2) path.extname(xxx) 获取后缀名
3) var pathobj = path.parse(xxx)	常用,将路径解析成对象

7.url模块
用于解析网址url
常用var urlobj = url.parse(xxx) 获取url对象
