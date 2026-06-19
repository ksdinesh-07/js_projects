const btn=document.getElementById("btn")
const color=document.getElementById("color")
const wrap=document.getElementById("wrap")
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']

btn.addEventListener('click',change)

function change(){
  let hex_color='#';
  for (let i=1;i<=6;i++){
    hex_color+=randhexvalue()
  }
  wrap.style.background=hex_color;
  color.innerHTML=hex_color;
}

function randhexvalue(){
    let rand_val=Math.floor(Math.random()*16)
    return hex[rand_val]
}

