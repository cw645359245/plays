window.onload=function(){
var flags=true;
$('.yuanquan').click(function(){
	if(flags){
		flags=false;
		$(this).find('.yuandian').css({'display':'none'});
	}else{
		flags=true;
		$(this).find('.yuandian').css({'display':'block'});
	}
});

// 2
var newnum=60;
var t1;
$('.btnshou').click(function(){
	$(this).css({'background':'#ccc'});
	var self=this;
		self.innerHTML='60';
	t1=window.setInterval(function(){
		newnum--;
		if(newnum<=0){
			self.innerHTML='重发验证码';
			$(self).css({'background':'#2bd2fc'});
			window.clearInterval(t1);
		}
		self.innerHTML=newnum;
	},1000);
});

// 3
$('.btn123').click(function(){
	// 接口
	location.href='wjy-z5.html';
})
}