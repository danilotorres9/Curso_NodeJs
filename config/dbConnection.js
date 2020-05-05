var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'root',
		password : '14jan2000',
		database : 'portal_noticias'
	});
}

module.exports = function () {
	return connMySQL;
}