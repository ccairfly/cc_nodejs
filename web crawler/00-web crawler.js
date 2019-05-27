const http = require('http')
const fs = require('fs')
// http://www.nipic.com/photo/jingguan/index.html

var dataLock = false
var picidx = 0
var textarr = []
var downloadTimer

http.get('http://www.nipic.com/photo/jingguan/shanshui/index.html',(data)=>{
    var alldata = ''
    data.on('data',chunk=>{
        alldata += chunk
    })
    data.on('end',()=>{
        // console.log('数据接收结束');
        //正则表达式匹配出
        var mostr = /data-src=".+.jpg"/g

        textarr = alldata.match(mostr)
        for(var i = 0 ; i < textarr.length ; i++) {
            textarr[i] = textarr[i].substr(10,textarr[i].length - 11)
            textarr[i] = textarr[i].replace('/pic/','/file/').replace('_4.jpg','_2.jpg')
        }
        downloadTimer = setInterval(happyDownload,1500)
    })
})

function happyDownload() {
    if(dataLock == false){
        dataLock = true
        downloadImg(textarr[picidx],successHandler) 
    }
}
function successHandler() {
    console.log(textarr[picidx] + "download success");
    dataLock = false
    picidx ++ 
    if(picidx >= 30) {
        clearInterval(downloadTimer)
        console.log('end download');
    }
}

function downloadImg(imgurl,successcb) {
    http.get(imgurl,imgdata=>{
        var t = imgurl.indexOf('_')
        var t2 = imgurl.indexOf('_2.jpg')
        var sub = imgurl.substring(t+1,t2+2)
        var stream = fs.createWriteStream('./files/' + sub + '.jpg')
        imgdata.pipe(stream)
        successcb()
    })  
}
