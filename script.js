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

function validateForm() {
    console.log("clicked");
}