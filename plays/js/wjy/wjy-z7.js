window.onload=function(){
// btn1
var str1=['使用方式：人脸识别','使用方式：指纹识别']
var flag1=true;
$('.wjy-xobtn2').click(function(){
	if(flag1){
		flag1=false;
		$('.wjy-xxxooo1')[0].innerHTML=str1[1];
	}else{
		flag1=true;
		$('.wjy-xxxooo1')[0].innerHTML=str1[0];
	}
});
// btn2
var str2=['绑定状态：已绑定','绑定状态：未绑定']
var flag2=true;
$('.wjy-xobtn3').click(function(){
	if(flag2){
		flag2=false;
		$('.wjy-xxxooo2')[0].innerHTML=str2[1];
	}else{
		flag2=true;
		$('.wjy-xxxooo2')[0].innerHTML=str2[0];
	}
});

// swipert
var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        initialSlide :3
    });

}