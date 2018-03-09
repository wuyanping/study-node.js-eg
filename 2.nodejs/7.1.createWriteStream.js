var fs = require('fs')
var data = "yoko 你好呀！"

// 创建一个可以写入的流，写入到文件 test/yoko.txt 中
var ws = fs.createWriteStream('test/yoko.txt')

// 使用 utf8 编码写入数据
ws.write(data, 'UTF8')

// 标记文件末尾
ws.end()

// 处理流事件 --> data, end, and error
ws.on('finish', function() {
	console.log('写入完成')
})

ws.on('error', function(err) {
	console.log(err.stack)
})

console.log("程序执行完毕")