
/*
 req:request 请求
 res:response 响应
 res.writeHead设置请求头
 */
//http.createServer创建服务器
var http=require("http");
var server=http.createServer(function (req,res) {
    console.log(req.url);
    if(req.url=="/"||req.url=="/index"){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        // res.write("响应内容");
        res.end("首页");
    }else if(req.url=="/login"){
        res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
        // res.write("响应内容");
        res.end("登陆页");
    }else {
        res.writeHead(404,{"content-type":"text/html;charset=utf-8"});
        // res.write("响应内容");
        res.end("没有找到该页面");
    }
})
server.listen(8088,function () {
    console.log("开启成功:http://localhost:8088");
});


 




