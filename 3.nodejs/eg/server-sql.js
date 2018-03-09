// 运行服务器 nodo sever.js
var express=require("express");
var app=express();

// 加载静态资源
app.use(express.static(__dirname + '/js'))

//加载mysql模块
var mysql = require('mysql') 

//链接mysql-数据库
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'mysqltest',
    port: '3306'
})

con.connect(function() {
    console.log('连接成功！')
})

app.get("/zhuce",function (req,res) {
    res.sendFile(__dirname+"/zhuce.html");
})

app.get("/checkName",function (req,res) {
    var name = req.query.name
    var checkNameSql = "SELECT name FROM user WHERE name='"+ name +"'"
    con.query(checkNameSql, function(err, result) {
        if (result.length > 0) {
            res.send({isRepeat: true})
        } else {
            res.send({isRepeat: false})//
        }
    })
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
            var a=arr[i].split("="); //[[name, 123], [pwd, 123]]
            json[a[0]]=a[1];
        }
        console.log(json); // {name: 123, pwd: 123}
        //json获取到用户名密码
        var insertSql = 'INSERT INTO user(name, pwd) VALUE ("'+ json.name + '","' + json.pwd +'")'
        console.log(insertSql)
        con.query(insertSql, function(err, result) {
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
        console.log('data');
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
        var selectSql = 'SELECT * FROM user WHERE name="'+ json.name +'" AND pwd="'+ json.pwd +'"'
        console.log(selectSql)
        con.query(selectSql, function(err, result) {
            if (err){
                console.log(err);
                return;
            }
            console.log(result)
            if (result.length>0){
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