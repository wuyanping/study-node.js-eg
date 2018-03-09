/**
 * Created by lan on 17/1/11.
 */
var experss=require("experss");
var app=experss();

//设置服务器可访问的静态文件路径
app.set(experss.static("./www"));
//获取数据接口
app.get("/score",function (req,res){
    console.log(req.query);
});
//监听端口
app.listen(8080,function () {
    console.log("开始成功:http://localhost:8080");
})
