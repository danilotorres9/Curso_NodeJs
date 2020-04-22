var mysql = require('mysql');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'danilotorres9',
		password : '14jan2000',
		database : 'portal_noticias'
	});
}

module.exports = function () {
	return connMySQL;
}