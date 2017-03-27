window.onload=function(){
// 1
var flag2=true;
$('#tongyi').click(function(){
	if(flag2){
		flag2=false;
		$(this).find('.lm4').css({'float':'left'});
		$(this).css({'background':'#ccc','box-shadow':'0.02rem  0.02rem 0.05rem #ccc,-0.02rem  -0.02rem 0.05rem #ccc'});
		$(this).find('.lm4 .zheng').css({'background':'#ccc'});
	}else{
		flag2=true;
		$(this).find('.lm4').css({'float':'right'});
		$(this).css({'background':'#ee5251','box-shadow':' 0.02rem  0.02rem 0.05rem #f07975,-0.02rem  -0.02rem 0.05rem #f07975; '});
		$(this).find('.lm4 .zheng').css({'background':'#f07975'});
	}
});
// 2
var flag3=true;
$('#tongyi8').click(function(){
	if(flag2){
		flag2=false;
		$(this).find('.lm4').css({'float':'left'});
		$(this).css({'background':'#ccc','box-shadow':'0.02rem  0.02rem 0.05rem #ccc,-0.02rem  -0.02rem 0.05rem #ccc'});
		$(this).find('.lm4 .zheng').css({'background':'#ccc'});
	}else{
		flag2=true;
		$(this).find('.lm4').css({'float':'right'});
		$(this).css({'background':'#ee5251','box-shadow':' 0.02rem  0.02rem 0.05rem #f07975,-0.02rem  -0.02rem 0.05rem #f07975; '});
		$(this).find('.lm4 .zheng').css({'background':'#f07975'});
	}
});

}