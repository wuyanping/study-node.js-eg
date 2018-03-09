var fs = require('fs')
var zlib = require('zlib') 

// 压缩文件
// fs.createReadStream('test/yoko.txt')
// 	.pipe(zlib.createGzip())
// 	.pipe(fs.createWriteStream('test/yoko.txt.gz'))

// 解压文件
fs.createReadStream('test/yoko.txt.gz')
	.pipe(zlib.createGunzip())
	.pipe(fs.createWriteStream('test/yokoGun.txt'))

console.log("文件压缩完成。")