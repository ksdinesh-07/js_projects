function convert(){
  let inp=Number(document.getElementById("input").value);
  let res=inp*2.20462;
  let res_div=document.getElementById("result");
  res_div.innerHTML=res.toFixed(2)+ " Pounds";
}