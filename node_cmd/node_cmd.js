const nodeCmd = require('node-cmd')
const fs = require('fs')

// const readCmd = 'configcmd dev2txt config.htf -usbdbg 1 -system CSRA68100_CONFIG'
const readCmd = 'python.exe merge_bin-27.py ./ota_single_boot_2200_1M_190227.bin ./JBL_C230_V0.6_190617-L.bin MER_L.bin'
// const writeCmd = 'configcmd txt2dev config.htf replace -usbdbg 1 -system CSRA68100_CONFIG'
const writeCmd = 'python.exe merge_bin-27.py ./ota_single_boot_2200_1M_190227.bin ./JBL_C230_V0.6_190617-R.bin MER_R.bin'

var path = fs.readFileSync('./path.txt').toString()

function writeFile(data) {
    fs.writeFile('./config.htf',data,(err)=>{
        if(!err){
            nodeCmd.run(writeCmd)
        }
    })
}

var runPath = 'cd ' + path 
nodeCmd.run(runPath)

nodeCmd.get(readCmd,
    function(err, data, stderr){
        fs.readFile("./config.htf",function(error,data){
            var result = data.toString().split('\r\n');
            result.forEach((item,i) =>{                
                if(item.indexOf('CustomerReadOnlyKey0') != -1){
                    console.log(item);
                    result[i] = item.replace('02','01')
                }
            })
            var data2 = result.join('\r\n')
            writeFile(data2)
        });        
    }
);

nodeCmd.get(runPath,(err,data)=>{
    // console.log(data);
    nodeCmd.run(readCmd)
})
// nodeCmd.get(writeCmd,
//     function(err, data, stderr){
//         console.log("write success");
//     }
// );