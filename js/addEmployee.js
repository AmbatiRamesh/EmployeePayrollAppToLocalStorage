
window.addEventListener('DOMContentLoaded',(event)=>
{
    const salary = document.querySelector("#salary");
    const output = document.querySelector('.salary-output');
    salary.addEventListener('input',function(){
        output.textContent = salary.value;
    });
})
const name = document.querySelector('#name');
const nameError = document.querySelector('.name-error');
name.addEventListener('input',function(){
  let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
  if(nameRegex.test(name.value))
  nameError.textContent ="";
  else nameError.textContent ="Your Name is incorrect";
});
   
    