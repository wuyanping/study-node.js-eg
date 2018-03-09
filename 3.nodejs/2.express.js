var express = require("express");
//初始化
var app = express();
/*
* 中间件:
* 特点:
* 1.每个中间件都可以控制流程是否继续执行
* 2.没有挂载路径的中间件，应用的每个请求都会执行该中间件
* 3.如果当前中间件没有终结请求-响应循环，则必须调用 next()
* 4.方法将控制权交给下一个中间件，否则请求就会挂起。
* */

//设置访问静态文件的路径
//一般图片,css,js就可以用这种,如果要数据发生变化的页面就不用了
//http://localhost:8080/index.html
app.use(express.static("./www"));
//所有文件的路径都是相对于存放目录的，因此，存放静态文件的目录名不会出现在 URL 中。

// var num=100;
// app.use(function (req,res,next) {
//     num-=10;
//     // res.send("a");
//     console.log(num);
//     next();
// })
// app.use(function (req,res,next) {
//     num-=10;
//     console.log(num);
//     next();
// })
// app.use(function (req,res,next) {
//     num-=10;
//     console.log(num);
//     next();
// })
// app.get("/",function (req,res,next) {
//     num-=10;
//     console.log("end:"+num);
//     next();
// })
// app.use(function (req,res,next) {
//     num-=10;
//     res.send("end:"+num);
//
// })


// app.route("/www/index")//创建路由路径的链式路由句柄
//     .get(function (req,res) {
//        res.sendFile(__dirname+"/www/index.html");
//     })
//     .post(function (req,res) {
//         res.send("add a book");
//     })
//     .put(function (req,res) {
//         res.send("update a book");
//     })
//设置端口号
app.listen(8080,function(){
    console.log("ok")
});
