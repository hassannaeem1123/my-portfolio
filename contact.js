const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const subjectInput = document.querySelector("#subject");
const sourceInputs = document.querySelectorAll('input[name="source"]');
const messageInput = document.querySelector("#message");
const consentInput = document.querySelector("#consent");
const formStatus = document.querySelector("#form-status");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const subjectError = document.querySelector("#subject-error");
const sourceError = document.querySelector("#source-error");
const messageError = document.querySelector("#message-error");
const consentError = document.querySelector("#consent-error");

function setFieldError(input, errorElement, message) {
  errorElement.textContent = message;
  errorElement.hidden = message === "";
  input.setAttribute("aria-invalid", String(message !== ""));
}

function setSourceError(message) {
  sourceError.textContent = message;
  sourceError.hidden = message === "";
  sourceInputs.forEach((input) => {
    input.setAttribute("aria-invalid", String(message !== ""));
  });
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";

  const nameIsInvalid = nameInput.value.trim().length < 3;
  const emailIsInvalid = !emailInput.validity.valid;
  const subjectIsInvalid = subjectInput.value === "";
  let hasSelectedSource = false;
  sourceInputs.forEach((input) => {
    if (input.checked) {
      hasSelectedSource = true;
    }
  });
  const sourceIsInvalid = !hasSelectedSource;
  const messageIsInvalid = messageInput.value.trim().length < 20;
  const consentIsInvalid = !consentInput.checked;

  setFieldError(nameInput, nameError, nameIsInvalid ? "Please enter at least 3 characters." : "");
  setFieldError(emailInput, emailError, emailIsInvalid ? "Please enter a valid email address." : "");
  setFieldError(subjectInput, subjectError, subjectIsInvalid ? "Please choose a subject." : "");
  setSourceError(sourceIsInvalid ? "Please select how you heard about me." : "");
  setFieldError(messageInput, messageError, messageIsInvalid ? "Please enter at least 20 characters." : "");
  setFieldError(consentInput, consentError, consentIsInvalid ? "Please give consent before sending." : "");

  const formIsInvalid = nameIsInvalid
    || emailIsInvalid
    || subjectIsInvalid
    || sourceIsInvalid
    || messageIsInvalid
    || consentIsInvalid;

  if (!formIsInvalid) {
    formStatus.textContent = "Thanks! Your message passed validation. This demo form does not send messages yet.";
  }
});

nameInput.addEventListener("input", () => setFieldError(nameInput, nameError, ""));
emailInput.addEventListener("input", () => setFieldError(emailInput, emailError, ""));
subjectInput.addEventListener("change", () => setFieldError(subjectInput, subjectError, ""));
sourceInputs.forEach((input) => input.addEventListener("change", () => setSourceError("")));
messageInput.addEventListener("input", () => setFieldError(messageInput, messageError, ""));
consentInput.addEventListener("change", () => setFieldError(consentInput, consentError, ""));
