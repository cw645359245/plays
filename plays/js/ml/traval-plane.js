var head=document.querySelector('.head');
var divs=head.querySelectorAll('div');
var roadConeent=document.querySelectorAll('.road-content');



for(var i=0;i<divs.length;i++){
        divs[i].index=i
    divs[i].addEventListener('touchstart',function(){
        for(var j=0;j<divs.length;j++){
            divs[j].classList.remove('active')
        }
        this.classList.add('active');
        if(this.index==1){

            roadConeent[this.index].style.transform='translateX(0)';
            roadConeent[this.index-1].style.transform='translateX(-100%)'
        }else if(this.index==0){
            roadConeent[this.index].style.transform='translateX(0)';
            roadConeent[this.index+1].style.transform='translateX(100%)'
        }
    })
}


var checkbox=document.querySelectorAll('.checkbox');
var flag=false;
for(var i=0;i<checkbox.length;i++){

    checkbox[i].addEventListener('touchstart',function(){
        if(!flag){
            flag=true
            this.classList.add('show');
            return;
        }
        flag=false
        this.classList.remove(('show'))
    })
}

//选择仓位
var position=document.querySelector('#position');
var selectPosition=document.querySelector('.select-position');
var sTitle=selectPosition.querySelector('.s-title');
var qx=sTitle.querySelector('.qx');
var qr=sTitle.querySelector('.qr');
var sContent=selectPosition.querySelector('.s-content')
var selectLis=sContent.querySelectorAll('li');
position.addEventListener('touchstart',function(){
    var place='经济舱';
    selectPosition.style.display='block';
    for(var i=0;i<selectLis.length;i++){


        selectLis[i].addEventListener('touchstart',function(){
            for(var j=0;j<selectLis.length;j++){
                selectLis[j].classList.remove('active')
            }

            this.classList.add('active')
            place=this.innerHTML
        })

    }
    qr.addEventListener('touchstart',function(e){
        position.value=place;
        selectPosition.style.display='none';
        e.stopPropagation()
    })
    qx.addEventListener('touchstart',function(e){
        e.stopPropagation()
        position.value='经济舱';
        selectPosition.style.display='none';
    })

})

