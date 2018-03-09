  $(function () {
 //字体设置
       (function setFont($html) {
            function changeFont() {
                var w=$html.outerWidth();
                var size=w/320*100;
                if (size>120){
                    size=120;
                }
                $("html").css("font-size",size+"px");
            }
            changeFont();
            $(window).on("resize",function () {
                changeFont();
            })
       })($("#wrap"))


//全局变量
       var score=0;//分数
       var isInsertSrore=0;//是否添加到分数
       var name=null; 
//页面1
       $("#page1").show();
 
        //动画部分
       setTimeout(function () {
           $(".tiaozhan").show();
       },1000);
       $(".yingqu").show();


        //页面点击部分 弹出提示框
        //开始按钮
       $(".start").on("touchend",function () {
            $(".mask").hide();
            $(".mask").eq(0).show();
            // $.ajax({
            //   type:"get",
            //   url:"addData.php",
            //   data:{type:"getName"},
            //   dataType:"json",
            //   success:function(data){
            //     alert(data);
            //      $(".name").html(data.name);
            //   }
            // })

        })
        //再来一次按钮
       $(".again").on("touchend",function () {
           $(".mask").hide();
           $(".mask").eq(0).show();

       })
       //列表的四个按钮
       $(".list>li").on("touchend",function () {
           $(".mask").hide();
           $(".mask").eq($(this).index()+2).show();
           console.log($(this).index());
           if($(this).index()==0){
               $(".mask_ranking ul").html("");
               // $.ajax({
               //     type:"get",
               //     url:"/getData",
               //     data:{},
               //     dataType:"json",
               //     success:function (data) {
               //         if (data.error==0){
               //             console.log(data);
               //             var imgsrcArr=["img/p1_first.png","img/p1_second.png","img/p1_third.png"];
               //              for (var i=0;i<data.data.length;i++){
               //                 if (i<=2){
               //                     var li=$('<li><img class="rank" src="'+imgsrcArr[i]+'" alt=""><img class="clock" src="img/shizhong.png" alt=""><span class="name">'+data.data[i].name+'</span><span class="score">'+data.data[i].score+'</span></li>');
               //                 }else {
               //                     var li = $('<li><span class="rank">'+(i+1)+'</span><img class="clock" src="img/shizhong.png" alt=""><span class="name">' + data.data[i].name + '</span><span class="score">' + data.data[i].score + '</span></li>');
               //                 }
               //                 $(".mask_ranking ul").append(li);
               //              }
               //         }
               //     }
               // })
           }
       })
       //页面三share按钮
       $(".share").on("touchend",function () {
           $(".mask").hide();
           $(".mask").eq(1).show();
       })

        //取消提示框按钮
        touch.on($(".close"),"tap",function () {
            $(".mask").hide();
        });


        //提交并开始游戏
        touch.on($(".tijiaoBtn"),"tap",function () {
            if ($(".name").val()==""||$(".phone").val()==""){
                alert("请输入完整的信息!");
                return;
            }
            $.ajax({
                type:"post",
                url:"/addData",
                data:{"name":$(".name").val(),"phone":$(".phone").val()},
                dataType:"json",
                success:function (data) {
                    console.log(data);
                    // if (data.error==0){//添加数据成功
                    //     $(".mask").hide();
                    //     $(".p").hide();
                    //     name=$(".name").val();
                    //     //展示页面二
                    //     $("#page2").show();
                    //     //开启页面二的方法
                    //     //必须要解绑,因为方法不会翻身覆盖,执行多条page2()方法,他们都会执行
                    //     $(".qian_wrap").off("touchstart");
                    //     var zIndex=0;
                    //     $(".qian_wrap").off("touchend");
                    //     page2();
                    // }
                }
            });
        });



//页面二的js

       function page2() {
           $(".score_num").html(0);
           score=0;
           var time=60;
           var t=0;//文本动画的下标
           var timer=null;
           $(".time").html(time);
           setInterval(function () {
                $txtImg=$(".txtBox img");
                $txtImg.removeClass("show");
                $txtImg.eq(t).addClass("show");
                t++;
                if (t>2){t=0};
           },3000);

           //时间倒数
           clearInterval(timer);
           timer=setInterval(function () {
               time--;
               $(".time").html(time);
               if(time<=50){
                    $.ajax({
                        type:"get",
                        url:"addData.php",
                        data:{"type":"addScore","score":score,"name":name},
                        dataType:"json",
                        success:function (data) {
                            isInsertSrore=data.error;
                           if (data.error==0){
                              $("#page2").hide();
                              //显示页面三
                              $("#page3").show();
                              //开启页面三的方法
                               page3();
                           }
                        },
                        error:function(){
                           alert("添加score失败");
                        }
                    });
                    clearInterval(timer);
               }
           },1000);



           // //数钱动画操作
           var startY=0;
           var endY=0;
           $(".qian_wrap").on("touchstart",function (e) {
              console.log("start");
               startY=e.touches[0].clientY;
               e.preventDefault();//要阻止默认事件
           })
           $(".qian_wrap").on("touchend",function (e) {
            console.log("end");
               endY=e.changedTouches[0].clientY;
            // 判断是否滑动距离是否>50
               if(startY-endY>50){
                    score++;
                    //钱滑动
                    var qianObj = $("<img class='p2_qian_new' src='img/p2_qian.jpg'>");
                    $(".qian_wrap").append(qianObj);
                    qianObj.removeTimer = setTimeout(function (){
                      qianObj.remove();
                    },1000); 
                     //分数计算
                   var scoreStr = String(score);
                   
                    for(var i=0; i<scoreStr.length; i++){
                      $(".score_num").eq($(".score_num").length-i-1).html(scoreStr[scoreStr.length-i-1]);
                    }
                      e.preventDefault();
               }
           })

       }//页面二结束
       
       
       
       
 //页面三
       function page3() {
            if (isInsertSrore==0){
                 $(".money").html(score);
            }
            $.ajax({
                type:"get",
                url:"addData.php",
                data:{"type":"get","name":name},
                dataType:"json",
                success:function (data) {
                    if (data.error==0){
                        $(".best").html(data.data[0].score);
                        //排名????
//                        $(".nowRanking").html(data.data[0].ranking);
                    }
                }
            })
       }
       

   })