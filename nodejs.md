1.node安装:官网下载LTS的安装包msi文件,打开安装向导直接安装,安装npm和自动添加环境变量path 安装成功命令行输入node -v 会有版本提示
默认全局安装了npm包管理器,可以实现npm i 的安装和卸载

2.重点:node是javascript的一个运行环境,浏览器不认识node代码,文件名不能起成node.js.浏览器中的javascript不具有操作文件的能力,但是node可以

3.nodejs中的文件系统:
##读取文件
*导入var fs = require("fs")
*使用readFile()异步读取文件第二个参数为(err,data)=>{};
*使用readFileSync()方法同步读取文件 直接返回读取到的数据 var syncdata = fs.readFileSync('./data/3344.txt')
##写入文件
*使用writeFile()方法异步写入文件第二个参数err=>{};
*写入文件也有同步的版本writeFileSync
