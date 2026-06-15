let resdiv=document.createElement('div')
resdiv.id="result";
document.getElementById('wrapper').appendChild(resdiv)


const button=document.querySelector('button');

button.addEventListener('click',displaystat)
function displaystat() {
  const inp=document.getElementById('input')
  const city=inp.options[inp.selectedIndex].value
  let population=0,literacy_rate=0, language=0;
  switch(city){
    case "Chennai":
      population=11503293
      literacy_rate=90.2
      language="Tamil"
      break

    case "Bangalore":
      population=14008262
      literacy_rate=88.7
      language="Kannada"
      break

    case "Delhi":
      population=33807403
      literacy_rate=86.3
      language="Hindi"
      break

    case "Coimbatore":
      population=3472578
      literacy_rate=91.7
      language="Tamil"
      break

    case "Hosur":
      population=345000
      literacy_rate=82
      language="Tamil"
      break
  }
  let text=`This Indian city of ${city} has:\nPopulation : ${population}\nliteracy_rate: ${literacy_rate}\nLanguage : ${language} `

  document.getElementById('result').textContent=text
};

