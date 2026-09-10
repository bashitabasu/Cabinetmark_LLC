
const email = document.querySelector("#email");
const subscribeBtn = document.querySelector("#subscribeBtn");
const emailError = document.querySelector("#emailError");

subscribeBtn.addEventListener("click", () => {
  const emailValue = email.value.trim();

  let isValid = true;

  // Email regex pattern
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear previous error
  emailError.textContent = "";

  // Empty email
  if (!emailValue) {
    emailError.textContent = "Email can't be empty";
    isValid = false;
  } else if (!emailRegex.test(emailValue)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // If email is valid
  if (isValid) {
    alert("Subscribed successfully!");

    email.value = "";
  }
});