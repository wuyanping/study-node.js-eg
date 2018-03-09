var express = require("express");
//初始化
var app = express();
//sudo cnpm install jade
app.set("view engine","jade");
app.set("views","./view");
app.get("/",function (req,res) {
    res.render("index",{name:"abc",age:18,arr:[1,2,3,4,5]});
})

//设置端口号
app.listen(8080);
