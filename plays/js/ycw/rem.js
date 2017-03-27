





	
   


   function resize(){
   	var designWidth=750;
   var widths=document.documentElement.clientWidth;
   	document.documentElement.style.fontSize=widths/designWidth*100+"px";
   }

 	resize();
   window.onresize=resize;

