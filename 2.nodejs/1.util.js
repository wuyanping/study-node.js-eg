/*
 * util工具模块
 * 1.实现继承
 * 2.输出对象
 * 3.类型验证
 *
 * inherits原型继承方法
 * inspect返回一个对象的字符串表现形式
 * 判断类型isArray is....
 * */
var util = require("util");//引入工具模块
function Person(name) {
    this.name=name;
    this.show=function () {
        console.log(this.name);
    }
}
Person.prototype.sayhello=function () {
    console.log("hello");
}

function Son() {
    // Person.call(this,name,age);
    Person.apply(this,arguments);
}
util.inherits(Son,Person);//原型继承
var obj=new Son("yoko");
obj.show();
obj.sayhello();

//把对象转化为字符串
console.log(typeof util.inspect(obj));

//判断对象类型
console.log('--------------判断对象类型:util.isArray()-------------')
console.log(util.isArray([])); // true

//将任意对象转换 为字符串的方法，通常用于调试和错误输出。
console.log('--------------判断对象类型:util.inspect()-------------')
var person = new Person('yoko')
console.log(util.inspect(person)); 
console.log(util.inspect(person, true)); 

// 给定的参数 "object" 是一个正则表达式返回true，否则返回false
console.log('--------------判断对象类型:util.isRegExp(object)-------------')
console.log(util.isRegExp(/abc/))  // true
console.log(util.isRegExp(new RegExp('abc')))  // true
console.log(util.isRegExp({}))    // false

// 如果给定的参数 "object" 是一个日期返回true，否则返回false。
console.log('--------------判断对象类型:util.isDate(object)-------------')
console.log(util.isDate(new Date()))  // true
console.log(util.isDate({}))		  // false

// 如果给定的参数 "object" 是一个错误对象返回true，否则返回false。
console.log('--------------判断对象类型:util.isError(object)-------------')
console.log(util.isError(new Error()))		// true
console.log(util.isError(new TypeError()))	// true
console.log(util.isError({name: 'Error', mesage: 'error'}))		// false
