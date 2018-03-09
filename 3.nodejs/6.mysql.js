// npm install mysql --save-dev
var mysql = require('mysql')
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'root',
	database: 'mysqltest',
	port: '3306'
})

connection.connect();

// 查询数据
var  sql = 'SELECT * FROM user';
//查
var result = null
connection.query(sql,function (err, result) {
        if(err){
          console.log('[SELECT ERROR] - ',err.message);
          return;
        }
 
       console.log('--------------------------SELECT----------------------------');
       console.log(result);
       result = result
       console.log('------------------------------------------------------------\n\n');  
});
 

// 插入数据
// var insertSql = "INSERT INTO user(name, pwd) VALUE ('hb', 520), ('bb', 7520) "
// connection.query(insertSql, function(err, result) {
// 	if(err) {
// 		console.log('[INSERT ERROR] - ',err.message);
//          return;
// 	}
// 	console.log('--------------------------INSERT----------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');  
// })

// 更新数据
// var updateSql = 'UPDATE user SET name="HBB" WHERE name="bb"'
// connection.query(updateSql, function(err, result) {
// 	if(err) {
// 		console.log('[UPDATE ERROR] - ', err.message)
// 		return
// 	}
// 	console.log('----------------------------UPDATE--------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');  
// })

// 删除数据
// var delSql = 'DELETE FROM user WHERE name="HBB"'
// connection.query(delSql, function(err, result) {
// 	if(err){
// 		console.log('[DELETE] - ', err.message)
// 		return
// 	}
// 	console.log('----------------------------DELETE--------------------------');
//     console.log(result);
//     console.log('------------------------------------------------------------\n\n');  
// })


connection.end();