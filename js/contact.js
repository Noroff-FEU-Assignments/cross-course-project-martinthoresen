const form = document.querySelector("#formValidation");
const messageContainer = document.querySelector(".messageContainer");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#fullNameError");

const subject = document.querySelector("#message");
const subjectError = document.querySelector("#messageError");

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");

function validateForm() {
  event.preventDefault();

  if (checkLength(fullName.value, 0) === true) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkLength(subject.value, 10) === true) {
    subjectError.style.display = "none";
  } else {
    subjectError.style.display = "block";
  }

  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  messageContainer.innerHTML = "";
  if (checkLength(fullName.value, 0 && subject.value, 10) && validateEmail(email.value) === true) {
    messageContainer.innerHTML = createMessage("success", "Thank you for reaching out.");
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
