var http = require("http");
var fs  = require("fs");


var server = http.createServer(function(req,res){
    req.on("data",function (data) {
        console.log(data);
    });
    console.log(req.url);
    var url=req.url;
    // "/""index.html"
    if (url=="/"){
        url="/index.html";
    }
    var isFile=false;
    //判断访问的地址文件是否存在
    var bol=fs.existsSync("www"+url);
    if (bol){
        var stat=fs.lstatSync("www"+url);
        isFile=stat.isFile();
    }
    if (isFile){
        res.writeHead(404,{
            "Content-type":"text/html;charset=utf-8"
         })
        // var rs = fs.createReadStream("www"+url);
        // rs.pipe(res);
        var con=fs.readFileSync("www"+url);
        res.end(con);
    }else{
        res.writeHead(404,{
            "Content-type":"text/html;charset=utf-8"
        })
        res.end("没有找到该页面");
    }
    // res.end();
});





server.listen(8081,function(){
    console.log('开启成功：http://localhost:8081')
});