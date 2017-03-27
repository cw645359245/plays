var yy2=document.querySelectorAll('.yy2');
window.setInterval(fn,1500);
	function fn(){
		for(var i=0;i<yy2.length;i++){
			var h=fn1();
			yy2[i].style.height=h+'px';
			var a=0;

			if(h<=100){
				a=Math.floor(Math.random()*240);
			}else if(h<=200){
				a=Math.floor(Math.random()*140);
			}else if(h<=300){
				a=Math.floor(Math.random()*40);
			}
			yy2[i].style.transition='bottom 1s';
			yy2[i].style.bottom=h+'px';
			yy2[i].style.transition='bottom 0.5s';
			yy2[i].style.bottom=h+a+'px';
		}
		window.setTimeout(function(){
			fn2(h,a);
		},1000);
		
	}
	function fn1(){
		var h=Math.floor(Math.random()*341);
		return h;
	}
	function fn2(h,a){
		for(var i=0;i<yy2.length;i++){
			yy2[i].style.height=0+'px';
			yy2[i].style.transition='bottom 0.5s';
			yy2[i].style.bottom=h+'px';
			yy2[i].style.transition='bottom 1s';
			yy2[i].style.bottom=0+'px';
		}
	}