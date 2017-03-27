var zan=document.querySelector(".wjz-zuozhe .name .zan");
var zanspan=document.querySelector(".wjz-zuozhe .name .zan span");
var shuliang=0;
zan.onclick=function(){
    shuliang++;
    zanspan.innerHTML=shuliang;
};