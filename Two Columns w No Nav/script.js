const formDOM = document.querySelector("[data-signup-form]");
const firstNameInputDOM = document.querySelector("[data-first-name]");
const lastNameInputDOM = document.querySelector("[data-last-name]");
const emailInputDOM = document.querySelector("[data-email]");
const passwordInputDOM = document.querySelector("[data-password]");

const checkForEmptyFields = (firstName, lastName, email, password) => {
  if (firstName === "") {
    firstNameInputDOM.classList.add("input-error");
    document.querySelector("[data-first-name-error]").textContent = "First Name cannot be empty";
    document.querySelector("[data-first-name-error-icon]").style.opacity = "1";
  }
  if (lastName === "") {
    lastNameInputDOM.classList.add("input-error");
    document.querySelector("[data-last-name-error]").textContent = "Last Name cannot be empty";
    document.querySelector("[data-last-name-error-icon]").style.opacity = "1";
  }
  if (email === "") {
    emailInputDOM.classList.add("input-error");
    emailInputDOM.placeholder = "email@example/com";
    emailInputDOM.style.placeholderColor = "var(--red-400)";
    document.querySelector("[data-email-error]").textContent = "Email cannot be empty";
    document.querySelector("[data-email-error-icon]").style.opacity = "1";
  }
  if (password === "") {
    passwordInputDOM.classList.add("input-error");
    document.querySelector("[data-password-error]").textContent = "Password cannot be empty";
    document.querySelector("[data-password-error-icon]").style.opacity = "1";
  }

  if (firstName !== "") {
    firstNameInputDOM.classList.remove("input-error");
    document.querySelector("[data-first-name-error]").textContent = "";
    document.querySelector("[data-first-name-error-icon]").style.opacity = "0";
  }
  if (lastName !== "") {
    lastNameInputDOM.classList.remove("input-error");
    document.querySelector("[data-last-name-error]").textContent = "";
    document.querySelector("[data-last-name-error-icon]").style.opacity = "0";
  }
  if (email !== "") {
    emailInputDOM.classList.add("input-error");
    emailInputDOM.placeholder = "Email";
    emailInputDOM.style.placeholderColor = "var(--blue-800)";
    document.querySelector("[data-email-error]").textContent = "";
    document.querySelector("[data-email-error-icon]").style.opacity = "0";
  }
  if (password !== "") {
    passwordInputDOM.classList.remove("input-error");
    document.querySelector("[data-password-error]").textContent = "";
    document.querySelector("[data-password-error-icon]").style.opacity = "0";
  }
};

const handleFormSubmit = (e) => {
  e.preventDefault();

  const firstName = firstNameInputDOM.value;
  const lastName = lastNameInputDOM.value;
  const email = emailInputDOM.value;
  const password = passwordInputDOM.value;

  checkForEmptyFields(firstName, lastName, email, password);

  // Make POST request to server
};

formDOM.addEventListener("submit", handleFormSubmit);
