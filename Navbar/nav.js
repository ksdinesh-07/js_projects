let menu=document.querySelector('.menu')
let menulist=document.querySelector('nav ul')
menu.addEventListener('click',()=>{
  menulist.classList.toggle('showmenu')
})