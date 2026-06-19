function display(){
  let datetime=new Date
  let hours=datetime.getHours()
  let minutes=datetime.getMinutes()
  let sec=datetime.getSeconds()

  document.getElementById('hours').innerHTML=hours
  document.getElementById('mins').innerHTML=zero(minutes)
  document.getElementById('seconds').innerHTML=zero(sec)

  if (hours>12){
    hours=hours-12
    document.getElementById('ampm').innerHTML='PM'  
  }
  }

function zero(num){
  return num<10 ? '0'+num : num;
}

setInterval(()=>display(),500)

