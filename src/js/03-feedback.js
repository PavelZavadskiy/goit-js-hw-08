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

email.addEventListener('input', evt => {
  form_state.email = evt.currentTarget.value.trim();
  throttledFunction(form_state);
});

message.addEventListener('input', evt => {
  form_state.message = evt.currentTarget.value.trim();
  throttledFunction(form_state);
});

form.addEventListener('submit', evt => {
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
