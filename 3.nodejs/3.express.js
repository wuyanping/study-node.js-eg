var express = require("express");
// 模板引擎可以让（网站）程序实现界面与数据分离，业务代码与逻辑代码的分离，这就大大提升了开发效率，良好的设计也使得代码重用变得更加容易。
//初始化
var app = express();//创建实例
//模板引擎:->需要安装sudo npm install ejs
var ejs=require("ejs");

//1.设置指定渲染引擎view engine
// app.set("view engine","ejs");

//自己自定义一个引擎
app.engine("html",ejs.__express);
app.set("view engine","html");

//2.设置放模板文件的目录
app.set("views","./view"); //里面的文件用.ejs后缀

//3.渲染(render)模板
app.get("/",function (req,res) {
    // 渲染视图模板。
    res.render("index",{name:"yoko",age:18});
});

//设置端口号
app.listen(8080, function() {
	console.log('chenggong')
})
