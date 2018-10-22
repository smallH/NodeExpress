function APIZip() {
	var content = new Object();
	content.test = function() {
		return;

		var fs = require("fs");
		var zlib = require('zlib');

		// 压缩 input.txt 文件为 input.txt.gz
		fs.createReadStream('input.txt')
			.pipe(zlib.createGzip())
			.pipe(fs.createWriteStream('input.gz'));
		console.log("文件压缩完成。");

		// 解压 input.txt.gz 文件为 input.txt
		fs.createReadStream('input.gz')
			.pipe(zlib.createGunzip())
			.pipe(fs.createWriteStream('input.txt'));
		console.log("文件解压完成。");

		return;
		// win zip格式的压缩：引入archiver  https://github.com/archiverjs/node-archiver
		// 请求模块
		var fs = require('fs');
		var archiver = require('archiver');

		// 创建生成的压缩包路径
		var output = fs.createWriteStream(__dirname + '/example.zip');
		var archive = archiver('zip', {
			zlib: {
				level: 9
			} // 设置压缩等级
		});

		// 'close' 事件监听
		output.on('close', function() {
			console.log(archive.pointer() + ' total bytes');
			console.log('archiver has been finalized and the output file descriptor has closed.');
		});

		// 'end' 事件监听
		output.on('end', function() {
			console.log('Data has been drained');
		});

		// 'warnings' 事件监听
		archive.on('warning', function(err) {
			if(err.code === 'ENOENT') {
				// 打印警告
			} else {
				// throw error
				throw err;
			}
		});

		// 'error' 事件监听
		archive.on('error', function(err) {
			throw err;
		});

		// pipe 方法
		archive.pipe(output);

		// 添加一个流文件
		var file1 = __dirname + '/file1.txt';
		archive.append(fs.createReadStream(file1), {
			name: 'file1.txt'
		});

		// 添加一个字符串
		archive.append('string cheese!', {
			name: 'file2.txt'
		});

		// 添加一个buffer
		var buffer3 = Buffer.from('buff it!');
		archive.append(buffer3, {
			name: 'file3.txt'
		});

		// 添加一个文件
		archive.file('file1.txt', {
			name: 'file4.txt'
		});

		// 添加一个目录，且文件包含在新目录new-subdir中
		archive.directory('./subdir/', 'new-subdir');

		// 添加一个目录，且文件放在根目录
		archive.directory('./subdir/', false);

		// 添加一个目录下后缀名固定的某些文件
		archive.glob('subdir/*.txt');

		//执行
		archive.finalize();

		//win zip格式的解压：引入adm-zip
		var adm_zip = require('adm-zip'); //需要引入adm-zip包
		var unzip = new adm_zip('./api/example.zip');
		unzip.extractAllTo("./api/example/", true);
	};
	return content;
}

module.exports = APIZip;