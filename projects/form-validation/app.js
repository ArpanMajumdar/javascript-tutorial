// UI elements
const nameInput = document.getElementById('name');
const zipcodeInput = document.getElementById('zip');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');

// Event listeners
nameInput.addEventListener('blur', validateName);
zipcodeInput.addEventListener('blur', validateZipcode);
emailInput.addEventListener('blur', validateEmail);
phoneInput.addEventListener('blur', validatePhone);

function validateName(event) {
    // Name must be alphabetic and between 2 and 10 characters
    const re = /^[a-zA-Z]{2,10}$/;

    if (re.test(nameInput.value)) {
        console.log(`${nameInput.value} matches pattern ${re.source}`);
        nameInput.classList.remove('is-invalid');
    } else {
        console.log(`${nameInput.value} does NOT match pattern ${re.source}`);
        nameInput.classList.add('is-invalid');
    }
}

function validateZipcode(event) {
    // Zipcode must be a 6 digit number
    const re = /^\d{6}$/;

    if (re.test(zipcodeInput.value)) {
        console.log(`${zipcodeInput.value} matches pattern ${re.source}`);
        zipcodeInput.classList.remove('is-invalid');
    } else {
        console.log(`${zipcodeInput.value} does NOT match pattern ${re.source}`);
        zipcodeInput.classList.add('is-invalid');
    }
}

function validateEmail(event) {
    // Email must be a valid email
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,5}))$/;

    if (re.test(emailInput.value)) {
        console.log(`${emailInput.value} matches pattern ${re.source}`);
        emailInput.classList.remove('is-invalid');
    } else {
        console.log(`${emailInput.value} does NOT match pattern ${re.source}`);
        emailInput.classList.add('is-invalid');
    }
}

function validatePhone(event) {
    // Name must be alphabetic and between 2 and 10 characters
    const re = /^(\+\d{2,3})?(\-)?\d{10}$/;

    if (re.test(phoneInput.value)) {
        console.log(`${phoneInput.value} matches pattern ${re.source}`);
        phoneInput.classList.remove('is-invalid');
    } else {
        console.log(`${phoneInput.value} does NOT match pattern ${re.source}`);
        phoneInput.classList.add('is-invalid');
    }
}