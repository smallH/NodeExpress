function MySQL() {
	var url = require('url');
	var mysql = require('mysql');
	var connection = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '123456',
		database: 'test'
	});

	var content = new Object();
	content.queryAction = function(request, response) {
		var sql = 'SELECT * FROM websites';
		connection.query(sql, function(err, result) {
			var data = {};
			if(err) {
				data.code = "404";
				data.msg = err.message;
				response.end(JSON.stringify(data));
				connection.end();
				return;
			}
			//返回参数,为JSON字符串
			data.code = "200";
			data.msg = "操作成功";
			data.data = result;
			response.end(JSON.stringify(data));
			connection.end();
		});
	}

	content.addAction = function(request, response) {
		var addSql = 'INSERT INTO websites(Id,name,url,alexa,country) VALUES(6,?,?,?,?)';
		var addSqlParams = ['百度', 'http://www.baidu.com', '1', 'CN'];
		connection.query(addSql, addSqlParams, function(err, result) {
			var data = new Object();
			if(err) {
				data.code = '404';
				data.msg = err.message;
			} else {
				data.code = '200';
				data.msg = "操作成功";
				var temp = {};
				temp.id = result.insertId;
				data.data = temp;
			}
			response.end(JSON.stringify(data));
			connection.end();
		});
	}

	content.updateAction = function(request, response) {
		var modSql = 'UPDATE websites SET name = ?,url = ? WHERE Id = ?';
		var modSqlParams = ['门户', 'http://www.hao123.com', 6];
		connection.query(modSql, modSqlParams, function(err, result) {
			var data = new Object();
			if(err) {
				data.code = '404';
				data.msg = err.message;
			} else {
				data.code = '200';
				data.msg = "操作成功";
			}
			response.end(JSON.stringify(data));
			connection.end();
		});
	}

	content.delectAction = function(request, response) {
		var delSql = 'DELETE FROM websites where id=6';
		connection.query(delSql, function(err, result) {
			var data = new Object();
			if(err) {
				data.code = '404';
				data.msg = err.message;
			} else {
				data.code = '200';
				data.msg = "操作成功";
			}
			response.end(JSON.stringify(data));
			connection.end();
		});
	}

	return content;
}

module.exports = MySQL;