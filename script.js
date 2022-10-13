// selects the button and allows you to click it to validate the form
const create = document.querySelector(".create");
create.addEventListener("click", validateForm);

// selects the form so that you can press enter to submit it
const form = document.querySelector(".form");
form.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
        create.click()
    }
    else {
        return;
    }
});

// main function for validating the form
function validateForm() {
    // selectors for all the elements in the form
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const phoneNumber = document.querySelector("#phone-number");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    
    const correctFirstName = validateFirstName(firstName);
    const correctLastName = validateLastName(lastName);
    const correctEmail = validateEmail(email);
    const correctPhoneNumber = validatePhoneNumber(phoneNumber);
    const correctPassword = validatePassword(password);
    const correctConfirmPassword = validateConfirmPassword(password, confirmPassword);
}

// function to validate whether the entered first name is correct or not
function validateFirstName(firstName) {
    const firstNameMessage = document.querySelector("#first-name-message");
    const value = firstName.value.trim();
    if (value === "") {
        firstName.classList.add("incorrect-input");
        firstNameMessage.classList.add("incorrect-message");
        firstNameMessage.textContent = "*name cannot be blank";
        return false;
    }
    else {
        firstName.classList.add("correct-input");
        firstNameMessage.classList.add("correct-message");
        firstNameMessage.textContent = "*valid name";
        return true;
    }
}

// function to validate whether the entered first name is correct or not
function validateLastName(lastName) {
    const lastNameMessage = document.querySelector("#last-name-message");
    const value = lastName.value.trim();
    if (value === "") {
        lastName.classList.add("incorrect-input");
        lastNameMessage.classList.add("incorrect-message");
        lastNameMessage.textContent = "*name cannot be blank";
        return false;
    }
    else {
        lastName.classList.add("correct-input");
        lastNameMessage.classList.add("correct-message");
        lastNameMessage.textContent = "*valid name";
        return true;
    }
}

// function to validate whether the user has entered a valid email
function validateEmail(email) {
    const emailMessage = document.querySelector("#email-message");
    const value = email.value.trim();
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value === "") {
        email.classList.add("incorrect-input");
        emailMessage.classList.add("incorrect-message");
        emailMessage.textContent = "*email cannot be blank";
        return false;
    }
    else if (re.test(String(value).toLowerCase()) === false) {
        email.classList.add("incorrect-input");
        emailMessage.classList.add("incorrect-message");
        emailMessage.textContent = "*enter a valid email";
        return false;
    }
    else {
        email.classList.add("correct-input");
        emailMessage.classList.add("correct-message");
        emailMessage.textContent = "*valid email";
        return true;
    }
}

// function to validate whether the user has entered a valid phone number
function validatePhoneNumber(phoneNumber) {
    const phoneNumberMessage = document.querySelector("#phone-number-message");
    const value = phoneNumber.value.trim();
    const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if (value === "") {
        phoneNumber.classList.add("incorrect-input");
        phoneNumberMessage.classList.add("incorrect-message");
        phoneNumberMessage.textContent = "*phone number cannot be blank";
        return false;
    }
    else if (re.test(String(value)) === false) {
        phoneNumber.classList.add("incorrect-input");
        phoneNumberMessage.classList.add("incorrect-message");
        phoneNumberMessage.textContent = "*enter a valid phone number";
        return false;
    }
    else {
        phoneNumber.classList.add("correct-input");
        phoneNumberMessage.classList.add("correct-message");
        phoneNumberMessage.textContent = "*valid phone number";
        return true;
    }
}

// function to validate whether the user entered a correct password
function validatePassword(password) {
    const passwordMessage = document.querySelector("#password-message");
    const value = password.value.trim();
    const re = /^(\S)(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹])[a-zA-Z0-9~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]{16,100}$/;
    if (value === "") {
        password.classList.add("incorrect-input");
        passwordMessage.classList.add("incorrect-message");
        passwordMessage.textContent = "*password cannot be blank";
        return false;
    }
    else if (re.test(String(value)) === false) {
        password.classList.add("incorrect-input");
        passwordMessage.classList.add("incorrect-message");
        passwordMessage.textContent = "*enter a valid password";
        return false;
    }
    else {
        password.classList.add("correct-input");
        passwordMessage.classList.add("correct-message");
        passwordMessage.textContent = "*valid password";
        return true;
    }
}

// function to check if passwords match
function validateConfirmPassword(password, confirmPassword) {
    const confirmPasswordMessage = document.querySelector("#password-confirm-message");
    if (password.value.trim() === confirmPassword.value.trim() && confirmPassword.value.trim() !== "") {
        confirmPassword.classList.add("correct-input");
        confirmPasswordMessage.classList.add("correct-message");
        confirmPasswordMessage.textContent = "*passwords match";
        return true;
    }
    else {
        confirmPassword.classList.add("incorrect-input");
        confirmPasswordMessage.classList.add("incorrect-message");
        confirmPasswordMessage.textContent = "*passwords do not match";
        return false;
    }
}