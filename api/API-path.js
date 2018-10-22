function APIUrl() {
	var content = new Object();
	content.test = function() {
		return;
		var path = require('path');
		//path.basename(path[, ext]) 返回一个 path 的最后一部分
		console.log(path.basename('/foo/bar/baz/asdf/quux.html')); //quux.html
		console.log(path.basename('/foo/bar/baz/asdf/quux.html', '.html')); //去后缀，quux
		//path.delimiter 提供平台特定的路径分隔符：Windows 上是 ; POSIX 上是 :
		console.log(process.env.PATH);
		console.log(process.env.PATH.split(path.delimiter));
		//path.dirname(path) 返回目录路径
		console.log(path.dirname('/foo/bar/baz/asdf/quux.html')); // '/foo/bar/baz/asdf'
		//path.extname(path) 返回后缀名
		console.log(path.extname('index.html')); // .html
		console.log(path.extname('index.png')); // .png
		//path.parse(path) 返回一个对象，对象的属性表示 path 的元素。
		console.log(path.parse('C:\\path\\dir\\file.txt'));
		// 返回:
		// { root: 'C:\\',
		//   dir: 'C:\\path\\dir',
		//   base: 'file.txt',
		//   ext: '.txt',
		//   name: 'file' }
		//path.relative(from, to) 返回从 from 到 to 的相对路径（基于当前工作目录）
		console.log(path.relative('C:\\orandea\\test\\aaa', 'C:\\orandea\\impl\\bbb')); // ..\..\impl\bbb
		//path.normalize(path) 当发现多个连续的路径分隔符时（如 POSIX 上的 / 与 Windows 上的 \ 或 /），它们会被单个的路径分隔符（POSIX 上是 /，Windows 上是 \）替换。 末尾的多个分隔符会被保留。
		console.log(path.normalize('C:\\temp\\\\foo\\bar')); // C:\temp\foo\bar
		console.log(path.win32.normalize('C:////temp\\\\/\\/\\/foo/bar')); //当有两种分隔符时，用path.win32，C:\temp\foo\bar
		//path.sep 分隔符
		console.log('foo\\bar\\baz'.split(path.sep)); // [ 'foo', 'bar', 'baz' ]

		//获取node.exe绝对路径
		console.log(process.execPath); // C:\Program Files\nodejs\node.exe
		//获取项目目录绝对路径
		console.log(process.cwd()); //C:\Users\Administrator\Documents\HBuilderProject\NodeExpress
	};
	return content;
}

module.exports = APIUrl;