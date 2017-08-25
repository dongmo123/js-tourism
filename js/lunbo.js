$(function(){
    autoplay();
    var i=0;
    var run=null;
    function moveleft(n){
        $('.smallimg').animate({
            left:-160*n
        },300);
    }
    var i=0;
    $('.smallimg li').eq(0).css('opacity','0.4');
    function autoplay(){
        run=setInterval(function(){
            i++;
            runright();
        },8000);
    }
    function runright(){
        $('.lunbo1 div:eq(1)').remove();
        if(i==10){
                i=0;
        }
        $('.smallimg li').eq(i).css({
            opacity:0.4
        }).siblings().css('opacity','1');
        if(i<6){
            moveleft(i);
        }
        $('.lunbo1 div').clone().appendTo('.lunbo1');
        $('.lunbo1 div:eq(0)').stop().css({
            'background-image':'url("images/gallery-'+(i+1)+'-big.jpg")'
        });
        $('.lunbo1 div:eq(1)').css('z-index','20').stop(true).fadeOut(600,function(){
            $(this).remove();
        });
    }
    $('.smallimg li').click(function(){
        $('.lunbo1 div:eq(1)').remove();
        i=$(this).index();
        runright();
    });
    $('.preview').click(function(){
        var aa=parseInt($('.smallimg').position().left);
        if(aa<=-480){
            $('.smallimg').animate({
                left:aa+480
            },300);
        }
        if(aa==-320||aa==-160||aa==0){
            $('.smallimg').animate({
                left:0
            },300);
        }
    });
    $('.nextimg').click(function(){
        var aa=parseInt($('.smallimg').position().left);
        if(aa>=-320){
            $('.smallimg').animate({
                left:aa-480
            },300);
        }
        console.log(aa);
        if(aa==-480||aa==-640||aa==-800){
            $('.smallimg').animate({
                left:-800
            },300);
        }
    });
});