var http=require("http");
var url=require("url");
/*
 req:request 请求
 res:response 响应
 res.writeHead设置请求头
 */
//http.createServer创建服务器
var server=http.createServer(function (req,res) {

    // console.log(res);
    res.writeHead(200,{"content-type":"text/html;charset=utf-8"});
    //url.parse第二个参数bol 如果true返回对象的query属性会转为json对象
        var urlObj=url.parse(req.url,true);
        res.end("姓名:"+urlObj.query.name+"<br>年龄:"+urlObj.query.age);
    // console.log(req.);
})
server.listen(8089,function () {
    console.log("开启成功:http://localhost:8089");
});







