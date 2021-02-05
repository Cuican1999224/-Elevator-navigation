$(function(){
    //节流阀 互斥锁
    var flag = true;
    var boxTop = $('.recommend').offset().top;
    obj()
    function obj(){
        if($(document).scrollTop() >= boxTop){
            $('.fixedtool').fadeIn();
        }else{
            $('.fixedtool').fadeOut()
        }
    }
    $(window).scroll(function(){
        obj();
        //3.页面滚动到某个内容区域，左侧电梯导航小li相应添加和删除current类名
      if(flag){
        $('.floor .w').each(function(i,ele){
            if($(document).scrollTop() >= $(ele).offset().top){
                $('.fixedtool li').eq(i).addClass('current').siblings().removeClass();
            }
        })
      }
        });
        //2.点击电梯导航页面可以滚动到相应内容区域
        $('.fixedtool li').click(function(){
            flag = false;
            console.log($(this).index());
            // 当我们每次点击小li 就需要计算出页面要去往的位置
            //选出对应索引号的内容区的盒子 计算它的 .offset().top
            var current = $('.floor .w').eq($(this).index()).offset().top;
            //页面动画滚动效果
            $('body,html').stop().animate({
                scrollTop:current
            },function(){
                flag = true;
            });
            // 点击当前的小li  添加current 类名，兄弟移除
            $(this).addClass('current').siblings().removeClass()
            obj();
        })
});