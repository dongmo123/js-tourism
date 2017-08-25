$(function(){
    var n=RandomNum(0,9);
    $('.pic img:eq(0)').attr('name',n);
    //将移动方式函数组成数组,也可以用for循环自加str数组
    var str1={0:'chushi_0();',1:'chushi_1();',2:'chushi_2();',3:'chushi_3();',4:'chushi_4();',5:'chushi_5();',6:'chushi_6();',7:'chushi_7();',8:'chushi_8();',9:'chushi_9();'};
    var str2={0:'change_0();',1:'change_1();',2:'change_2();',3:'change_3();',4:'change_4();',5:'change_5();',6:'change_6();',7:'change_7();',8:'change_8();',9:'change_9();'};
    //放大1.2倍图片,此函数当图片变形时调用
    function fangda(){
        $('.pic img').first().css({
            width:'2016px',
            height:'603px'
        });
    }
    var run=null;//轮播定时器
    var auto=null;//图片移动定时器
    play();//开始轮播
    eval(str1[n]);
    eval(str2[n]);//让第一个图片先随机移动
    //获取随机数
    function RandomNum(Min,Max){
        var Range = Max - Min;
        var Rand = Math.random();
        var num = Min + Math.round(Rand * Range);
        return num;
    }
    //背景图片移动方式
    var x=1,y=1;
    //向左下
    function chushi_0(){
        $('.pic img:eq(0)').css({
            left:0,
            top:-100
        });
    }
    function change_0(){
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        clearInterval(auto);
        auto=setInterval(function(){
            Left=Left-0.2;
            Top=Top+0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //向左上
    function chushi_1(){
        $('.pic img:eq(0)').css({
            left:0,
            top:0
        });
    }
    function change_1(){
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        clearInterval(auto);
        auto=setInterval(function(){
            Left=Left-0.2;
            Top=Top-0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //竖直向下
    function chushi_2(){
        $('.pic img:eq(0)').css({
            left:0,
            top:-100
        });
    }
    function change_2(){
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        clearInterval(auto);
        auto=setInterval(function(){
            Left=0;
            Top=Top+0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //水平向左
    function chushi_3(){
        $('.pic img:eq(0)').css({
            left:0,
            top:0
        });
    }
    function change_3(){
        clearInterval(auto);
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        auto=setInterval(function(){
            Left=Left-0.2;
            Top=0;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //水平向右
    function chushi_4(){
        $('.pic img:eq(0)').css({
            left:-200,
            top:0
        });
    }
    function change_4(){
        clearInterval(auto);
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        auto=setInterval(function(){
            Left=Left+0.2;
            Top=0;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //竖直向上
    function chushi_5(){
        $('.pic img:eq(0)').css({
            left:0,
            top:0
        });
    }
    function change_5(){
        clearInterval(auto);
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        auto=setInterval(function(){
            Left=0;
            Top=Top-0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //右上
    function chushi_6(){
        $('.pic img:eq(0)').css({
            left:-200,
            top:0
        });
    }
    function change_6(){
        clearInterval(auto);
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        auto=setInterval(function(){
            Left=Left+0.2;
            Top=Top-0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //右下
    function chushi_7(){
        $('.pic img:eq(0)').css({
            left:-200,
            top:-100
        });
    }
    function change_7(){
        clearInterval(auto);
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        auto=setInterval(function(){
            Left=Left+0.2;
            Top=Top+0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top
            });
        },5);
    }
    //放大
    function chushi_8(){
        $('.pic img:eq(0)').css({
            left:0,
            top:0,
            width:1680,
            height:503
        });
    }
    function change_8(){
        clearInterval(auto);
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        var Width=$('.pic img:eq(0)').width();
        var Height=$('.pic img:eq(0)').height();
        auto=setInterval(function(){
            Left=Left-0.2;
            Top=Top-0.1;
            Width=Width+0.2;
            Height=Height+0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top,
                width:Width,
                height:Height
            });
        },5);
    }
    //缩小
    function chushi_9(){
        $('.pic img:eq(0)').css({
            left:0,
            top:0,
        });
    }
    function change_9(){
        clearInterval(auto);
        var Left=$('.pic img:eq(0)').position().left;
        var Top=$('.pic img:eq(0)').position().top;
        var Width=$('.pic img:eq(0)').width();
        var Height=$('.pic img:eq(0)').height();
        auto=setInterval(function(){
            Left=Left-0.1;
            Width=Width-0.2;
            Height=Height-0.1;
            $('.pic img:eq(0)').css({
                left:Left,
                top:Top,
                width:Width,
                height:Height
            });
        },5);
    }
    var i=0;
    //轮播函数
    function play(){
        fangda();
        run=setInterval(function(){
            i++;
            n=RandomNum(0,9);
            changepic(n);
        },5000)
    }
    //切换图片函数
    function changepic(n){
        $('.pic img:eq(1)').stop(true).remove();
        if(i==4){
            i=0;
        }
        $('.pic img').first().clone().appendTo('.pic');
        $('.pic img:eq(1)').stop().animate({
            opacity:0,
            display:'none'
        },600,function(){
            $('.pic img:eq(1)').stop(true).hide().remove();
        });
        clearInterval(auto);
        $('.pic img:eq(0)').stop(true).attr({
            src:'images/slide-'+(i+1)+'.jpg',
            name:n
        });
        fangda();
        eval(str1[n]);
        eval(str2[n]);
    }
    $('.next').click(function(){
        $('.pic img:eq(1)').stop(true).remove();
        clearInterval(auto);
        n=RandomNum(0,9);
        if(i==4){
            i=0;
            changepic(n);
        }else{
            i++;
            changepic(n);
        }
    });
    //鼠标自动停止/播放
    $('.back').hover(function(){
        clearInterval(auto);
    },function(){
        var j=$('.pic img:eq(0)').attr('name');
        eval(str2[j]);
    });
    $('.prev').click(function(){
        $('.pic img:eq(1)').stop(true).remove();
        clearInterval(auto);
        n=RandomNum(0,9);
        if(i==0){
            i=3;
            changepic(n);
        }else{
            i--;
            changepic(n);
        }
    });
    $('.nav1').mouseover(function(){
        return false;
    });
    $('.logotit').mouseover(function(){
        return false;
    });
    $('.logoinf').mouseover(function(){
        return false;
    });
    $('.prev').mouseover(function(){
        return false;
    });
    $('.next').mouseover(function(){
        return false;
    });
});