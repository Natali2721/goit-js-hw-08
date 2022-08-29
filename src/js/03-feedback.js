import throttle from 'lodash.throttle';
//const throttle = require('lodash.throttle');

const formEl = document.querySelector('.feedback-form');

const inputEl = document.querySelector('.feedback-form input');

const textareaEl = document.querySelector('.feedback-form textarea');

const STORAGE_KEY = 'feedback-form-state';

const formData = {};

populateData();

formEl.addEventListener('submit', onFormSubmit);

formEl.addEventListener('input', throttle(onFormInput, 500));

function onFormInput(e) {
  //console.log(e.target.name);
  //console.log(e.target.value);

  formData.email = inputEl.value;
  formData.message = textareaEl.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  //console.log(parsedData.message);
  //console.log(parsedData.email);
  //console.log(parsedData);
}

function onFormSubmit(e) {
  e.preventDefault();
  formData.email = inputEl.value;
  formData.message = textareaEl.value;
  //console.log('sent');
  console.log(formData);

  e.currentTarget.reset();

  localStorage.removeItem(STORAGE_KEY);
}

function populateData() {
  //console.log(localStorage.getItem(STORAGE_KEY));
  if (localStorage.getItem(STORAGE_KEY)) {
    const savedData = localStorage.getItem(STORAGE_KEY);
    const parsedData = JSON.parse(savedData);

    //console.log(parsedData.message);
    //console.log(parsedData.email);
    //console.log(parsedData);

    textareaEl.value = parsedData.message;

    inputEl.value = parsedData.email;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(parsedData));
  }
}
