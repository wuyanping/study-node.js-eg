/*
* Express 基于 Node.js 平台，快速、开放、极简的 web 开发框架。
*   路由 get() post() all()
*   res.send发送响应
*   res.sendFile以八位字节流的形式发送文件。 绝对路径
*   next可以使用多个回调函数处理路由
*
*   express.Router()类创建模块化、可挂载的路由句柄。Router 实例是一个完整的中间件和路由系统，因此常称其为一个 “mini-app”。
* */

var express = require("express");
// 创建 express 对象的一个实例 app
var app = express();

//外部引入路由
var home=require("./home");
//先判断/home,在判断home里面的地址
app.use("/home",home);

// app.get("/",function (req,res) {
//     // res.send("首页");
//     console.log(req.url);
//     // res.sendFile(__dirname+"/www/index.html");

// })
//添加中间件
app.get("/index",function (req,res,next) {
    // res.send("首页");http://www.downcc.com/tech/4135.html
    console.log("index11----");
    res.sendFile(__dirname+"/www/index.html");
    // next();//执行下一个匹
})
app.get("/abc",function (req,res) { console.log(req.url);
    // res.send("首页");
    console.log('abc--')
    res.sendFile(__dirname+"/www/abc.html");
})
app.post("/post",function (req,res) {
    // res.send("post首页");
    console.log('post--')
    res.sendFile(__dirname+"/www/post.html");
})

//app.all() 是一个特殊的路由方法，没有任何 HTTP 方法与其对应，它的作用是对于一个路径上的所有请求匹配。
// 并且路由的匹配是有顺序的,不能乱序写,匹配了,就不会执行第二个匹配,除非用中间件和all或者use
app.all("*",function (req,res) {
    // res.send("首页");
    res.sendFile(__dirname+"/www/404.html");
    console.log("22222");
})

app.listen(8082,function () {//监听一个端口
    console.log("开启成功: http://localhost:8082")
})

