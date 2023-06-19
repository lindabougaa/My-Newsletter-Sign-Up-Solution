const mainCard = document.querySelector('.main-card');
const successCard = document.querySelector('.success-card');
const form = document.querySelector('form');
const input = document.querySelector('input');
const errorMessage = document.querySelector('.error-msg');
const dismissButton = document.querySelector('#dismiss');
const emailTag = document.querySelector('#tag');


function isValid(str) {
    const pattern = new RegExp('^[0-9a-z._-]+@{1}[0-9a-z.-]{2,}[.]{1}[a-z]{2,5}$','i');
    return pattern.test(str);
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const valid = isValid(input.value);
    if(!valid) {
        errorMessage.classList.remove('hidden');
        input.classList.add('error-style');

        window.addEventListener('click', () => {
            errorMessage.classList.add('hidden');
            input.classList.remove('error-style');
        })
        
    } else if(valid) {
        successCard.classList.remove('hidden');
        mainCard.classList.add('hidden');
        emailTag.textContent = input.value;
    } 
})

dismissButton.addEventListener('click', () => {
    successCard.classList.add('hidden');
    mainCard.classList.remove('hidden');
    input.value = "";
})






