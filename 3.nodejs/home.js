/**
 * Created by lan on 17/1/10.
 */
var express=require("express");
var home=express.Router();//类创建模块化、可挂载的路由句柄
//创建了一个路由模块，并加载了一个中间件，定义了一些路由，并且将它们挂载至应用的路径上。

// 该路由使用的中间件
home.use(function timeLog(req, res, next) {
    console.log(11111);
    next();
})
home.get("/index",function (req,res) {
    res.send("home首页");
    console.log('index22--');
});
home.get("/login",function (req,res) {
    res.send("home的登陆页");
});

module.exports=home;
//应用即可处理发自 /index 和 /login 的请求，并且调用为该路由指定的 timeLog 中间件。
//11111
//22222