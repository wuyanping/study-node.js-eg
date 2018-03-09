var express = require('express')
var app = express()
var admin = express()
// app 对象通常表示Express应用程序。

// 属性：
// 1.app.locals ---------------------
// 该app.locals对象是一个JavaScript对象，其属性是应用程序中的局部变量。
// app.locals.title = "my yoko App"
// app.get('/', function(req, res) {
// 	res.send("成功")
// 	console.log(app.locals.title)
// })

// 2.app.mountpath ---------------------
// admin.get('/index', function(req, res) {
// 	console.log(admin.mountpath) // /admin
// 	res.send("Admin homepage")
// })
// app.use('/admin', admin) // mount the sub app
// 请求路由：http://localhost:3030/admin/index

// app.mountpath3级路由嵌套 ---------------------
// admin.get('/', function (req, res) {
//   console.log('admin.mountpath:' + admin.mountpath); // [ '/adm*n', '/manager' ]
//   res.send('Admin Homepage');
// })

// var secret = express();
// secret.get('/', function (req, res) {
//   console.log('secret.mountpath:' + secret.mountpath); // /secr*t
//   res.send('Admin Secret');
// });

// admin.use('/secr*t', secret); // load the 'secret' router on '/secr*t', on the 'admin' sub app
// app.use(['/adm*n', '/manager'], admin); // load the 'admin' router on '/adm*n' and '/manager', on the parent app
// // 请求路由：http://localhost:3030/admin/secret
// // 请求路由：http://localhost:3030/admin

// 3. 活动 ---------------------
// app.on('mount'，callback(parent))
// 路由将其挂载到父应用程序上时触发。父应用程序被传递给回调函数。
// admin.on('mount', function(parent) {
// 	console.log('Admin Mounted')
// 	console.log(parent) // refers to the parent app
// })

// admin.get('/', function(req, res) {
// 	res.send('Admin Homepage')
// })

// app.use('/admin', admin)

// 4.方法
// var requireAuthentication = function(req, res, next) {
// 	// res.send('requireAuthentication')
// 	console.log(req.params)
// 	if (req.params.pwd === '123456') {
// 		next()
// 	} else {
// 		res.send('requireAuthentication密码错误，请重新输入')
// 	}
// }

// var loadUser = function(req, res) {
// 	res.send('loadUser登录成功！！')
// }
// app.all（路径，回调[，回调...]）
// app.all('*/:pwd', requireAuthentication, loadUser);
// 或者相当于：

// app.all('*/:pwd', requireAuthentication)
// app.all('*', loadUser);

// 5.app.delete（路径，回调[，回调...]） (???)
// app.delete('/', function(req, res) {
// 	res.send('Delete request to homepage')
// })

// 6.app.disable（name） 设置name为false
// app.disable('trust proxy')   // <==> app.set('trust proxy', false)
// console.log(app.get('trust proxy')) // false

// 7.app.disabled(name)
// 表示属性是否被设置为false 
// console.log(app.disabled('name'))   // true
// app.enable('name');                 
// console.log(app.get('name'))		// true
// console.log(app.disabled('name')) 	// false ??

// 8.app.enable(name) 设置name为true
// app.enable('name') 
// console.log(app.get('name'))  // true   // <==> app.set('name', true)

// 9.app.enabled(name) // 表示属性是否被设置为true
// console.log(app.enabled('name')) // false
// app.enable('name')
// console.log(app.enabled('name')) // true

// 10.app.engine（ext，callback）用于注册一个模板引擎。默认情况下express通过文件后缀来添加模板引擎，如"foo.jade"文件 (???)
// app.engine('jade', require('jade').__express);  
// // 为引擎指定一个不同的后缀
// app.engine('html', require('ejs').renderFile);  
//  var engines = require('consolidate');  
// app.engine('haml', engines.haml);  
// app.engine('html', engines.hogan); 

// 11.app.get(name)  其中name的值来自于app.set()
// console.log(app.get('name')) // undefined  (一开始获取没有初始化的变量会出现undefined)
// app.set('name', 'yoko')
// console.log(app.get('name')) // yoko

// 12.app.get(path, callback[,callback...]) 为HTTP的get方法添加一个路由请求。你可以提供多个回调函数，这些回调函数就像中间件一样，
// app.get('/', function (req, res) {  
//   res.send('GET request to homepage');  
// });  

// 13.在最下

// 14. app.METHOD(path,callback[,callback...])
// checkout、connect、copy、delete、get、head、lock、merge、mkactivity、mkcol、move、m-search、notify、options、path、post、propfind、proppatch、purge、put、report、search、subscribe、trace、unlock、unsubscribe
// API文档常用的HTTP方法app.get()、app.post()、app.put()和app.delete()有明确的条目列出，但是，在上面列出的其他方法其实也有相同的方式。
// app.all()，它不是像其他HTTP方法一样工作，它在一个路径上对所有HTTP请求方法加载同一个中间件

// 15. app.param([name], callback)
// 为路由参数添加一个触发回调函数，其中name是参数的名称或它们的数组，回调函数是一个方法。回调函数的参数是requset对象，response对象，next中间件和按照顺序的name的值。

//  15.1)字符串参数
// app.param('name', function (req, res, next, name) {
//    console.log('只有一次:name:' + name); 
//   next();
// })

// app.get('/user/:name', function (req, res, next) {
//   console.log('userid1');
//   next();
// });

// app.get('/user/:name', function (req, res) {
//   console.log('userid2');
//   res.end();
// });

// 15.2)数组参数
// app.param(['name', 'pwd'], function (req, res, next, value, key) {
//   console.log('只有一次:' + key + ':' + value);
//   next();
// })

// app.get('/user/:name/:pwd', function (req, res, next) {
//   console.log('userid1');
//   next();
// });

// app.get('/user/:name/:pwd', function (req, res) {
//   console.log('userid2');
//   res.end();
// });

// 15.3)参数一个回调
// 定制的行为app.param()
// 定制一个回调，所有的app.param()都会去执行这个回调
app.param(function(param, option) {
	console.log('param:' + param)
	console.log('option:' + option)
  return function (req, res, next, val) {
  	console.log(option + '--' + val)
    if (val == option) {
      next();
    }
    else {
      res.sendStatus(403);
    }
  }
});

// 使用定制的app.param()
app.param('id', 1337);

app.get('/user', function (req, res) {
  res.send('OK');
})
app.get('/user/:id', function (req, res) {
  res.send('OK');
})

// 15.4)定义了一个自定义数据类型检查函数来验证用户id的数据类型
// app.param(function(param, validator) {
//   return function (req, res, next, val) {
//     if (validator(val)) {
//       next();
//     }
//     else {
//       res.sendStatus(403);
//     }
//   }
// })

// app.param('id', function (candidate) {
//   return !isNaN(parseFloat(candidate)) && isFinite(candidate);
// });

// app.get('/user/:id', function (req, res) {
//   res.send('OK');
// })

// 16. app.path()
// 返回应用程序的规范路径，一个字符串。
// 在安装应用程序的复杂情况下，此方法的行为可能会变得非常复杂：通常使用req.baseUrl来获取应用程序的规范路径会更好。
// var blog = express(),
// 	blogAdmin = express()

// app.use('/blog', blog)
// app.use('/admin', blogAdmin)

// console.log(app.path())      // ''
// console.log(blog.path())     // '/blog'
// console.log(blogAdmin.path())// '/admin'

// 17. app.post(path,callback[,callback...])
// app.post('/', function (req, res) {
//   res.send('POST request to homepage');
// });

// 18. app.put（path，callback [，callback ...]）
// app.put('/', function (req, res) {
//   res.send('PUT request to homepage');
// });

// 19. app.render(view, [locals], callback)
// app.render只负责生成视图，你会发现它是没能力把视图响应给客户端（浏览器）的，只有res.render手里有response对象，可以把视图响应给客户端
// res.render的伪代码可以看做如下:
// res.render = function(view, locals, cb){
//     app.render(view, locals, function(err, html){
//         if(typeof cb !== 'undefined'){
//             return cb(err, html);
//         }
//         res.send(html);
//     });
// };

// 20. app.route(path)
// 使用app.route()来避免重复路由名字
// app.all('/events', function() {})
// app.get('/events', function() {})
// app.post('/events', function() {})
// <==>
// app.route('/events')
// .all(function(req, res, next) {
//   console.log('all')
//   next()
// })
// .get(function(req, res, next) {
//   console.log('get')
//   res.end()
// })
// .post(function(req, res, next) {
//   console.log('post')
//   res.end()
// })

// 21. app.set(name, value) 给 name 设置项赋 value 值，name 是 Application settings 中属性的一项
// app.set('title', 'My Site');
// console.log(app.get('title')); // "My Site"

// 22. 应用程序设置

// 23. app.use（[path，] function [，function ...]）
// 将中间件 安装function在path。如果path未指定，则默认为“/”
// app.use('/admin', function(req, res, next) {
//   // GET 'http://localhost:3030/admin/image/new'
//   console.log(req.originalUrl); // '/admin/image/new'
//   console.log(req.baseUrl); // '/admin'
//   console.log(req.path); // '/image/new'
//   next();
//   // res.end()
// });
// // 如果path未指定，则默认为“/”
// app.use(function (req, res, next) {
//   console.log(2222)
//   next();
// })
// app.use(function (req, res) {
//   console.log(3333)
//   res.send("333333")
// })

// // 请求永远不会达到这个路线
// app.get('/', function (req, res) {
//   res.send('Welcome');
// })

// 24. 更多中间件的用法、
// 作用：使用多个回调函数处理路由（记得指定 next 对象）：
// 24.1) 挂载中间件的方法：
// 24.1.1） 单中间件
// app.use(function(req, res, next) {
// 	next()
// }, function(req, res){
// 	res.send("单中间件")
// })

// 24.1.2) 一个router是有效的中间件。 
// var router = express.Router()
// router.get('/router', function(req, res, next) {
// 	console.log("Router单中间件")
// 	next()
// }, function(req, res, next) {
// 	res.send("Router单中间件222")
// })
// app.use(router)

//24.1.3) 一个Express程序是一个有效的中间件。 
// subApp = express()
// subApp.get('/', function(req, res, next) {
// 	next()
// }, function(req, res, next) {
// 	res.send("express单中间件222")
// })
// app.use(subApp)

// 24.2) 挂载一系列中间件：
// var r1 = express.Router();
// r1.get('/index', function (req, res, next) {
//   console.log(11)
//   next();
// })

// var r2 = express.Router();
// r2.get('/index', function (req, res, next) {
//   console.log(22)
//   next();
//   // res.send("Router挂载一系列中间件22")
// })

// var r3 = express.Router();
// r3.get('/index', function (req, res, next) {
//   console.log(33)
//   res.send("Router挂载一系列中间件33")
// })

// app.use(r1, r2, r3);

// 24.3) 排列
// var r1 = express.Router()
// r1.get('/a', function(req, res, next) {
// 	next()
// })

// var r2 = express.Router() 
// r2.get('/a', function(req, res, next) {
// 	// next()
// 	res.send("Router排列")
// })

// app.use('/index', [r1, r2])

// 24.4) 组合
// function mw1(req, res, next) {
// 	console.log('mw1')
// 	next()
// }

// function mw2(req, res, next) {
// 	console.log('mw2')
// 	next()
// }

// var r1 = express.Router()
// r1.get('/', function(req, res, next) {
// 	console.log('r1')
// 	next()
// })

// var r2 = express.Router()
// r2.get('/', function(req, res, next) {
// 	console.log('r2')
// 	next()
// })

// var subApp = express()
// subApp.get('/', function(req, res, next) {
// 	console.log('subApp')
// 	// next()
// 	res.send('subApp........')
// })

// app.use(mw1, [mw2, r1, r2], subApp)
// 请求地址：http://localhost:3030/

// 24.5) app.use使用express.static 

// 为程序托管位于程序目录下的/www目录下的静态资源：
// app.use(express.static(__dirname + '/www'))
// 请求地址：http://localhost:3030/css/style.css

// app.use('/static', express.static(__dirname + '/www'));
// 请求地址： http://localhost:3030/static/css/style.css

// 托管静态资源从不同的路径，但./public路径比其他更容易被匹配：
app.use(express.static(__dirname + '/files'));
app.use(express.static(__dirname + '/uploads'));
app.use(express.static(__dirname + '/public'));

// 13.app.listen（port，[hostname]，[backlog]，[callback]） 绑定对于某一个特定host+port的连接的监听, 这个方法通过Node的http.Server.listen来完成
// 返回的app其实是一个javascript的函数，这个函数被传入到Node的HTTP服务器作为一个请求的回调函数。这样你就可以为为你的应用同时添加HTTP和HTTPS版本的处理函数
app.listen('3030', function() {
	console.log('监听localhost:3030成功！')
})



// var https = require('https')
// var http = require('http')
// http.createServer(app).listen('3030', function() {
// 	console.log('监听localhost:3030成功！')
// })
// https.createServer(option, app).listen('3030', function() {
// 	console.log('监听localhost:3030成功！')
// })
