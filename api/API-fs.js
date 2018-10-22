function APIFs() {
	var content = new Object();
	content.test = function() {
		var fs = require("fs");
		//注意：相对文件路径都已入口文件路径为开始位置
		//fs.existsSync(path) 检测文件或文件夹是否存在
		//		console.log(fs.existsSync("api")); //检测文件夹是否存在
		//		console.log(fs.existsSync("fs.txt")); //检测文件是否存在
		//fs.mkdir(path[, mode], callback) 异步创建文件夹
		//		fs.mkdir("fsdir", function(err) {
		//			if(err) {
		//				console.log("文件夹已存在");
		//			} else {
		//				console.log("文件夹创建成功");
		//			}
		//		});
		//fs.mkdirSync(path[, mode]) 同步创建文件夹
		//		try {
		//			fs.mkdirSync("fsdir");
		//			console.log("文件夹创建成功");
		//		} catch(e) {
		//			console.log("文件夹已存在");
		//		}
		//fs.writeFile(file, data[, options], callback) 异步创建文本
		//		fs.writeFile("fs.txt", "Hello World", function(err) {
		//			if(err) {
		//				console.log("文本创建失败");
		//			} else {
		//				console.log("文本创建成功");
		//			}
		//		});
		//fs.writeFileSync(file, data[, options]) 同步创建文本
		//		try {
		//			fs.writeFileSync("fs.txt", "Sync Hello World");
		//			console.log("文本创建成功");
		//		} catch(e) {
		//			console.log("文本创建失败");
		//		}
		//fs.appendFile(file, data[, options], callback) 异步追加文本
		//		fs.appendFile("fs.txt", "追加", function(err) {
		//			if(err) {
		//				console.log("文本追加失败");
		//			} else {
		//				console.log("文本追加成功");
		//			}
		//		});
		//fs.appendFileSync(file, data[, options]) 同步追加
		//		try {
		//			fs.appendFileSync("fs.txt", "同步追加");
		//			console.log("文本追加成功");
		//		} catch(e) {
		//			console.log("文本追加失败");
		//		}
		//fs.readFile(path[, options], callback) 异步读取文本
		//		fs.readFile("fs.txt", function(err, data) {
		//			if(err) {
		//				console.log("没有找到文件fs.txt");
		//			} else {
		//				console.log(data.toString());
		//			}
		//		});
		//fs.readFileSync(path[, options]) 同步读取文本
		//		var buf = fs.readFileSync("fs.txt");
		//		console.log(buf.toString("utf-8"));
		//fs.readdir(path[, options], callback) 异步读取目录
		//		fs.readdir("api", function(err, files) {
		//			if(err) {
		//				console.log("没有找到文件夹api");
		//			} else {
		//				for(var i = 0; i < files.length; i++) {
		//					console.log(files[i]); // 文件名称
		//				}
		//			}
		//		});
		//fs.readdirSync(path[, options]) 同步读取目录
		//		console.log(fs.readdirSync("api")); // [ 'API-Buffer.js', 'API-fs.js', 'API-path.js', 'API-url.js' ]
		//fs.rename(oldPath, newPath, callback) 异步重命名
		//		fs.rename('fs.txt', 'newfs.txt', function(err) {
		//			if(err) {
		//				console.log('重命名失败');
		//			} else {
		//				console.log('重命名成功');
		//			}
		//		});
		//fs.renameSync(oldPath, newPath) 同步重命名
		//		try {
		//			fs.renameSync('fs.txt', 'newfs.txt');
		//			console.log("重命名成功");
		//		} catch(e) {
		//			console.log("重命名失败");
		//		}
		//fs.stat(path, callback) 获取文件状态，包括大小，创建时间等
		//		fs.stat('fs.txt', function(err, stat) {
		//			if(err) {
		//				console.log("找不到文件fs.txt");
		//			} else {
		//				console.log(stat);
		//			}
		//		});
		//fs.unlink(path, callback) 异步删除文件
		//		fs.unlink("fs.txt", function(err) {
		//			if(err) {
		//				console.log("删除失败");
		//			} else {
		//				console.log("删除成功");
		//			}
		//		});
		//fs.unlinkSync(path) 同步删除文件
		//		try{
		//			fs.unlinkSync("fs.txt");
		//			console.log("删除成功");
		//		}catch(e){
		//			console.log("删除失败");
		//		}
		//fs.access(path[, mode], callback) 检测对文件或文件夹是否有读写的权限
		//		fs.access('api', fs.constants.R_OK | fs.constants.W_OK, function(err) {
		//			console.log(err ? 'no access!' : 'can read/write'); // can read/write
		//		});
		//		fs.access('fs.txt', fs.constants.R_OK | fs.constants.W_OK, function(err) {
		//			console.log(err ? 'no access!' : 'can read/write'); // can read/write
		//		});
		//fs.watch(filename[, options][, listener]) 监听文件是否发生改变，移除监听使用unwatchFile
		//		fs.watch("fs.txt", function(eventType, filename) {
		//			console.log(eventType); //change | rename
		//			if(filename) {
		//				console.log(filename + '发生了改变'); // fs.txt发生了改变
		//			} else {
		//				console.log(filename + '没有改变');
		//			}
		//		});
	};
	return content;
}

module.exports = APIFs;