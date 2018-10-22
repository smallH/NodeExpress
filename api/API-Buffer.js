//Buffer 类在 Node.js 中是一个全局变量，因此无需使用 require('buffer').Buffer。
function APIBuffer() {
	var content = new Object();
	content.test = function() {

	};
	return content;
}

module.exports = APIBuffer;