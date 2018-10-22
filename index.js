//安装必要的包
//$ cnpm install express (Web应用框架)
//$ cnpm install body-parser (node.js 中间件，用于处理 JSON, Raw, Text 和 URL 编码的数据)
//$ cnpm install cookie-parser (这就是一个解析Cookie的工具。通过req.cookies可以取到传过来的cookie，并把它们转成对象)
//$ cnpm install multer (node.js 中间件，用于处理 enctype="multipart/form-data"（设置表单的MIME编码）的表单数据)
//$ cnpm install mysql (用于处理数据库操作)
//$ cnpm install mime (用于解析文件mime类型)
//$ cnpm install multiparty (用于解析FormData格式数据)
//$ cnpm install socket.io(用于socket通信)
//$ cnpm install vue
//$ cnpm install vue-server-renderer

var fs = require("fs");
var express = require('express');
var app = express();
var MySQL = require("./routes/mysql"); //用于MYSQL测试用例
var cookieParser = require('cookie-parser'); //用于COOKIE测试用例
var multiparty = require('multiparty'); //用于上传测试用例
var bodyParser = require('body-parser'); //用于POST测试用例
var urlencodedParser = bodyParser.urlencoded({
	extended: false
});
var Vue = require('vue');
app.use(express.static('public')); //指定静态资源文件夹
app.use(cookieParser());
var domainPath = "http://www.helloui.net";

/********************服务端渲染<!--vue-ssr-outlet-->********************/
const renderer = require('vue-server-renderer').createRenderer({
	template: require('fs').readFileSync('./views/render.html', 'utf-8')
})
let mocktitle = 'server render';
let mockdata = 'server render';
app.get('/ssr.html', (req, res) => {
	let myvue = new Vue({
		data: {
			url: req.url,
			data: mockdata,
			title: mocktitle
		},
		template: `
		<div class="txtcolor">
			server render
		</div>
		`
	});
	renderer.renderToString(myvue, (err, html) => {
		if(err) {
			res.status(500).end('Internal Server Error')
			return
		}
		res.writeHead(200, {
			"Content-Type": "text/html;charset=UTF-8"
		});
		res.end(html)
	});
})

/********************当前访问的路径地址测试用例********************/
app.get('/url_get', function(req, res) {
	var url = require('url');
	var host = "http://" + req.headers.host; // 'http://localhost:8081'
	var path = url.parse(req.url).path; // '/url_get?abc=123'
	var pathname = url.parse(req.url).pathname; // '/url_get'
	res.end(host + path); // http://localhost:8081/url_get?abc=123
});

/********************默认主页测试用例********************/
app.get('/', function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});
app.get('/index.html', function(req, res) {
	res.sendFile(__dirname + "/public/index.html");
});

/********************GET测试用例********************/
app.get('/get.html', function(req, res) {
	// 普通跳转：方式一
	res.sendFile(__dirname + "/views/get.html");
	// 普通跳转：方式二
	//  var path = require('path');
	//	res.sendFile(path.resolve('./views/get.html'));
	// 带参跳转：通过Headers向客户端页面传递数据（服务器主动向页面传参）
	//	var options = {
	//		headers: {
	//			"Domain": "http://www.helloui.net/"
	//		}
	//	};
	// 
	//	res.sendFile(__dirname + "/views/get.html", options);
	// 重定向
	//	res.redirect(302, 'http://www.helloui.net'); // 重定向 301表示永久重定向，302表示临时重定向
});

app.get('/process_get', function(req, res) {
	var data = {
		"name": req.query.name,
	};
	res.end(JSON.stringify(data));
});

/********************POST测试用例********************/
app.get('/post.html', function(req, res) {
	res.sendFile(__dirname + "/views/post.html");
});

app.post('/process_post', urlencodedParser, function(req, res) {
	var data = {
		"name": req.body.name,
	};
	res.end(JSON.stringify(data));
});

/********************COOKIE测试用例********************/
app.get('/cookie.html', function(req, res) {
	res.sendFile(__dirname + "/views/cookie.html");
});

app.post('/process_login', urlencodedParser, function(req, res) {
	var data = {
		"name": req.body.name,
	};
	if(req.cookies.isVisit && req.cookies.isVisit == "1") {
		data.msg = "再次欢迎访问";
	} else {
		res.cookie('isVisit', 1, {
			maxAge: 60 * 1000
		});
		data.msg = "欢迎第一次访问";
	}
	res.end(JSON.stringify(data));
});

app.post('/process_logout', urlencodedParser, function(req, res) {
	var data = {};
	if(req.cookies.isVisit) {
		res.cookie('isVisit', 0, {
			maxAge: 60 * 1000
		});
	}
	data.msg = "登出成功";
	res.end(JSON.stringify(data));
});

/********************上传测试用例********************/
app.get('/upload.html', function(req, res) {
	res.sendFile(__dirname + "/views/upload.html");
});

//上传(支持批量)
app.post('/file_upload', function(req, res) {
	var form = new multiparty.Form();
	form.encoding = "utf-8";
	form.uploadDir = "./public/temp"; //此路径不会自动创建，要注意
	form.maxFilesSize = 500 * 1024 * 1024;
	//fields：键值参数  ； files：上传文件
	form.parse(req, function(err, fields, files) {
		var data = {};
		var count = 0;
		for(var i = 0; i < files.file.length; i++) {
			var inputFile = files.file[i];
			var uploadedPath = __dirname + "/" + inputFile.path; //缓存路径
			var desPath = __dirname + '/public/temp/' + inputFile.originalFilename; //存储路径

			if(err) {
				data.code = "404";
				data.msg = err.toString();
				res.end(JSON.stringify(data));
				break;
			} else {
				fs.rename(uploadedPath, desPath, function(err, e) {
					count++;
					if(err) {
						data.code = "404";
						data.msg = err.toString();
						res.end(JSON.stringify(data));
					}
					if(count == (files.file.length)) {
						data.code = "200";
						data.msg = "上传成功";
						res.end(JSON.stringify(data));
					}
				});
			}
		}
	});
});

/********************MYSQL测试用例********************/
app.get('/mysql.html', function(req, res) {
	res.sendFile(__dirname + "/views/mysql.html");
});

//查询
app.post('/mysql_query', function(req, res) {
	MySQL().queryAction(req, res);
});

//增加
app.post('/mysql_add', function(req, res) {
	MySQL().addAction(req, res);
});

//更新
app.post('/mysql_update', function(req, res) {
	MySQL().updateAction(req, res);
});

//删除
app.post('/mysql_delect', function(req, res) {
	MySQL().delectAction(req, res);
});

/********************socketio测试用例********************/
//app.get('/socketio.html', function(req, res) {
//	res.sendFile(__dirname + "/views/socketio.html");
//});
//
//var io = require('socket.io').listen(server);
//io.sockets.on('connection', function(socket) {
//	socket.on('disconnect', function() {
//		console.log('已断开链接');
//	});
//	//	监听客户端事件
//	socket.on('clientmessage', function(data) {
//		console.log("客户端发来广播消息");
//		//发送给除自己外其他所有用户的消息
//		socket.broadcast.emit('message', {
//			text: '你的朋友上线了'
//		});
//	});
//	//发送给自己链接的消息
//	socket.emit('message', {
//		text: '你上线了'
//	});
//
//	//	setTimeout(function() {
//	//		io.close();
//	//	}, 5000);
//});

/********************搭建服务监听********************/
var server = app.listen(8081, "127.0.0.1", function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log("应用实例，访问地址为 http://" + host + ":" + port);
	console.log("-------------------------------------------------");

	/********************Buffer测试用例********************/
	//	var APIBuffer = require('./api/API-Buffer');
	//	APIBuffer().test();

	/********************fs测试用例********************/
	//	var APIFs = require('./api/API-fs');
	//	APIFs().test();

	/********************url测试用例********************/
	var APIUrl = require('./api/API-url');
	APIUrl().test();

	/********************path测试用例********************/
	//	var APIPath = require('./api/API-path');
	//	APIPath().test();

	/********************events测试用例********************/
	//	var APIEvent = require('./api/API-events');
	//	APIEvent().test();

	/********************stream测试用例********************/
	//	var APIStream = require('./api/API-stream');
	//	APIStream().test();

	/********************zip测试用例********************/
	//	var APIZip = require('./api/API-zip');
	//	APIZip().test();
});