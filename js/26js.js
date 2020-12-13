//特别说明：在jQuery中即使你用的中文标点，编译器大概率也不会提示你。
//所以，在jQuery中写代码时，一定一定要仔细区分中英文符号，减少不必要的麻烦

$(function(){
	//获取索引大于五，并且除去最后一个的所有li元素
	var $category=$("ul li:gt(5):not(:last)");
	//将$category对象隐藏
	$category.hide();
	//取得class为showmore的div中的子元素a
	var $toggleBtn=$("div.showmore >a");
	//为上面的元素添加一个点击事件
	$toggleBtn.click(function(){
		//判断隐藏状态
		if($category.is(":visible")){
			//隐藏
			$category.hide();
		//	将class为category中的span元素更改背景和文本
		$(this).find("span")
			.css("background","url(img/down.gif) no-repeat 0 0" )
			.text("显示全部品牌");
		//找出需要高亮显示的li元素将其class去掉
		$("ul li").filter(":contains('佳能'),:contains('康尼'),:contains('奥林巴斯')")
			.removeClass("promoted");
//		return false;
		}else{
			//显示
			$category.show();
			$(this).find("span")
			.css("background","url(img/up.gif) no-repeat 0 0" )
			.text("精简显示品牌");
			//符合条件的li元素添加class
			$("ul li").filter(":contains('佳能'),:contains('康尼'),:contains('奥林巴斯')")
			.addClass("promoted");
		}
		//取消超链接的默认行为
		return false;
		// $("ul li").filter(":contains('佳能')").addClass('promoted');
	});
	
});