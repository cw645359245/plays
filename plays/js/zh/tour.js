var tours=document.querySelector(".tours");
var tabs=document.querySelector(".tours .tabs");
var exit=document.querySelectorAll(".tours .exit");
var local=document.querySelector(".tours .local");
var part=document.querySelector(".part",local);
var place=document.querySelectorAll(".place a",part);
console.log(part);

for(var i=0;i<exit.length;i++){
	exit[i].index=i;
	exit[i].addEventListener("touchstart",function(){
		for(var j=0;j<exit.length;j++){
			exit[j].classList.remove("hot");
		}
		this.classList.add("hot");
	})
}

for(var i=0;i<place.length;i++){
	place[i].index=i;
	place[i].addEventListener("touchstart",function(){
		for(var j=0;j<place.length;j++){
			place[j].classList.remove("hot");
		}
		this.classList.add("hot");
	})
}
