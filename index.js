let password = document.querySelector("#password");
let passwordConfirm = document.querySelector("#confirm-password");

function passwordCheck() {
   if (password.value !== passwordConfirm.value) {
      passwordConfirm.classList.add("error");
   } else if (password.value === passwordConfirm.value)
      passwordConfirm.classList.remove("error");
}

passwordConfirm.addEventListener("input", passwordCheck);
password.addEventListener("input", passwordCheck);
