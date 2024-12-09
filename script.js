const usernameField = document.getElementById("username");
const errorMsg = document.querySelector(".error-msg");
const frm1 = document.getElementById("frm1");

const regex = /^[\w]{8,10}$/;

frm1.addEventListener("submit", function (e) {
  const isValid = regex.test(usernameField.value);
  if (!isValid) {
    errorMsg.style.display = "block";
    e.preventDefault();
  } else {
    errorMsg.style.display = "none";
  }
});