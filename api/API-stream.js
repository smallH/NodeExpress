//所有使用 Node.js API 创建的流对象都只能操作 strings 和 Buffer（或 Uint8Array） 对象。
//Stream 是一个抽象接口，Node 中有很多对象实现了这个接口。
function APIStream() {
	var content = new Object();
	content.test = function() {
		return;
		//从流中读取数据 ， 处理流事件（读取流的事件有data, end, and error）
		//fs.createReadStream(path[, options])，后面可带位置参数，如fs.createReadStream('sample.txt', { start: 90, end: 99 });
		//fs.readFile(path[, options], callback)，后面可带编码参数，如fs.readFile('/etc/passwd', 'utf8', callback); 
		//		var fs = require("fs");
		//		var data = '';
		//		var readerStream = fs.createReadStream('input.txt'); // 创建可读流
		//		readerStream.setEncoding('UTF8'); // 设置编码为 utf8。
		//		readerStream.on('data', function(chunk) {
		//			data += chunk;
		//		});
		//		readerStream.on('end', function() {
		//			console.log(data);
		//		});
		//		readerStream.on('error', function(err) {
		//			console.log(err.stack);
		//		});

		//通过流写入数据， 处理流事件（读取流的事件有finish, and error）,fs.createWriteStream(path[, options]),
		//options最常用的可选参数有3种选项start、encoding 和flags。start选项，使其可以写入数据到文件某个位置。 如果是修改一个文件而不是覆盖它，则需要flags 模式为 r+ 而不是默认的 w 模式。 encoding 可以是任何可以被 Buffer 接受的值。
		//		fs.writeFile(file, data[, options], callback), 异步地写入数据到文件， 如果文件已经存在， 则替代文件。 data 可以是一个字符串或一个 buffer。 如果 data 是一个 buffer， 则忽略 encoding 选项。 它默认为 'utf8'。

		//可选参数
		//		var defaults = {
		//			flags: 'w',
		//			encoding: 'utf8',
		//			start : 0
		//		};
		//
		//		var fs = require("fs");
		//		var txt = '大家好，我是output文本。';
		//		var writerStream = fs.createWriteStream('output.txt', defaults); // 创建一个可以写入的流，写入到文件 output.txt 中
		//		writerStream.write(txt, 'UTF8'); // 使用 utf8 编码写入数据
		//		writerStream.end(); // 标记文件末尾
		//		writerStream.on('finish', function() {
		//			console.log("写入完成。");
		//		});
		//		writerStream.on('error', function(err) {
		//			console.log(err.stack);
		//		});

		//管道流，如复制
		//		var fs = require("fs");
		//		var readerStream = fs.createReadStream('input.txt'); // 创建一个可读流
		//		var writerStream = fs.createWriteStream('output.txt'); // 创建一个可写流
		//		console.log(writerStream);
		//		readerStream.pipe(writerStream); // 管道读写操作，读取 input.txt 文件内容，并将内容写入到 output.txt 文件中

		// 手动结束流
		//		var fs = require("fs");
		//		var readerStream = fs.createReadStream('input.txt'); // 创建一个可读流
		//		var writerStream = fs.createWriteStream('output.txt'); // 创建一个可写流
		//		readerStream.on('end', function() {
		//			writerStream.end('Goodbye\n');
		//		});
		//		readerStream.pipe(writerStream, {
		//			end: false
		//		});

		//链式流 cnpm install through2
		//		var fs = require("fs");
		//		var readerStream = fs.createReadStream('input.txt'); // 创建一个可读流
		//		var writerStream = fs.createWriteStream('output.txt'); // 创建一个可写流
		//		var through2 = require('through2');
		//		var upper = function() {
		//			var result = through2(function(buf, _, next) {
		//				this.push(buf.toString().toUpperCase());
		//				next();
		//			})
		//			return result;
		//		}
		//		readerStream.pipe(upper()).pipe(writerStream);

		//复制大文件
		var fs = require('fs');
		var out = process.stdout;
		var filePath = 'read.mp4';

		var readStream = fs.createReadStream(filePath);
		var writeStream = fs.createWriteStream('file.mp4');
		var stat = fs.statSync(filePath);

		var totalSize = stat.size;
		var passedLength = 0;
		var lastSize = 0;
		var startTime = Date.now();

		readStream.on('data', function(chunk) {
			passedLength += chunk.length;
			if(writeStream.write(chunk) === false) {
				readStream.pause();
			}
		});

		readStream.on('end', function() {
			writeStream.end();
		});

		writeStream.on('drain', function() {
			readStream.resume();
		});

		setTimeout(function show() {
			var percent = Math.ceil((passedLength / totalSize) * 100);
			var size = Math.ceil(passedLength / 1000000);
			var diff = size - lastSize;
			lastSize = size;
			out.clearLine();
			out.cursorTo(0);
			out.write('已完成' + size + 'MB, ' + percent + '%, 速度：' + diff * 2 + 'MB/s');
			if(passedLength < totalSize) {
				setTimeout(show, 500);
			} else {
				var endTime = Date.now();
				console.log();
				console.log('共用时：' + (endTime - startTime) / 1000 + '秒。');
			}
		}, 500);

		// stream转化成普通回调：倒序
		//		var fs = require('fs');
		//		var readerStream = fs.createReadStream('input.txt'); // 创建一个可读流
		//		var writerStream = fs.createWriteStream('output.txt'); // 创建一个可写流
		//		var concat = require('concat-stream');
		//		var reverseStream = concat(function(text) {
		//			console.log(text.toString().split("").reverse().join(""));
		//		})
		//		readerStream.pipe(reverseStream);
	};
	return content;
}

module.exports = APIStream;