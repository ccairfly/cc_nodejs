// 1.引包
var http = require('http')
var fs = require('fs')

// 2.创建一个服务器
var server = http.createServer()
// 3.设置收到请求的回调
server.on('request',function(request,response){
    console.log("收到请求了:地址是" + request.url);
    var url = request.url
    response.setHeader('Content-Type','text/html; charset=utf-8')
    if(url == '/') {
        response.end("hello please go home")
    } else if(url == '/home')  {
        fs.readFile('../src/index.html',(err,data)=>{
            if(err){
                response.end("404 not found")
            } else {
                response.end(data.toString()) 
            }
        })
    } else {
        response.end("404 not found")
    }
    
})
// 4.开启监听服务
server.listen(8852,()=>{
    console.log("服务器打开成功,浏览器输入127.0.0.1:8852");
})

