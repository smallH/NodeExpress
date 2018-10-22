function APIEvent() {
	var content = new Object();
	content.test = function() {
		return;
		var events = require('events');
		var eventEmitter = new events.EventEmitter();

		//定义监听事件1
		var listener1 = function listener1(arg) {
			console.log("listener1:" + arg);
		}
		//定义监听事件2
		var listener2 = function listener2(arg) {
			console.log("listener2:" + arg);
		}
		//添加监听
		eventEmitter.on('connection', listener1);
		eventEmitter.on('connection', listener2);

		//触发监听
		eventEmitter.emit('connection', '首次触发事件');

		//移除监听
		console.log("移除监听");
		eventEmitter.removeListener('connection', listener1); //移除单个事件
		//		eventEmitter.removeAllListeners(['connection']); //移除所有事件

		//再次触发监听
		eventEmitter.emit('connection', '再次触发事件');

		//结果
		//listener1:首次触发事件
		//listener2:首次触发事件
		//移除监听
		//listener2:再次触发事件

		//console.log("-------------------------------------");

		//强行退出程序（保护机制）
		//				eventEmitter.emit('error');

		//console.log("-------------------------------------");
		//定义监听事件1
		//		var listener1 = function listener1(arg) {
		//			console.log("listener1:" + arg);
		//		}
		//
		//		//原型链实现继承
		//		var EventEmitter = require('events').EventEmitter;
		//
		//		function Client() {}
		//		Client.prototype.a = function() {
		//			console.log("a");
		//		}
		//		Client.prototype.__proto__ = EventEmitter.prototype;
		//		var client = new Client();
		//		client.a();
		//		client.on('extend', listener1)
		//		client.emit('extend', "Hello World");

		//结果：
		// a
		// listener1:Hello World
	};
	return content;
}

module.exports = APIEvent;