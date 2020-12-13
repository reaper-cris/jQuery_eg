$(document).ready(function(){
    var x=10;
    var y=20;
    $("a.tooltip").mouseover(function(e){
        //防止重复显示title属性带来问题
        this.myTitle=this.title;
        this.title="";
        //将title属性通过自定义的方式显示
        var imgTitle=this.myTitle?"<br/>"+ this.myTitle:"";
        //创建显示大图的div
        var tooltip="<div id='tooltip'><img src='"+this.href+"' alt='产品预览图'/>"+imgTitle+"</div>";
        $("body").append(tooltip);
        //给创建的div一个初始的位置信息
        $("#tooltip").css({"top": (e.pageY+y)+"px","left": (e.pageX+x)+"px"}).show("fast");
    }).mouseout(function(){
        //鼠标移出时，将元素的title标签恢复
        this.title=this.myTitle;
        //移除上述代码创建的div
        $("#tooltip").remove();
    }).mousemove(function(e){
        //使创建的大图div随着鼠标移动
        $("#tooltip").css({"top":(e.pageY+y)+"px","left":(e.pageX+x)+"px"});
    });
});