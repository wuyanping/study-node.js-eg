var express = require("express")
var app = express()
// res

// 1.路由
// 它的结构如下： app.METHOD(path, [callback...], callback)，
// app 是 express 对象的一个实例，
// METHOD 是一个 HTTP 请求方法，包括（get, post, put, head, delete, options, trace, copy, lock, mkcol, move, purge, propfind, proppatch, unlock, report, mkactivity, checkout, merge, m-search, notify, subscribe, unsubscribe, patch, search, 和 connect）
// path 是服务器上的路径， 
// callback 是当路由匹配时要执行的函数。

// 2. 属性
// 2.1) res.app 这个属性持有express程序实例的一个引用，其可以在中间件中使用。res.app和请求对象中的req.app属性是相同的

// 2.2) res.headersSent
app.get('/abc', function(req, res, next) {
	// 2.1 res.headersSent是否为响应发送HTTP标头的布尔属性
	console.log(res.headersSent) // false
	res.send('abc')
	console.log(res.headersSent) // true

	// 2.2  (????)
	// res.locals.user = req.user
	// res.locals.authenticated = ! req.user.anonymous;
  	// next();
})

// 3.方法 
// 注：响应对象（res）的方法向客户端返回响应，终结请求响应的循环。如果在路由句柄中一个方法也不调用，来自客户端的请求会一直挂起。(3.1 -- 3.9)

app.get("/index", function(req, res) {
	
	// 3.1. res.download(path[,提示下载的文件名][,当错误发生或传输完成时，该方法将调用可选的回调函数fn])	提示下载文件。
	// res.download("./login.html", "登录文件", function(err) {
	// 	if (err) {
	// 		console.log("发生错误")
	// 	} else {
	// 		console.log("传输完成")
	// 	}
	// })

	// 3.2. res.end([data][,encoding])	终结响应处理流程。
	// 防止乱码
	// res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
	// res.end("响应结束")

	// 3.3. res.json() 发送一个 JSON 格式的响应。
	// res.json(null)
	// res.json({user: 'yoko'})
	// res.status(500).json({ error: 'message' })
	
	// 3.4. res.jsonp()	发送一个支持 JSONP 的 JSON 格式的响应。
	// res.jsonp(null)
	// res.jsonp({user: 'yoko'})
	// res.status(500).jsonp({error:'message'})

	// 3.5. res.redirect([status,]路径)	重定向请求。
	// res.redirect('/abc')b
	// res.redirect("https://www.baidu.com/")
	// res.redirect(301, "https://www.baidu.com/")
	
	// 3.6. res.render()	渲染视图模板。 (？？？) 
	// res.render('login')
	 
	// 3.7. res.send()	发送HTTP响应。
	// 参数可以是一个Buffer对象，一个String，对象，或一个Array。
	// res.send(new Buffer('whoop'))
	// res.send({name: 'yoko'})
	// res.send('name yoko')
	// res.send('<p>pppp</p>')
	// res.status(404).send('sorry, no find')
	// res.status(500).send({error: 'something blew up'})
		// 3.7.1）注意：当参数是一个Buffer对象时，该方法将Content-Type 响应头字段设置为“application / octet-stream”，除非事先定义如下：
		// res.set('Content-Type', 'text/html');
		// res.send(new Buffer('<p>some html</p>'));
		// 3.7.2）当参数是a时String，方法设置Content-Type为“text / html”：
		//  3.7.3）当参数是Arrayor时Object，Express以JSON表示响应：
		// res.send({ user: 'tobi' });
		// res.send([1,2,3]);

	
	// 3.9. res.sendStatus()	设置响应状态代码，并将其以字符串形式作为响应体的一部分发送。
	// res.sendStatus(200); // equivalent to res.status(200).send('OK')
	// res.sendStatus(403); // equivalent to res.status(403).send('Forbidden')
	// res.sendStatus(404); // equivalent to res.status(404).send('Not Found')
	// res.sendStatus(500); // equivalent to res.status(500).send('Internal Server Error')

// 3.10 将设置响应的HTTP标头
	// res.set('Content-Type', 'text/plain');
	// res.set({
	//   	'Content-Type': 'text/plain',
	//   	'Content-Length': '123',
	//   	'ETag': '12345'
	// })

// 3.11 res.status（代码）设置响应的HTTP状态
// 3.12 res.type（类型）
	// res.type('.html');              // => 'text/html'
	// res.type('html');               // => 'text/html'
	// res.type('json');               // => 'application/json'
	// res.type('application/json');   // => 'application/json'
	// res.type('png');                // => image/png:
	// res.send(new Buffer('<p>some html</p>'));

// 3.13 res.vary（场）
// Vary如果该字段不存在，则将该字段添加到响应标头。
// res.vary('User-Agent').render('docs');

// 3.14 res.append(field[,value])在指定的field的HTTP头部追加特殊的值value。
res.append('Warning', '199 Miscellaneous warning');
res.append('arr', '["yoko", 22]');
res.set('arr', 'arr');
// 注意：在res.append()之后调用app.set()函数将重置前面设置的值。

// res.attachment('./login.html');


// 3.15 res.cookie(name, value [,options]) 设置name和value的cookie，value参数可以是一串字符或者是转化为json字符串的对象。
// // options是一个对象，其可以有下列的属性。
// 属性			类型		描述
// domain		String		设置cookie的域名。默认是你本app的域名。
// expires		Date		cookie的过期时间，GMT格式。如果没有指定或者设置为0，则产生新的cookie。
// httpOnly		Boolean		这个cookie只能被web服务器获取的标示。
// maxAge		String		是设置过去时间的方便选项，其为过期时间到当前时间的毫秒值。
// path			String		cookie的路径。默认值是/。
// secure		Boolean		标示这个cookie只用被HTTPS协议使用。
// signed		Boolean		指示这个cookie应该是签名的。
res.cookie('name', 'yoko', { domain: 'index', path: '/index', secure: true });

// res.cookie('remenberme', '1', {'expires':new Date(Date.now() + 90000), 'httpOnly':true});
// maxAge 是一个方便设置过期时间的方便的选项
res.cookie('rememberme', '1', {'maxAge':90000, "httpOnly":true});
res.clearCookie('name', { domain: 'index', path: '/index', secure: true });

// 3.16 res.format(object) 进行内容协商，根据请求的对象中AcceptHTTP头部指定的接受内容。
// res.format({
//     'text/plain':function() {
//         res.send('hey');
//     },
//     'text/html':function() {
//         res.send('<p>hey</p>');
//     },
//     'application/json':function() {
//         res.send({message:'hey'});
//     },
//     'default':function() {
//         res.status(406).send('Not Acceptable');
//     }
// })
// 3.17 res.links（链接）连接links提供的参数的属性来填充响应的  LinkHTTP头字段。
res.links({
  next: 'http://api.example.com/users?page=2',
  last: 'http://api.example.com/users?page=5'
});

// 3.18 res.location(path) 设置响应的LocationHTTP头部为指定的path参数。
res.location('http://example.com');

//3.19  res.redirect([status,] path) 重定向来源于指定path的URL，
// res.redirect('https://www.baidu.com/')
// res.redirect('back');

res.end()
// console.log(res)


})
app.get("/file/:name", function(req, res) {
	// 3.8. res.sendFile(path[,option][,fn])	以八位字节流的形式发送文件。
	// path:绝对路径
	// option: {
	// 	maxAge: 'Cache-Control以毫秒为单位设置标题的max-age属性或以ms格式设置字符串 默认0', 
	// 	root: "相对文件名的根目录。	 ",	 
 	//  lastModified: "将Last-Modified标题设置为操作系统上文件的最后修改日期。设置false为禁用它。默认：启用",
	// 	headers: "包含HTTP头文件的对象。",
	// 	dotfiles: '提供点文件的选项。可能的值是“允许allow”，“拒绝deny”，“忽略ignore”。默认：忽视'
	// }
	// fn(err)在传输完成或发生错误时调用回调函数。
	var options = {
		root: __dirname,
		dotfiles: 'deny',
		headers: {
			'x-timestamp': Date.now(),
			'x-sent': true
		}
	}

	var fileName = req.params.name
	console.log(fileName)
	// res.end()
	res.sendFile(fileName, options, function(err) {
		if (err) {
	        console.log(err);
	      	res.status(err.status).end();
	    }
	    else {
	      	console.log('Sent:', fileName);
	    }
	})	
})


app.listen(8055,function () {//监听一个端口
    console.log("开启成功: http://localhost:8055")
})