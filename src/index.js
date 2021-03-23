// import { info } from "node-sass";
import style from "./css/index.scss"
require('./server')
// Validation form 

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const submit = document.getElementById('submit');
const infoMessage = document.getElementById('info');
const form = document.querySelector('form');

const showError = (input, msg) => {
    const info = input.parentElement.querySelector('.error-text');
    input.classList.add('error');
    info.textContent = msg;
}

const clearError = input => {
    const info = input.parentElement.querySelector('.error-text');
    input.classList.remove('error');
    info.textContent = '';
}

const checkForm = input => {
    input.forEach(el => {
        if (el.value === '') {
            showError(el, `Please, state Your${el.placeholder}`);
            clearInputs(el);
        } else {
            clearError(el);
        }
    })
}

const checkLength = (input, min) => {
    if (input.value.length < min) {
        showError(input, `${input.placeholder} should have min. ${min} signs.`);
        clearInputs(input);
    } else {
        clearError(input);
    }
}

const checkEmail = email => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email.value)) {
        clearError(email)
    } else {
        showError(email, 'E-mail is incorrect');
        clearInputs(email);
    }
}


const clearInputs = (input) =>{

    input.addEventListener('input', () =>{
        clearError(input)
    })
}

const checkErrors = () =>{
   const allInputs = Array.from([name, email,message]);
   console.log(allInputs)
    let errorCount = 0;

    allInputs.forEach(el => {
        if (el.classList.contains('error')) {
            errorCount++
            console.log(errorCount)
        }
    })

    if (errorCount === 0) {
       infoMessage.style.visibility = 'visible';
    }
}

submit.addEventListener('click', e => {
    e.preventDefault();
    checkForm([name, email, message]);
    checkLength(name, 3);
    checkEmail(email);
    checkErrors();
})


