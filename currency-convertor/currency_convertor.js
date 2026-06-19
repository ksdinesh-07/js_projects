fetch('https://api.frankfurter.dev/v1/currencies')
.then((res)=>res.json())
.then((res)=>displaydropdown(res))

//create the options 
function displaydropdown(res) {
    const from_select = document.querySelector(".from_currency");
    const to_select = document.querySelector(".to_currency");


    Object.keys(res).forEach(cur => {
        const option1 = document.createElement("option");
        option1.value = cur;
        option1.textContent = cur;
        from_select.appendChild(option1);

        const option2 = document.createElement("option");
        option2.value = cur;
        option2.textContent = cur;
        to_select.appendChild(option2);

    });
  }

// Function to convert currency using the API
async function convert(from_currency, to_currency, amount) {
    const res = await fetch(
        `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${from_currency}&to=${to_currency}`
    );
    const data = await res.json();
    return data.rates[to_currency];
}

let button=document.getElementById('btn')

button.addEventListener('click',async ()=>{

  const from_currency = document.querySelector(".from_currency").value;
  const to_currency = document.querySelector(".to_currency").value;
  let amount=document.getElementById('input').value;

  if (from_currency===to_currency){
    alert("choose different currency");
    return;
  }

  let result=await convert(from_currency,to_currency,amount);
  document.querySelector('#result').value=result;

});


