function APIUrl() {
	var content = new Object();
	content.test = function() {
		return;
		var url = require('url');
		var href = "http://localhost:8081/url_get?abc=123";
		var myURL = new url.URL(href);
		console.log(myURL.href); // http://localhost:8081/url_get?abc=123
		console.log(myURL.origin); // http://localhost:8081
		console.log(myURL.host); // localhost:8081
		console.log(myURL.hostname); // localhost
		console.log(myURL.port); // 8081
		console.log(myURL.pathname); // /url_get
		console.log(myURL.protocol); // http:
		console.log(myURL.search); // ?abc=123
		console.log(myURL.searchParams.get('abc')); // 123
	};
	return content;
}

module.exports = APIUrl;