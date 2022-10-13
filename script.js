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
}

// function to validate whether the entered first name is correct or not
function validateFirstName(firstName) {
    const firstNameMessage = document.querySelector("#first-name-message");
    const value = firstName.value.trim();
    if (value === "") {
        firstName.classList.add("incorrect-input");
        firstNameMessage.classList.add("incorrect-message");
        firstNameMessage.textContent = "*Name cannot be blank";
        return false;
    }
    else {
        firstName.classList.add("correct-input");
        firstNameMessage.classList.add("correct-message");
        firstNameMessage.textContent = "*Valid name";
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
        lastNameMessage.textContent = "*Name cannot be blank";
        return false;
    }
    else {
        lastName.classList.add("correct-input");
        lastNameMessage.classList.add("correct-message");
        lastNameMessage.textContent = "*Valid name";
        return true;
    }
}