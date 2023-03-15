"use strict";
const form = document.getElementById("form");
const password1Elem = document.getElementById("password1");
const password2Elem = document.getElementById("password2");
const messageContainer = document.querySelector(".message-container");
const message = document.getElementById("message");
let isValid = false;
let passwordMatch = false;
function validateForm() {
    // Using Contraint API - returns true if all inputs are valid
    isValid = form.checkValidity();
    // display error message
    if (!isValid) {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    //   check ifpassword and confrim password match
    if (password1Elem.value === password2Elem.value) {
        passwordMatch = true;
        password1Elem.style.borderColor = "green";
        password2Elem.style.borderColor = "green";
    }
    else {
        passwordMatch = false;
        message.textContent = "Make sure passwords match.";
        messageContainer.style.borderColor = "red";
        password1Elem.style.borderColor = "red";
        password2Elem.style.borderColor = "red";
        return;
    }
    //   if form is valid and passwords match
    if (isValid && passwordMatch) {
        message.textContent = "Successfully Registered";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}
function storeFormData() {
    const user = {
        name: form.fullname.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    //   console.log(user);
}
function processFormData(e) {
    e.preventDefault();
    //   Validate form
    validateForm();
    //   submit data if valid
    isValid && passwordMatch ? storeFormData() : null;
}
// Event listeners
form.addEventListener("submit", processFormData);
