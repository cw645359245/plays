// var ch=document.documentElement.clientHeight;
// webCe.style.height=ch+'px';
var webCe=document.querySelector('.web-ce');
var webCes=document.querySelector('.web-ces');
var web=document.querySelector('.web');
var webSy=document.querySelector('.web-sy');
var webFooter=document.querySelector('.web-footer');
function resize(){
	var ch=document.documentElement.clientHeight;
	webCe.style.height=ch+'px';
	webCes.style.height=ch+'px';
}
resize();
window.addEventListener('resize',resize);
var img=document.querySelector('.web-sy>.sy-header>.sy-head>.head-he>img');
console.log(img)
// console.log(webCe.hasClass('active'))
// var flog=true;
// img.onclick=function(){
// 	webCe.classList.remove('active');
// 	webCes.style.display='block';
// 	web.classList.add('active');
// 	webSy.classList.add('active');
// 	webFooter.classList.add('active');
// }
// webCes.onclick=function(){
// 	webCe.classList.add('active');
// 	web.classList.remove('active');
// 	webSy.classList.remove('active');
// 	webFooter.classList.remove('active');
// 	webCes.style.display='none';
// }




