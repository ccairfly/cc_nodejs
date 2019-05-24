const http = require('http')
const fs = require('fs')
// http://www.nipic.com/photo/jingguan/index.html
http.get('http://www.nipic.com/photo/jingguan/shanshui/index.html',(data)=>{
    var alldata = ''
    data.on('data',chunk=>{
        alldata += chunk
    })
    data.on('end',()=>{
        // console.log('数据接收结束');
        // console.log(alldata);
        //正则表达式匹配出
        var mostr = /data-src=".+?.jpg"/
        var textarr = []
        var text = mostr.exec(alldata)
        textarr.push(text)
        var text = mostr.exec(alldata)
        textarr.push(text)
        var text = mostr.exec(alldata)
        textarr.push(text)
        var text = mostr.exec(alldata)
        textarr.push(text)
        fs.writeFileSync('./out.txt',textarr)
        // console.log(text);
    })
})
