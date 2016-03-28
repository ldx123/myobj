$(function() {
	//banner图
	$('.banner ol li').click(function(event) {
		//1.角标点击
		$(this).addClass('current').siblings().removeClass('current');
		//通过角标中的编号来让ul动起来
		var index = $(this).index();
		num = index;
		/*
		0     0
		1     100%
		2     200%
		*/
		$('.banner ul').animate({left:-index*100+'%'}, 500);
	});
	//2.自动播放
	var num = 0;
	var timer = null;
	//自动（向右）播放
	function autoPlay(){
		num++;
		if(num>3){
			num=0;
		}
		$('.banner ol li').eq(num).addClass('current').siblings().removeClass('current');
		$('.banner ul').animate({left:-num*100+'%'}, 500);
	}
	timer = setInterval(autoPlay,3000);
	$('.banner').mouseover(function(event) {
		clearInterval(timer);
	}).mouseout(function(event) {
		clearInterval(timer);
		timer = setInterval(autoPlay,3000);
	});
	//侧边栏
	var flag=2;		  //如果当前的状态为1，表示处于关闭
		              //如果当前的状态为2，表示处于打开
	$('.aside').click(function(event) {
		if(flag==2){
			$(this).animate({right:-145}, 500);
			flag=1;
		}
	});
	//小区名称
	$('.mingcheng dd input').focus(function(event) {
		if($('.mingcheng dd input').val='请输入小区名称'){
			$('.mingcheng dd input').val('');
		}	
		$('.mingcheng dd input').css('color','#333');
	}).blur(function(event) {
		$('.mingcheng dd input').val('请输入小区名称');
		$('.mingcheng dd input').css('color','#ccc');
	});
	//建筑面积
	$('.mianji dd input').focus(function(event) {
		if ($('.mianji dd input').val=('建筑面积')) {
			$('.mianji dd input').val('');
		};
		$('.mianji dd input').css('color','#333');
	}).blur(function(event) {
		$('.mianji dd input').val('建筑面积');
		$('.mianji dd input').css('color','#ccc');
	});
	//您的称呼
	$('.chenghu dd input').focus(function(event) {
		if ($('.chenghu dd input').val=('您的称呼')) {
			$('.chenghu dd input').val('');
		};
		$('.chenghu dd input').css('color','#333');
	}).blur(function(event) {
		$('.chenghu dd input').val('您的称呼');
		$('.chenghu dd input').css('color','#ccc');
	});
	//接受报价
	$('.price dd input').focus(function(event) {
		if ($('.price dd input').val=('请输入手机号码')) {
			$('.price dd input').val('');
		};
		$('.price dd input').css('color','#333');
	}).blur(function(event) {
		$('.price dd input').val('请输入手机号码');
		$('.price dd input').css('color','#ccc');
	});
	//效果图的变化
	$('.xiaoguotu li').hover(function(){
		$(this).siblings().stop().fadeTo(500,0.5);
	},function(){
		$('.xiaoguotu li').stop().fadeTo(500,1);
	});
});