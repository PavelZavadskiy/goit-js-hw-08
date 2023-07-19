import throttle from 'lodash.throttle';

const email = document.querySelector("[name = 'email']");
const message = document.querySelector("[name = 'message']");
const form = document.querySelector('.feedback-form');

const FORM_STATE = 'feedback-form-state';

let form_state = {
  email: '',
  message: '',
};

const saveForm = form_state => {
  try {
    localStorage.setItem(FORM_STATE, JSON.stringify(form_state));
  } catch (error) {
    console.error('saveForm state error: ', error.message);
  }
};

const loadForm = () => {
  try {
    const serializedState = localStorage.getItem(FORM_STATE);
    return serializedState === null ? { email: '', message: '' } : JSON.parse(serializedState);
  } catch (error) {
    console.error('loadForm state error: ', error.message);
    return { email: '', message: '' };
  }
};

form_state = loadForm();
email.value = form_state.email;
message.value = form_state.message;

const throttledFunction = throttle(form_state => {
  saveForm(form_state);
}, 500);

form.addEventListener('input', evt => {
  if (evt.target === email) {
    form_state.email = evt.target.value.trim();
  } else if (evt.target === message) {
    form_state.message = evt.target.value.trim();
  } else {
    return;
  }
  throttledFunction(form_state);
});

form.addEventListener('submit', evt => {
  evt.preventDefault();
  if (form_state.email.length == 0 || form_state.message.length == 0) {
    alert('All fields must be filled!');
    return;
  }
  console.log(form_state);
  form_state = {
    email: '',
    message: '',
  };
  email.value = form_state.email;
  message.value = form_state.message;
  localStorage.removeItem(FORM_STATE);
  //debugger;
});
