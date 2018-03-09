/*
*  stream,主要是用在大数据处理.
*  var rs = createReadStream创建一个可读流
*  var ws = createWriteStream创建一个可写流
*  pipe该方法从可读流中拉取所有数据，并写入到所提供的目标。
*  
*  rs.on('data',fn(data))每读64K或读完触发的时间
*  rs.on("end")//输出结束时候的i
* */

var fs=require("fs");
var rs=fs.createReadStream("test/bootstrap.mp4");
// 设置编码为 utf8。
rs.setEncoding('UTF8');

var ws=fs.createWriteStream("test/4.mp4");
var i=0;
// var data = ''
rs.on("data",function (chunk) {
    i++;
    // data += chunk
    console.log(i);
});
rs.on("end",function () {
	console.log('end:' + i);
})
re.on('error', function(err) {
	console.log(err)
})
rs.pipe(ws);