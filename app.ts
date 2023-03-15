const form = document.getElementById("form") as HTMLFormElement;
const password1Elem = document.getElementById("password1") as HTMLInputElement;
const password2Elem = document.getElementById("password2") as HTMLInputElement;
const messageContainer = document.querySelector(
  ".message-container"
) as HTMLElement;
const message = document.getElementById("message") as HTMLElement;

let isValid: boolean = false;
let passwordMatch: boolean = false;

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
  } else {
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

interface User {
  name: HTMLFormElement;
  phone: HTMLFormElement;
  email: HTMLFormElement;
  website: HTMLFormElement;
  password: HTMLFormElement;
}
function storeFormData() {
  const user: User = {
    name: form.fullname.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  //   console.log(user);
}

function processFormData(e: any) {
  e.preventDefault();

  //   Validate form
  validateForm();

  //   submit data if valid
  isValid && passwordMatch ? storeFormData() : null;
}

// Event listeners
form.addEventListener("submit", processFormData);
