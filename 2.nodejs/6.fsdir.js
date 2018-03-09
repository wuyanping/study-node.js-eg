/**
 * 文件操作
 * 目录操作
 */
var fs = require("fs");

//1.写入文件 fs.writeFile(file, data[, options], callback)
// file - 文件名或文件描述符。
// data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(流) 对象。
// options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
// callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回
fs.writeFile("test/yoko.txt", "写入的内容22", {flag:"w"}, function (err) {
    if(err){
        console.log("写入失败"+err);
        return
    }
    console.log("写入成功");
    console.log("--------我是分割线-------------")
		console.log("读取写入的数据！");
		fs.readFile('test/yoko.txt', function(err, data) {
			if(err) {
				console.log('读取失败：' + err)
				return
			}
			console.log('异步读取文件数据:' + data.toString())
		})
    
});

//2.创建文件mkdir(filename,fn(err))
// fs.mkdir("test/d.txt",function (err) {
//     if(err){
//         console.log("创建失败"+err);
//     }else {
//         console.log("创建成功");
//     }
// });

//3.读取目录所有文件readdir(url,fn(err,files))
// fs.readdir(".",function (err,files) {
//     if(err){
//         console.log("读取失败"+err);
//     }else {
//         console.log(files);
//     }
// });
  

// //4.判断文件是否存在
// var bol = fs.existsSync("test/a.txt");
// console.log(bol);

// // //5.获取文件或文件夹的详细信息
// var stat = fs.lstatSync("test/a.txt");
// console.log(stat);

// // //6.如果是文件返回true否则false
// var isfile = stat.isFile();
// console.log(isfile);


// 7. fs.close(fd, callback)