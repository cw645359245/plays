$(window).resize(function(){
  rr1();
});
function rr1(){
	var b=parseInt($('.box').find('img').css('height'));
	$('.box').css({'height':b+'px'});
}
rr1();