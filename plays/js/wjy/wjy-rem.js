
// rem函数
window.onresize=rr;
function rr(){
	var docw=document.documentElement.clientWidth;
	var num=docw/750*100;
	document.documentElement.style.fontSize=num+'px';
}
rr();