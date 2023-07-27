import throttle from "lodash.throttle";
const form = document.querySelector('.feedback-form');
form.addEventListener('input', throttle (onInput, 500));
let result = {};

function onInput(evt) {
    const event = evt.target
  if (event.name === 'email') {
    result.email = event.value;
  } else if (event.name === 'message') {
    result.message = event.value;
  }
  localStorage.setItem('feedback-form-state', JSON.stringify(result));
}

result = JSON.parse(localStorage.getItem('feedback-form-state')) ?? {};
form[0].value = result.email ?? '';
form[1].value = result.message ?? '';

form.addEventListener('submit', onSubmit);
function onSubmit(evt) {
  evt.preventDefault();
  const { email, message } = evt.currentTarget.elements;
  if (email.value.length === 0 || message.value.length === 0) {
    return alert('Всі поля повинні бути заповнені!');
  }

  const userDate = {
    email: email.value,
    message: message.value,
  };
  console.log(userDate);
  form.reset();
  localStorage.removeItem('feedback-form-state');
}
