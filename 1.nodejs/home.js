
// 通过module对象可以访问到当前模块的一些相关信息
//exports对象是当前模块的导出对象，用于导出模块公有方法和属性
// var exports=module.exports;
// module.exports.show=show;//相对于return
// 这里相当于一个闭包
function show(){
    console.log("模块加载成功");
}
function sum(a,b) {
    console.log(a+b);
}
// module.exports={
//     show:show,
//     sum:sum,
//     abc:function () {
//         console.log("abc");
//     }
// }