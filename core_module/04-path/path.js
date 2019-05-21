var path = require('path')

var p1 = "./data/123/cc.html"
var p2 = path.join(__dirname,p1) //将多个字符串拼接成完整的路径
console.log(p2);

var extname = path.extname(p1)
console.log(extname);

var pathobj = path.parse(p1)
console.log(pathobj);



