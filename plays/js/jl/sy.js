

var shanPing=document.querySelector('.shanping');
function resize(){
	var ch=document.documentElement.clientHeight;

  shanPing.style.height=ch+'px';
}
resize();
window.addEventListener('resize',resize);

// 下拉

// 闪频 
var mySwipers = new Swiper ('.sp', {
 speed: 300, //设置滑动速度
  autoplay: 3000,//可选选项，自动滑动
  pagination : '.swiper-pagination',
  threshold : 100,
  observer:true,
  observeParents:true,
  autoplayDisableOnInteraction: false,
  ininialSlide: 0, //起始图片切换的索引位置（起始从0开始，默认为0）
});
var dians=document.querySelector('.dians');
var t3=null;
var bian=true;
var t2=window.setInterval(function(){
  var b1=document.querySelector('.swiper-slide-active');
  var b2=document.querySelector('.sp-pb');
  if(b1===b2){
    dians.style.display='none';
    if(bian==true){
        bian=false;
       t3=window.setTimeout(function(){
             //循环，触摸跳的地址
              shanPing.style.display='none';
        },2200);
    }
  }else{
      dians.style.display='block';
      window.clearInterval(t3);
      bian=true;
  }
},20);
var tzhehes=document.querySelector('.tzs');
var tzhehe1s=document.querySelector('.tzs a');
tzhehes.addEventListener('touchstart',function(){
  window.clearInterval(t2);
    window.clearInterval(t3);
    // 点击跳的地址
    shanPing.style.display='none';
})

if(sessionStorage.getItem('lei')){
	// shanPing.style.display='none';
}else{
	sessionStorage.setItem('lei','ss')

}




