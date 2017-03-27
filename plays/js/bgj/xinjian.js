var left=document.querySelector('.wan-box>.wan-nav>.left');
var right=document.querySelector('.wan-box>.wan-nav>.right');
var bigBox=document.querySelectorAll('.w-bigbox');
// bigBox[1].classList.add('active')
left.addEventListener('touchend',function(){
	// bigBox[0].classList.add('active');
	// bigBox[1].classList.remove('active');
	this.classList.add('active');
	right.classList.remove('active');
})
right.addEventListener('touchend',function(){
	// bigBox[1].classList.add('active');
	// bigBox[0].classList.remove('active');
	this.classList.add('active');
	left.classList.remove('active');
})











