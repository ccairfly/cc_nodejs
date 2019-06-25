const { exec } = require('child_process');
const fs = require('fs')

const readCmd = 'configcmd dev2txt config.htf -usbdbg 1 -system CSRA68100_CONFIG'
const writeCmd = 'configcmd txt2dev config.htf replace -usbdbg 1 -system CSRA68100_CONFIG'

var path = fs.readFileSync('./path.txt').toString()

function writeFile(data) {
    fs.writeFile(path + '/config.htf',data,(err)=>{
        if(!err){
            exec(writeCmd,{cwd : path},(err, stdout, stderr)=>{
                console.log(stdout);
            })
        }
    })
}

function readFileAndRewrite(){
    fs.readFile(path + "/config.htf",function(error,data){
        if(!error){
            var result = data.toString().split('\r\n');
            result.forEach((item,i) =>{                
                if(item.indexOf('CustomerReadOnlyKey0') != -1){
                    console.log(item);
                    result[i] = item.replace('02','01')
                }
            })
            var data2 = result.join('\r\n')
            writeFile(data2)
        } else {
            console.log('readFile Error!!!');
        }
    }); 
}

exec(readCmd,{cwd : path},(err, stdout, stderr)=>{
    if(err){
        console.log('请检查path.txt 路径是否配置正确');
        return
    }    
    console.log(stdout);
    if(!err) {
        readFileAndRewrite()
    }
})