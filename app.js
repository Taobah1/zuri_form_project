const form = document.getElementById("form");
const button = document.getElementById("button");
const firstName = document.querySelector(".firstName");
const lastName = document.querySelector(".lastName");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const fNameError = document.querySelector("#fNameError");
const lNameError = document.querySelector("#lNameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passwordError");
const icon = document.querySelector(".input_img");

console.log(firstName);

// console.log(firstName, lastName, email, password);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  button.style.backgroundColor = "#77E2B4";
  const fName = firstName.value;
  const lName = lastName.value;
  const emailVal = email.value;
  const passwordVal = password.value;
  console.log(fName, lName, emailVal, passwordVal);

  // Check first name
  if (fName === "") {
    firstName.classList.add("error");
    fNameError.textContent = "First Name cannot be empty";
    fNameError.style.visibility = "visible";
    // firstName.previousElementSibling.style.visibility = "visible";
    icon.style.visibility = "visible";
  } else {
    firstName.classList.remove("error");
  }
  // Check last name

  if (lName === "") {
    lastName.classList.add("error");
    lNameError.textContent = "Last Name cannot be empty";
    lNameError.style.visibility = "visible";
    lastName.nextElementSibling.style.visibility = "visible";
    // icon.style.visibility = "visible";
  } else {
    lastName.classList.remove("error");
  }
  // Check email

  if (!validateEmail(emailVal) || emailVal === "") {
    email.classList.add("error");
    emailError.textContent = "Looks like this is not an email";
    emailError.style.visibility = "visible";
    email.nextElementSibling.style.visibility = "visible";
  } else {
    email.classList.remove("error");
  }

  // Check password

  if (passwordVal === "") {
    password.classList.add("error");
    passwordError.textContent = "Password cannot be empty";
    passwordError.style.visibility = "visible";
    password.previousElementSibling.style.visibility = "visible";
  } else {
    password.classList.remove("error");
  }
});

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
