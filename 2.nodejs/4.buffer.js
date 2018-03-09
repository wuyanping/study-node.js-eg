/*
* * buffer:缓存器区,暂时存放在内存里的一段数据
* 由一个八位字节一个元素组成的数组,单位用16进制(0x)表示,取值范围0-255*
* */

//创建buffer对象的方法:
//1.直接创建
// var buf=new Buffer(6);
// console.log(buf);

//2.通过数组
// var buf=new Buffer([1,10,255,0xff]);
// console.log(buf);

//3.通过字符串
// var buf=new Buffer("中文", "utf-8");
// utf-8 是默认的编码方式，此外它同样支持以下编码："ascii", "utf8", "utf16le", "ucs2", "base64" 和 "hex"。

// 写入缓冲区
// buf.write(string[, offset[, length]][, encoding]) 返回实际写入的大小
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
var buf = new Buffer(256)
len = buf.write('yoko nihao')
console.log("写入字节数：" + len) // 10

// 从缓冲区读取数据
// buf.toString([encoding][,start][,end]) 解码缓冲区数据并使用指定的编码返回字符串
// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。
console.log(buf.toString('utf8',0, len));  // yoko nihao

// 将 Buffer 转换为 JSON 对象
// buf.toJSON() 返回 JSON 对象。
var json = buf.toJSON(buf)
// console.log(json)


// 缓冲区合并
//Buffer.concat(list[,totalLength])  返回一个多个成员合并的新 Buffer 对象
//list - 用于合并的 Buffer 对象数组列表。
// totalLength - 指定合并后Buffer对象的总长度。

var buf1 = new Buffer('yoko') 
var buf2 = new Buffer('wyp')
var buf3 = Buffer.concat([buf1, buf2])
console.log(buf3.toString())  //yokowyp

// 缓冲区比较
// buf.compare(otherBuffer) 返回一个数字，表示 buf 在 otherBuffer 之前，之后或相同。
var buffer1 = new Buffer('wya');
var buffer2 = new Buffer('wyp');
var result = buffer1.compare(buffer2)
console.log('result:' + result)
if(result < 0) {
	console.log(buffer1 + '在' + buffer2 + '之前')
} else if(result == 0) {
	console.log(buffer1 + '与' + buffer2 + '相同')
} else {
	console.log(buffer1 + '在' + buffer2 + '之后')
}

// 拷贝缓冲区
// buf.copy(targetBuffer[, targetStart[, sourceStart[, sourceEnd]]])  没有返回值。
// targetBuffer - 要拷贝的 Buffer 对象。
// targetStart - 数字, 可选, 默认: 0
// sourceStart - 数字, 可选, 默认: 0
// sourceEnd - 数字, 可选, 默认: buffer.length
var copyBuf = new Buffer(3)
copyBuf.copy(buffer2)
console.log('copyBuf:' + copyBuf.toString('utf-8'))

// 缓冲区裁剪 
// buf.slice([start[, end]]) 返回一个新的缓冲区
// start - 数字, 可选, 默认: 0
// end - 数字, 可选, 默认: buffer.length

var bufferS = new Buffer('wuyanping')
var bufferSlice = bufferS.slice(2)
console.log(bufferSlice.toString())  // yanping
console.log(bufferS.toString())		 // wuyanping

// 缓冲区长度 返回 Buffer 对象所占据的内存长度。
console.log(bufferSlice.length) 

// var buf=new Buffer([0xe4,0xb8,0xad,0xe6]);
// console.log(buf.toString());

