const container = document.querySelector('.container')
const button=document.querySelectorAll('.btn')
const imglst=["img1","img2","img3","img4","img5","img6"];
let idx=0


button.forEach((btn)=>{
  btn.addEventListener('click',()=>{
    if(btn.classList.contains('btn-left')){
      idx--
      if (idx<0){
        idx=imglst.length-1
      }
      container.style.background=`url('${imglst[idx]}.jpeg') center/cover fixed no-repeat`
    
    }
    else{
      idx++
      if (idx===imglst.length){
        idx=0;
      }
    }
      container.style.background=`url('${imglst[idx]}.jpeg') center/cover fixed no-repeat`
    
  });
});
  