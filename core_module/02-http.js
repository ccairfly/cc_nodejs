// 1.引包
var http = require('http')
// 2.创建一个服务器
var server = http.createServer()
// 3.设置收到请求的回调
server.on('request',function(){
    console.log("收到请求了");
})
// 4.开启监听服务
server.listen(8852,()=>{
    console.log("服务器打开成功,浏览器输入127.0.0.1:8852");
})

