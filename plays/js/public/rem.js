var designWidth=750;
function resize() {
    var nowWidth=document.documentElement.clientWidth;
    var sWidth=nowWidth/designWidth*100;
    document.documentElement.style.fontSize=sWidth+"px";
}
resize();
window.onresize=resize;

