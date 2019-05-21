var url = require('url')

var u = 'https://mbd.baidu.com/newspage/data/landingsuper?context=%7B%22nid%22%3A%22news_9584919626416410047%22%7D&n_type=0&p_from=1'
//方式1
var urlobj = url.parse(u)
console.log(urlobj);
//方式2,通过构造函数
var urlobj2 = new url.URL(u)
console.log(urlobj2);

