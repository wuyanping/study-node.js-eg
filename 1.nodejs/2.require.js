var home=require("./home"); //相对路径
//加载home里面的东西 ./代表当前目录  
//作用:引入模块
// 模块还可以避免函数名和变量名冲突。
home.show();
home.sum(5,4);
home.abc();
console.log(home);//返回一个模块导出对象
console.log("---------------------------");


// 函数用于在当前模块中加载和使用别的模块，传入一个模块名，
var test=require("test");
test.show();
// console.log(module);
// 通过module对象可以访问到当前模块的一些相关信息
//exports对象是当前模块的导出对象，用于导出模块公有方法和属性