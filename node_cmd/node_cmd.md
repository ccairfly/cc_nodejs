1.安装npm install node-cmd -S

2.
var nodeCmd = require('node-cmd');
function runCmdTest() {
nodeCmd.get(
	'ipconfig',
	function(err, data, stderr){
		console.log(data);
	}
);

nodeCmd.run('ipconfig');
