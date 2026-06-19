const form =document.querySelector('#form')
const username=document.querySelector('#username')
const email=document.querySelector('#email')
const password=document.querySelector('#password')
const cpass=document.querySelector('#cpass')


form.addEventListener('submit',(eve)=>{
eve.preventDefault()
validateInputs()

})

function validateInputs(){
  const usernameval=username.value.trim()
  const emailval=email.value.trim()
  const passwordval=password.value.trim()
  const cpassval=cpass.value.trim()

  //validate username
  if (usernameval===''){
    set_error(username,"Must require a Username")
  }
  else{
    set_success(username)
  }

  //validate email
  if (emailval===''){
    set_error(email,"Must require a Email")
  }
  else if (!validateEmail(emailval)){
    set_error(email,"Please Enter a valid Email")
  }
  else{
    set_success(email)
  }

  //validate password
  if (passwordval===''){
    set_error(password,"Must require a Password")
  }
  else if (passwordval.length<8){
    set_error(password,"Password must be atleat 8 Character long")
  }
  else{
    set_success(password)
  }

  //validate confirm password
  if (cpassval===''){
    set_error(cpass,"Confirm password is required")
  }
  else if(cpassval!=passwordval){
    set_error(cpass,"Password doesnot Match")
  }
  else{
    set_success(cpass)
  }
}

function set_error(element,message){
  const inputGroup=element.parentElement;
  const errorElement=inputGroup.querySelector('.error')
  errorElement.innerText=message;
  inputGroup.classList.add('error')
  inputGroup.classList.remove('success')
}

function set_success(element){
  const inputGroup=element.parentElement;
  const errorElement=inputGroup.querySelector('.error')
  errorElement.innerText='';
  inputGroup.classList.add('success')
  inputGroup.classList.remove('error')
}

function validateEmail(email) {
    email = email.toLowerCase();

    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return pattern.test(email);
}