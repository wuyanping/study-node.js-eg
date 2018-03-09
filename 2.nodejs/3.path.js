/*
 * path路径处理模块
 * path.normalize(url)规范化字符串路径
 * path.dirname(url)返回路径中文件夹的名称
 * path.basename(url,'后缀')返回路径中的最后哦一部分
 * path.join(url1,url2,....)
 *
 * __dirname当前文件目录的绝对路径
 * __filename当前文件名
 *
 * resolve:把参数解析为一个绝对路径
 * 1.是以应用程序的根目录作为起点
 * 2.普通字符串代表当前目录的下一级目录
 * 3.如果没有下一个参数,返回当前目录
 * 4./代表盘符的根目录
 * */
var path=require("path");
console.log(__filename);//获取当前文件的结对路径
//获取当前文件的目录
var url=path.dirname(__filename);
console.log(url);
console.log(__dirname);
//获取当前文件名
var fileName=path.basename(__filename,".js");
var fileName3=path.basename(__dirname,".js");
console.log(fileName);
console.log(fileName3);
var url="nodejs/test/css/../js/../../img/";
url=path.normalize(url);//规范化地址
console.log(url);
//合拼路径
var url2=path.join(__dirname,"a","..","css");
console.log(url2);

//拼接目录,默认在当前目下拼接
var url3=path.resolve("test","css");
var url4=path.resolve(__dirname,"test");
console.log(url3);
console.log(url4);