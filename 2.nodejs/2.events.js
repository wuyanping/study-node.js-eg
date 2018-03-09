
/*
* events事件模块
*
* 绑定事件 on addListener
* 移除绑定事件removeListener
* emit触发事件
*
* */
var events = require("events");
var util = require("util")//工具类

function Person() {
    this.hp=3;
}
//person构造函数继承事件对象方法
util.inherits(Person,events);
var obj=new Person();
//所有事件类型都是我们自己定义的
// obj.on("click",da);
obj.on("haha",da);
//once方法绑定的事件只会触发一次
obj.once("die",function () {
    console.log("死了");
})
function da() {
    this.hp--;
    if (this.hp<=0){
        this.emit("die");
    }else {
        console.log("啊");
    }
}
obj.emit("haha");
//移出打的事件
obj.removeListener("haha",da);
obj.emit("haha");
obj.emit("haha");
obj.emit("haha");

