var express = require('express')
var App = express()
// 1.创建一个路由： express.Router([options])
// options参数可以指定路由的行为，其有下列选择：
// 属性	 		     描述						默认值												可用性
// caseSensitive	 是否区分大小写				默认不启用。对待/Foo和/foo一样。	
// mergeParams		 保存父路由的res.params。	如果父路由参数和子路由参数冲突，子路由参数优先。	false	
// strict			 使能严格路由。				默认不启用，/foo和/foo/被路由一样对待处理
var router = express.Router()

// 2. router当作一个程序，可以在其上添加中间件和HTTP路由方法(例如get，put，post等等)。
// router.use(function(req, res, next) {
// 	next()
// 	// res.send('use')
// })

// router.get('/', function(req, res) {
// 	res.send('get')
// })

// ||  4. 方法 ------------
// 4.1)  router.all() 匹配所有的HTTP动作
// router.all('*', requireAuthentication, loadUser);
//  <==> 
// router.all('*', requireAuthentication)
// router.all('*', loadUser);
// 作用于以/api开头的路径:
// router.all('/api/*', requireAuthentication);

// 4.2 router.param(name, callback) 给路由参数添加回调触发器，这里的name是参数名，function是回调方法。
// 不像app.param()，router.param()不接受一个数组作为路由参数。
// router.param('id', function(req, res, next, id) {
//     console.log('只有一次: id :' + id);
//     next();
// });
// router.get('/user/:id', function(req, res, next) {
//     console.log('userid1');
//     next();
// });
// router.get('/user/:id', function(req, res) {
//     console.log('userid2');
//     res.end();
// });


// 4.2.1 自定义方法
// router.param(function(param, option){
//     return function(req, res, next, val) {
//         if (val == option) {
//             next();
//         }
//         else {
//             res.sendStatus(403);
//         }
//     }
// });
// router.param('id', 1337);
// router.get('/user/:id', function(req, res) {
//     res.send('Ok');
// });

// 4.2.2 定义了一个自定义的数据类型检测方法来检测user id的类型正确性。
// router.param(function(param, validator) {
//     return function(req, res, next, val) {
//         if (validator(val)) {
//             next()
//         }
//         else {
//             res.sendStatus(403)
//         }
//     }
// });
// router.param('id', function(candidate) {
//     return !isNaN(parseFloat(candidate)) && isFinite(candidate)
// })
// router.get('/user/:id', function(req, res) {
//     res.send('Ok')
// });

// 5. router.route 
// router.param('id', function(req, res, next, id){
// 	req.user = {
// 		id: id, 
// 		name: 'yoko'
// 	}
// 	next()
// })
// router.route('/user/:id')
// .all(function(req, res, next) {
// 	console.log('all')
// 	next()
// })
// .get(function(req, res, next) {
// 	console.log('get')
// 	console.log(req.user)
// 	res.json(req.user)
// })
// .put(function(req, res, next) {
// 	// req.user.name = req.params.name
// 	res.json(req.user)
// })
// .post(function(req, res, next) {
// 	next(new Error('not'))
// })
// .delete(function(req, res, next) {
// 	next(new Error('not'))
// })

// 6. router.use()
// router.use(function(req, res, next) {
// 	console.log('%s %s %s', req.method, req.url, req.path);
//   	next();
// })

// router.use('/bar', function(req, res, next) {
// 	console.log('bar')
// 	next()
// })

//  router.use(function(req, res, next) {
//  	res.send('yoko')
//  })

// 7. morgan 日志中间件
// 学习网站 ：https://segmentfault.com/a/1190000007769095
// var logger = require('morgan'); //日志中间件
// router.use(logger());
// router.use(express.static(__dirname + '/public'))
// // http://loopback:8081/style.css
// router.use(function(req, res) {
// 	console.log(22)
// 	res.send('hello')
// })

// 7.1 将日志打印到本地文件 
var morgan = require('morgan')
var fs= require('fs')
var path = require('path')

var accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), {flags: 'a'});

App.use(morgan('short', {stream: accessLogStream}))
App.use(function(req, res, next) {
	// res.send('ok')
	next()
})
App.use(function(req, res, next) {
	res.send('ok22')
})

// App.use(express.static(__dirname + '/files'));
// App.use(express.static(__dirname + '/uploads'));

// App.use(express.static(__dirname + '/public'));
// 3.在一个特别的根URL上挂载一个路由，这样你就以将你的各个路由放到不同的文件中或者甚至是mini的程序。
// App.use(router)



App.listen('8081', function() {
	console.log("开启成功: http://localhost:8081")
})

