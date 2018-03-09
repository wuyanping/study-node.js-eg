/*
*  文件系统模块 fs
*  读取文件方法
*    readFile(异步)
*    readFileSync(同步)
* */
var fs=require("fs");
//1. 异步,打开文件需要时间,所以先会执行console.log(222);
// 什么是异步，麦当劳点餐就是异步
// fs.readFile("test/a.txt",function (err,data) {
//     if (err){
//         console.log("出错了"+err);
//     }else{
//         console.log(data.toString());
//     }
// });
// console.log(222);

// 2. 同步
// var data = fs.readFileSync("test/a.txt");
// console.log(data.toString())
// console.log(222);

// 3. 打开文件 （在异步模式下）
// fs.open(path, flags[, mode], callback)
// path - 文件的路径。
// flags - 文件打开的行为。具体值详见test/flags.txt。 
// mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
// callback - 回调函数，带有两个参数如：callback(err, fd)。
console.log("准备打开文件！");
fs.open('test/yoko.txt', 'w+', function(err, fd) {
	if(err) {
		return console.log(err)
	}
	console.log('文件打开成功')
})

// 4. 获取文件信息 （在异步模式下）
// fs.stat(path, callback)
// path - 文件路径。
// callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
// tats.isFile()	如果是文件返回 true，否则返回 false。
// stats.isDirectory()	如果是目录返回 true，否则返回 false。
// stats.isBlockDevice()	如果是块设备返回 true，否则返回 false。
// stats.isCharacterDevice()	如果是字符设备返回 true，否则返回 false。
// stats.isSymbolicLink()	如果是软链接返回 true，否则返回 false。
// stats.isFIFO()	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
// stats.isSocket()	如果是 Socket 返回 true，否则返回 false。
fs.stat('test', function(err, stats) {
	if (err) {
		console.log(err)
	}
	console.log(stats)
})

// 5. 写入文件 （在异步模式下）