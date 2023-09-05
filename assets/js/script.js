"use strict";
const errorMessage = document.querySelector(".error-message");
const btnNotify = document.querySelector(".btn-notify");
const inputEmail = document.querySelector(".input-email");

btnNotify.addEventListener("click", function () {
  const email = inputEmail.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}/; // Regular expression for email
  if (!email) {
    errorMessage.textContent =
      "Whoops! It looks like you forgot to add your email";
    errorMessage.classList.remove("hidden");
    inputEmail.classList.add("border-error");
  } else {
    if (emailRegex.test(email)) {
      // errorMessage.textContent = "Please provide a valid email address";
      errorMessage.classList.add("hidden");
      inputEmail.classList.remove("border-error");
    } else {
      errorMessage.textContent = "Please provide a valid email address";
      errorMessage.classList.remove("hidden");
      inputEmail.classList.add("border-error");
    }
  }
});
