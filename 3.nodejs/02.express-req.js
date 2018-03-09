var express = require('express')
var app = express()
// req 对象代表了一个HTTP请求，其具有一些属性来保存请求中的一些数据，比如query string，parameters，body，HTTP headers等等。

// 1 获取地址参数
//  1.1 
//  app.get('/cs/:name/:age', function (req, res) {
// 	console.log(req.params)
// 	res.send('获取地址参数')
// 	// 浏览器地址写： http://localhost:8055/cs/yoko/22
// })

// 1.2
// app.get('/cs', function (req, res) {
// 	console.log(req.query)
// 	res.send('获取地址参数')
// 	// 浏览器地址写： http://localhost:8055/cs?name=yoko&age=22
// })

// 2. 属性
// 2.1) req.app 这个属性持有express程序实例的一个引用，其可以作为中间件使用。
app.get('/viewdirectory', require('./public/mymiddleware.js'))
// 浏览器地址写： http://localhost:8888/viewdirectory

// 2.2) req.baseUrl  一个路由实例挂载的Url路径。
// var greet = express.Router()
// greet.get('/jp', function(req, res) {
// 	console.log(req.baseUrl)  // '/greet'
// 	res.send('yoko')
// })

// // app.use('/greet', greet)
// app.use(['/gre+t', '/hel{2}o'], greet)   // '/greet' || '/hello'
// // http://localhost:8888/greet/jp

// 2.4) req.body 包含请求正文中提交的键值对数据。默认情况下，undefined当您使用body-parser和multer等身体分析中间件时，它会被填充。(???)
// var bodyParser = require('body-parser');
// var multer = require('multer'); 

// app.use(bodyParser.json()) // 解析应用程序/json
// app.use(bodyParser.urlencoded({ extended: true })) // 解析应用程序/ x-www-form-urlencoded
// app.use(multer()) // 解析 multipart/form-data

// app.post('/', function (req, res) {
//   console.log(req.body)
//   res.json(req.body)
// })

// 2.5) req.cookies 这个属性是一个对象，其包含了请求发送过来的cookies。如果请求没有带cookies，那么其值为{}。
var cookieParser = require('cookie-parser') //Cookie的解析器,由Cookie名称键入的对象
app.use(cookieParser())
app.get('/cookies', function (req, res) {
  // console.log('req: ', req)
  console.log('Cookies: ', req.cookies)
  // 当使用cookie-parser中间件的时候，这个属性包含的是请求发过来的签名cookies对象，可直接使用
  console.log('Signed Cookies: ', req.signedCookies)
  res.send('req.cookies')
})

// 2.6) req.fresh 指示这个请求是否是最新的
 // 当cache-control请求头没有no-cache指示和下面中的任一一个条件为true，那么其就为true：if-modified-since，if-none-match和etag不相同 (???)
// var fresh = require('fresh')
// app.get('/', function (req, res) {
//   res.send('req.fresh:dfa ' + req.fresh)
// })

// 2.7) req.hostname
// app.get('/hostname', function (req, res) {
//   res.send('req.hostname: ' + req.hostname) //  'localhost'
// })
// // http://localhost:8888/hostname

// 2.8) req.ip
// app.set('trust proxy', true) // 指定唯一子网
// app.get('/ip', function (req, res) {
//   res.send('req.ip: ' + req.ip) //  'localhost'
//   console.log(req.ip) // 请求的远程IP地址 ::1
//   console.log(req.ips) // []
// })

// 2.9) req.originalUrl
// app.get('/search', function (req, res) {
//   res.send('req.originalUrl: ' + req.originalUrl)  // "/search?q=something"
// })
// // http://loopback:8888/search?q=something

// 2.10) req.params
// app.get('/params/:id', function (req, res) {
//   res.send('req.params' )
//   console.log(req.params)  //{ id: '123' }
// })
// // http://loopback:8888/params/123

// 2.11) req.path 
// app.get('/path', function (req, res) {
//   res.send('req.path' )
//   console.log(req.path)  //   '/path'
// })
// // http://loopback:8888/path?name=yoko

// 2.12) req.protocol 请求的协议，一般为http，当启用TLS加密，则为https。
// app.get('/protocol', function (req, res) {
//   res.send('req.protocol' )
//   console.log(req.protocol)  //   'http'
// })

// 2.13) req.query 
// app.get('/query', function (req, res) {
//   res.send('req.query' )
//   console.log(req.query)  //   { name: 'yoko' }
// })
// // http://loopback:8888/query?name=yoko

// 2.14) req.route 当前匹配的路由，其为一串字符
// app.get('/user/:id?', function userIdHandler(req, res) {
//   console.log(req.route);
//   res.send('GET');
// })
// // http://loopback:8888/user/123

// 2.15) req.secure 当前匹配的路由，其为一串字符
// 一个布尔值，如果建立的是TLS的连接，那么就为true。等价于：'https' == req.protocol;
// app.get('/secure', function (req, res) {
//   console.log(req.secure);  // false
//   res.send('secure');
// })
// // http://loopback:8888/secure

// 2.16) req.stale 指示这个请求是否是stale(陈旧的)，它与req.fresh是相反的
// app.get('/stale', function (req, res) {
//   console.log(req.stale);  // true
//   res.send('stale');
// })

// 2.17) req.subdomains 请求中域名的子域名数组。
// app.get('/subdomains', function (req, res) {
//   console.log(req.subdomains);  // []
//   res.send('subdomains')
// })

// 2.18) req.xhr 一个布尔值，如果X-Requested-With的值为XMLHttpRequest，那么其为true，其指示这个请求是被一个客服端库发送，比如jQuery。
// app.get('/xhr', function (req, res) {
//   console.log(req.xhr);  // false
//   res.send('xhr')
// })


// 3. 方法
// 3.1） req.accepts(types) 检查这个指定的内容类型是否被接受，基于请求的Accept HTTP头部。这个方法返回最佳匹配，如果没有一个匹配，那么其返回undefined(在这个case下，服务器端应该返回406和"Not Acceptable")。
app.get('/accepts', function (req, res) {
	// Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8
  console.log('1. req.accepts(types)-----')  // 'html'
  console.log(req.accepts('html'))  // 'html'
  console.log(req.accepts('text/html'))  // 'text/html'
  console.log(req.accepts(['json', 'text'])) //'json'
  console.log(req.accepts('application/json')) //'application/json'
  console.log(req.accepts('image/png')) //'image/png'
  console.log(req.accepts('png')) //'png'

  console.log('2. req.acceptsCharsets()-----') 
  console.log(req.acceptsCharsets())

  console.log('3. req.acceptsEncodings()-----') 
  console.log(req.acceptsEncodings())  //[ 'gzip', 'deflate', 'identity' ]

  console.log('4. req.acceptsLanguages()-----') 
  console.log(req.acceptsLanguages())  //[ 'zh-CN', 'zh' ]

  console.log('5. req.get()-----') //返回指定的请求HTTP头部的域内容(不区分大小写)。Referrer和Referer的域内容可互换。没有的字段，返回undefined
  console.log(req.get('Accept')) //text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*

  console.log('6. req.is(type)---')
  console.log(req.is('html'))

  res.send('accepts')
})

app.get('/user/:name', function(req, res) {
	console.log(req.param('name')) // yoko
	res.send('param()')
})
// http://loopback:8888/user/yokolocalhost:8087

app.listen(8888, function(){
	console.log('开启成功:http://localhost:8888')
})