var fs = require('fs')

//异步读取
fs.readFile('../data/1234.txt',(err,data)=>{
    if(err!=null) {
        console.log("读取文件错误");
    } else {
        console.log("异步读取" + data.toString());
    }
})

//同步读取,读取完数据之后才进入下一步
var syncdata = fs.readFileSync('../data/3344.txt')
console.log("同步读取" + syncdata.toString());

//异步写入
fs.writeFile("../data/5678.txt","hello this is fs write",err=>{
    if(err) {
        console.log("写入失败");
    } else {
        console.log("异步写入成功");
        fs.readFile('../data/5678.txt',(err,data)=>{
            if(err) {
                console.log("读取文件错误");
            } else {
                console.log("写入成功后回读" + data.toString());
            }
        })
    }
})

fs.writeFileSync('../data/7890.txt',"this is write file sync")
console.log("同步写入成功");
var syncdata2 = fs.readFileSync('../data/7890.txt')
console.log("同步回读" + syncdata2.toString());