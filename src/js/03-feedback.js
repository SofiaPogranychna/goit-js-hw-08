import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

const keyStorage = 'feedback-form-state'
const savedState = localStorage.getItem(keyStorage);
let currentState = {};

if (savedState) {
 currentState = JSON.parse(savedState);
  form.email.value = currentState.email;
  form.message.value = currentState.message;
}

form.addEventListener('input', throttle(onInput, 500));

function onInput() 
{
 currentState = {
    email: form.email.value,
    message: form.message.value,
  };

  localStorage.setItem(keyStorage, JSON.stringify(currentState));
}

form.addEventListener('submit', onSubmit);
function onSubmit(event) {
    event.preventDefault();
    console.log(currentState)
    localStorage.removeItem(keyStorage);
    form.reset();

}


