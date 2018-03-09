//全局地址
//  /usr/local/bin
//第一步:把mongoodb.tgz解压
//第二步:把mongoodb里面的bin里的文件放到全局 /usr/local/bin里面
//第三步:在mongoodb里面建一个data文件 保存数据
//第四步:启动数据库 sudo mongod --dbpath data路径
//第五步:验证是否启动成功
//mongodb默认连接端口27017，如果出现如图的情况，可以打开http://localhost:27017查看，发现以下文字连接成功，如果不成功，可以查看端口是否被占用。
// It looks like you are trying to access MongoDB over HTTP on the native driver port.
//
// 启动成功后窗口不能关闭(关闭就不能连接数据库了)

// 第六步:操作数据库,成功启动MongoDB后，再打开一个命令行窗口输入mongo


//加载mongoose模块
var mongoose = require("mongoose");
//连接mongodb-默认连接test数据库,可在地址后加上需要连接的数据库名字例:/mydb
var db = mongoose.connect("mongodb://localhost:27017/myDB");

db.connection.on("error",function(err){
    console.log("连接失败"+err);
})

db.connection.on("open",function(){
    console.log("连接成功");
    start();
})

function start(){
//集合的数据模型定义,定义了字段名和字段的类型, 默认值
var Schema = new mongoose.Schema({
 name:{type:String},
 age:{type:Number,default:0}
},{
 collection:"test"//指定表
})

//构造model对象用于操作数据,类似thinkphp实例化
 var model = db.model("test",Schema);

//创建添加数据
// var testE = new model({
//    name:"kkk",
//    age:"18"
// })
// console.log(testE)
//把创建好的testE数据保存到mongodb数据库里面
// testE.save(function(error,doc){
//    if (error){
//        console.log(error);
//    }else{
//        console.log("保存成功:"+doc);
//    }
// })

//创建添加数据
model.create([{name:"ping",age:"18"},{name:"nihao",age:"19"}],function(err,doc){
   if (err){
       console.log(err)
   }else{
       console.log(doc)//返回添加的数据 [ { __v: 0, name: 'wu', _id: 58760162006bc2227fb1f173, age: 15 } ]
   }
})

//更改查找name为kkk,年龄age改为15
// update默认只改一条数据  multi:true可修改多条数据
// model.update({name:"haha"},{$set:{age:35}},{multi:true}, function (err) {
//    if (err){
//        return console.error(err);
//    }
//    console.log("更新成功");
// });

// 删除
// model.remove({name:"wuyanping"}, function (err) {
//    if (err){
//        console.log(err);
//    }else{
//        console.log("删除成功");
//    }
// })

//查询
// model.find({age:"15"}, function (err,doc) {
//    console.log(doc);
// })

//查询单条
// model.findOne({name:"wuyanping"}, function (err,doc) {
//    console.log(doc);
// });

//根据ID查找
// model.findById("58748490a1f60b5f1539c23a", function (err,doc) {
//    console.log(doc);
// })

//大于$gt
// model.find({"age":{"$gt":9,"$lt":16}}, function (err,doc) {
//    console.log(doc);
// });

//小于$lt
// model.find({"age":{"$lt":32}}, function (err,doc) {
//
//  console.log(doc);
//  });

//不等于$ne
// model.find({"age":{"$ne":0}}, function (err,doc) {
//    console.log(doc);
// });

//或者$or $and(并且)
// model.find({"$and":[{name:"yoko"},{age:15}]}, function (err,doc) {
//    console.log(doc);
// });

// 判断某个字段是否存在来进行查询
// model.find({"__v":{"$exists":true}}, function (err,doc) {
//    console.log(doc);
// })

//排序->sort  整数:升序 负数:倒序
model.find({},null,{sort:{age:-1}}, function (err,doc) {
    console.log(doc);
});

// model.find({},function (err,doc) {
//     console.log(doc);
// });
}