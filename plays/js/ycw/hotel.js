

// 选项卡

var hlists=document.querySelector(".hotel-list");
var as=document.querySelectorAll(".hotel-list .as");
var litems=document.querySelectorAll(".lists-items");
var mask=document.querySelector(".mask");
var widths=mask.offsetWidth;
var imgs=document.querySelectorAll(".hotel-list .as img")
console.dir(imgs)
for(var i=0;i<as.length;i++){ 
	as[i].index=i;
	as[i].addEventListener("touchstart",function(){
		for(var j=0;j<litems.length;j++){
			litems[j].style.height=0+"rem";
			litems[j].style.opacity=0;
			mask.style.left=0;
			imgs[j].style.transform="rotate(0deg)";
			imgs[j].style.transition="all 0.3s"

		
		}
		litems[this.index].style.transition="height 0.05s "
		imgs[this.index].style.transform="rotate(180deg)"
		litems[this.index].style.opacity=1;
		litems[this.index].style.height=5+"rem";
	})

}
	mask.addEventListener("touchend",function(){
				for (var k=0;k<litems.length;k++){
				 	litems[k].style.height=0;
				 	 mask.style.left=-widths+"px";
				 	 imgs[k].style.transform="rotate(0deg)";
				 		
				 }
			
			})
// 添加筛选
 for (var k=0;k<litems.length;k++){
 	addclass(litems[k]);
 		litems[k].index=k;
 	litems[k].addEventListener("touchend",function(){
 		  for(var i=0;i<imgs.length;i++){
 			 imgs[i].style.transform="rotate(0deg)";

 		  }
 		  
 	})

 }
function addclass(litems){
	var lis=document.querySelectorAll("li",litems)
	var mask=document.querySelector(".mask");
	var widths=mask.offsetWidth;
	var span=document.querySelectorAll(".zi",lis)
    var active=document.querySelectorAll(".active");
     for(var i=0;i<lis.length;i++){
  	  lis[i].index=i;
     lis[i].addEventListener("touchend",function(){
  	  for(var j=0;j<active.length;j++){
  	  	  active[j].className="active";
  	  	  litems.style.height=0;
  	  	  mask.style.left=-widths+"px";
  	  	  litems.style.opacity=1;
      //        imgs[i].index=i;
  	  	// for(var m=0;m<imgs.length;m++){
     	// 	 imgs[m].style.transform="rotate(0deg)";
     	// }
     	//   imgs[this.index].style.transform="rotate(180deg)"
  	  	   // console.log(-widths)
  	  	 
  	  	   }
  	  	    
  	  	   active[this.index].className="hott";
  
  	  })
  }

}







