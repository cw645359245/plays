 var swiper = new Swiper('.swiper-containerd', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        autoplay: 3000,//可选选项，自动滑动
    	loop : true,
    });
var swiper = new Swiper('.guidebox', {
	loop : true,
    pagination: '.swiper-pagination',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
        freeMode: true

});
    var swiperslide=document.querySelectorAll('.swiper-slide');
    for(var i=0;i<swiperslide.length;i++){
        swiperslide[i].classList.remove('swiper-slide-active');
    }
    swiperslide[1].classList.add('swiper-slide-active');