/**
 * Created by lan on 17/1/10.
 */
// sudo npm install body-parser
// 运行服务器 nodo sever.js
var express=require("express");
var app=express();

//加载mongoose模块
var mongoose = require("mongoose");

//链接mongodb-数据库
var db = mongoose.connect("mongodb://localhost:27017/myDB");

db.connection.on("error",function(err){
    console.log("连接失败"+err);
})

db.connection.on("open",function(){
    console.log("连接成功");
})


//集合的数据模型定义,定义了字段名和字段的类型, 默认值
    var Schema = new mongoose.Schema({
        name: {type: String},
        age: {type: Number, default: 0}
    }, {
        collection: "user2"//指定表
    })

//构造model对象用于操作数据,类似thinkphp实例化
    var model = db.model("user2", Schema);


    app.get("/zhuce",function (req,res) {
        res.sendFile(__dirname+"/zhuce.html");
    })

app.post("/add",function (req,res) {
    var data="";
    req.on("data",function (con) {
        data+=con;
    });
    req.on("end",function () {
        console.log(data);
        var arr=data.split("&");
        var json={};
        //[name=123,pwd=123]
        for (var i=0;i<arr.length;i++){
            var a=arr[i].split("=");
            json[a[0]]=a[1];
        }
        console.log(json);
        //json获取到用户名密码,create在user数据表里创建这个用户数据
        model.create([json],function (err,doc) {
            if (err){
                console.log(err);
                return;
            }
            res.send("注册成功<a href='/login'>跳到登陆页</a>");
            // res.sendFile(__dirname+"/login.html");
        })
    })
})


//请求响应登陆页面
app.get("/login",function (req,res) {
    res.sendFile(__dirname+"/login.html");
});

//登陆检测
app.post("/check",function (req,res) {
    var data="";
    req.on("data",function (con) {
        data+=con;
    });
    req.on("end",function () {
        console.log(data);
        var arr=data.split("&");
        var json={};
        //[name=123,pwd=123]
        for (var i=0;i<arr.length;i++){
            var a=arr[i].split("=");
            json[a[0]]=a[1];
        }
        console.log(json);
        //json获取到用户名密码,create在user数据表里创建这个用户数据
        model.find(json,function (err,doc) {
            if (err){
                console.log(err);
                return;
            }
            if (doc.length>0){
                res.send("登陆成功");
            }else {
                res.send("登陆失败");
            }
        })
    })

});

//设置端口号
app.listen(8080,function(){
    console.log("localhost:8080 ok")
});
