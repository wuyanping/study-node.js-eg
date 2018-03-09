
/*
req:request 请求
res:response 响应
res.writeHead设置请求头
http.createServer创建一个新的web服务器对象
 */
// 要使用HTTP服务器或客户端功能，需引用此模块require('http').
var http=require("http");
var server=http.createServer(function (req,res) {//而http模块创建的HTTP服务器在接收到完整的请求头后，就会调用回调函数。
    console.log(req.method);
    console.log(req.headers);
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    res.write("响应内容");
    res.end("<a href='###'>响应结束</a>");
}).listen(8087,function () {//监听端口,监听成功执行这回调函数
    console.log("开启成功:http://localhost:8087");
});







