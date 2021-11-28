let inputItems = document.querySelectorAll("input");
let submitButton = document.querySelector(".submit-form");

const validateInput = (input) => {
  let element;
  if (input.target) {
    element = input.target;
  } else {
    element = input;
  }
  let errorInfo = element.nextElementSibling;

  element.classList.remove("error");
  errorInfo.classList.remove("show-error");

  if (element.getAttribute("id") === "email-address") {
    if (!validateEmail(element.value)) {
      errorInfo.classList.add("show-error");
      element.classList.add("error");
      return false;
    }
  } else {
    if (element.value.trim() === "") {
      errorInfo.classList.add("show-error");
      element.classList.add("error");
      return false;
    }
  }
  return true;
};

const validateForm = () => {
  let valid = true;
  inputItems.forEach((item) => {
    if (valid) {
      valid = validateInput(item);
    } else {
      validateInput(item);
    }
  });
};

const validateEmail = (email) => {
  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return reg.test(email);
};

inputItems.forEach((item) => {
  item.addEventListener("blur", validateInput);
});

submitButton.addEventListener("click", validateForm);
