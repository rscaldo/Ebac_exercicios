let form = document.querySelector(".form-numeros");
console.log(form);
form.addEventListener("submit", function (e) {
  e.preventDefault();
});

let campoA = document.getElementById("campoA");
let campoB = document.getElementById("campoB");
let button1 = document.getElementById("btn");
let success = document.querySelector(".form-success");
let formError = document.querySelector(".form-error");

button1.addEventListener("click", function () {
  if (campoA.value < campoB.value) {
    success.style.display = "block";
  } else {
    formError.style.display = "block";
  }
});
