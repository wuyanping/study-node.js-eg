
// 1. 默认的脚本

// 比如start和install，当然你可以覆盖这2个值。
// $ npm run start 
// 如果你在项目里根目录有一个server.js，然后你又没自己定义start script，那么npm run start，就会执行server.js 
console.log("this is test\/server.js")
console.log(process.argv)
console.log(process.argv[3])

// 上面代码中，*表示任意文件名，**表示任意一层子目录

// 当然可以设置prestart 和poststart脚本
// scripts : { 
//     "prestart" : "echo \" this is pre start \"",
//     "poststart" : "echo \" this is post start \""
// }

// 那么npm run start，

// prestart
// server
// poststart
// 
// "scripts": {
//     "prestop" : "echo \" this is pre stop \"",
//     "stop" : "echo \" this is stop \"",
//     "poststop" : "echo \" this is post stop \"",
// ​
//     "prestart" : "echo \" this is pre start \"",
//     "start" : "echo \" this is start \"",
//     "poststart" : "echo \" this is post start \"",
       
//     "prerestart" : "echo \" this is pre start \"",
//     "postrestart" : "echo \" this is post start \"",
//   }
// npm run restart

// this is pre restart
// this is pre stop
// this is stop
// this is post stop
// this is pre start
// this is start
// this is post start
// this is post restart 
