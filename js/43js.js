$(function(){
    var page=1;
    var i=4;//每一版面放置的视频数
    //设置next按钮
    $("span.next").click(function(){
        var $parent=$(this).parents("div.v_show");
        var $v_show=$parent.find("div.v_content_list");
        var $v_content= $parent.find("div.v_content");
        var v_width=$v_content.width();
        var len=$v_show.find("li").length;
        var page_count=Math.ceil(len/i);
        // alert(page_count);
        if(!$v_show.is(":animated")) {
            if (page == page_count) {
                $v_show.animate({left: "0px"}, "slow");
                page = 1;
            } else {
                $v_show.animate({left: '-=' + v_width}, "slow");
                page++;
            }
            $parent.find("span").eq(page-1).addClass("current").siblings().removeClass("current");
        }
    });
    // $("span.next").click(function(){    //绑定click事件
    //     var $parent = $(this).parents("div.v_show");//根据当前点击元素获取到父元素
    //     var $v_show = $parent.find("div.v_content_list"); //寻找到“视频内容展示区域”
    //     var $v_content = $parent.find("div.v_content"); //寻找到“视频内容展示区域”外围的DIV元素
    //     var v_width = $v_content.width() ;
    //     var len = $v_show.find("li").length;
    //     var page_count = Math.ceil(len / i) ;   //只要不是整数，就往大的方向取最小的整数
    //     if( !$v_show.is(":animated") ){    //判断“视频内容展示区域”是否正在处于动画
    //         if( page == page_count ){  //已经到最后一个版面了,如果再向后，必须跳转到第一个版面。
    //             $v_show.animate({ left : '0px'}, "slow"); //通过改变left值，跳转到第一个版面
    //             page = 1;
    //         }else{
    //             $v_show.animate({ left : '-='+v_width }, "slow");  //通过改变left值，达到每次换一个版面
    //             page++;
    //         }
    //         $parent.find("span").eq((page-1)).addClass("current").siblings().removeClass("current");
    //     }
    // });
    //设置prev按钮
    $("span.prev").click(function(){
        var $parent=$(this).parents("div.v_show");
        var $v_show=$parent.find("div.v_content_list");
        var $v_content= $parent.find("div.v_content");
        var v_width=$v_content.width();
        var len=$v_show.find("li").length;
        var page_count=Math.ceil(len/i);
        if(!$v_show.is(":animated")){
            if(page==1){
                $v_show.animate({left:"-="+v_width*(page_count-1)},"slow");
                page=page_count;
            }else{
                $v_show.animate({left:"+="+v_width},"slow");
                page--;
            }
        $("span").eq(page-1).addClass("current").siblings().removeClass("current");
        }



    });

});