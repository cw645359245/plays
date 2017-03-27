var desiginWidth=750;

function resize(){
	var nowWidth=document.documentElement.clientWidth;
	var bili=nowWidth/desiginWidth * 100;
	document.documentElement.style.fontSize=bili+'px';
}
resize();
window.onresize=resize;
