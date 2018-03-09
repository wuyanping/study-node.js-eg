/**
 * Created by lan on 17/1/11.
 */
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
app.post("/addData",function (req,res) {
    // var data=req
});