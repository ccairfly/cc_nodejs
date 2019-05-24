//nodejs 使用http模块作为客户端发送请求
const http = require('http')
const https = require('https')

https.get('https://www.easy-mock.com/mock/5c6ad911d8bc8b31033c36cc/example/cc-get-data',data=>{
    var datastr = ''
    //接收到数据
    data.on('data',(chunk)=>{
        datastr += chunk
    })
    //结束数据结束的end事件
    data.on('end',()=>{
        console.log(datastr);
        
    })
})