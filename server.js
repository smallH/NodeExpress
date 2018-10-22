var http = require('http');
http.createServer(function(request, response) {
	// 发送 HTTP 头部 
	// HTTP 状态值: 200 : OK
	// 内容类型: text/plain
	response.writeHead(200, {
		'Content-Type': 'text/plain;charset=utf-8'
	});
	// 发送响应数据
	response.end('大家好 Hello World');
}).listen(8081);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8081/');