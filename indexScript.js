
// you must meet the age requirement to be told welcome
const myButton = document.querySelector('button')
const inputField = document.querySelector('#usr')
const textOutput = document.querySelector('.output')
const myOutput = document.querySelector('header h1');
const radioBtnField = document.querySelector('.output1')
let inputNum = document.querySelector('#num');
let checkedRadio = document.querySelectorAll('input[name=flexRadioDefault]:checked');


//function for the input field
function checkText(e) {
  e.preventDefault();

 if(inputField.value.length === 0) {
  return myOutput.innerHTML = `Access denied: kindly fill the input fields`;
 } else if (inputField.value.length !== 0) {
   return myOutput.innerHTML = `okay! ${inputField.value}, welcome to my mall`
 } 

}
myButton.addEventListener('click', checkText);

//function for the age field
function checkAge(e) {
  e.preventDefault();
  if(inputNum.value >= 18) {
       return textOutput.innerText =`Congrats! you've gained access to my mall`;
     } else if(inputNum.value === '' || inputNum.value === 0) {
       return textOutput.innerText = `please enter your age`; 
     } else if(inputNum.value <= 18) {
       return textOutput.innerHTML = `you're underaged`;
     }
}

myButton.addEventListener('click', checkAge);

//function for the radio button
function clickRadioBtn(e) {
  if(checkedRadio.checked === true) {
      return radioBtnField.innerHTML = ''
    }  else if(!checkedRadio.checked){
        return radioBtnField.innerText = `holla`
    }
}

myButton.addEventListener('click', clickRadioBtn);








