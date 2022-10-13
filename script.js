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
})

// main function for validating the form
function validateForm() {
    // selectors for all the elements in the form
    const firstName = document.querySelector("#first-name");
    const lastName = document.querySelector("#last-name");
    const email = document.querySelector("#email");
    const phoneNumber = document.querySelector("#phoneNumber");
    const password = document.querySelector("#password");
    const confirmPassword = document.querySelector("#confirm-password");
    
    const correctFirstName = validateFirstName(firstName);
    const correctLastName = validateLastName(lastName);
    const correctEmail = validateEmail(email);
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