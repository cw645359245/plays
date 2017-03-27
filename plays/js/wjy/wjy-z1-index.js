
$('window').resize(fnn123);
function fnn123(){
	var h1=parseInt($('.v3').css('height'));
	$('.v2').css({'height':h1+'px'});
}
setInterval(fnn123,10);
fnn123();

