// 1、less的编译（gulp-less）
// 2、自动添加css前缀（gulp-autoprefixer）
// 3、压缩css（gulp-minify-css）
// 4、压缩js代码（gulp-uglify）
// 5、开启服务器('gulp-connect');
// 6、合并JS ('gulp-concat');
// 7、打开浏览器 ("gulp-open");
var gulp=require("gulp");
var less=require("gulp-less");//less的编译
var autoprefixer=require("gulp-autoprefixer");//自动添加css前缀
var minify=require("gulp-minify-css");//压缩css
var uglify=require("gulp-uglify");//压缩js代码
var connect=require("gulp-connect");//开启服务器
var concat=require("gulp-concat");//合并js
var open=require("gulp-open");//打开浏览器
var imagemin=require("gulp-imagemin");

// pipe该方法从可读流中拉取所有数据，并写入到所提供的目标。
// 该函数定义任务所要执行的一些操作。通常来说，它会是这种形式：gulp.src().pipe(someplugin())。

//把html文件传到www目录下
gulp.task("html",function () {
    gulp.src("app/*.html")
        .pipe(gulp.dest("www"))
        .pipe(connect.reload())//刷新页面
});

//压缩图片
gulp.task("imagemin",function () {
    gulp.src("app/img/*")
        .pipe(imagemin())
        .pipe(gulp.dest("www/img"))
});

//把less文件编译为正常css文件到www目录下
gulp.task("style",function () {
    gulp.src(["app/css/*.less","app/css/*.css"])
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(minify())
        .pipe(gulp.dest("www/css"))
        .pipe(connect.reload())
});

//js压缩和合并
gulp.task("js",function () {
    gulp.src(["app/js/jquery-2.2.3.min.js","app/js/*.js"])
        .pipe(concat("main.js"))//合并js
        .pipe(uglify(""))//压缩js方法
        .pipe(gulp.dest("www/js"))
        .pipe(connect.reload())
});

//connect 开启服务器
gulp.task("connect",function () {
    connect.server({
        root:"www",  //监听文件夹
        livereload:true, //实时刷新页面
        port:6000  //打开浏览器
    })
});
//打开浏览器
gulp.task("open",function () {
    gulp.src("")
    .pipe(open({uri:"http://localhost:6000/"}))
});


//watch监听
gulp.task("watch",function () {//需要在文件变动后执行的一个或者多个通过 gulp.task() 创建的 task 的名字，
    gulp.watch(["app/css/*.less","app/css/*.css"],["style"]);
    gulp.watch(["app/*.html"],["html"]);
    gulp.watch(["app/js/*.js"],["js"]);
});

//默认任务  运行gulp
gulp.task("default",["open","connect","watch","html","js","style","imagemin"]);