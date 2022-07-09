//check if the password insert is correct and print a messagge for the user
let button = document.getElementById("sendPass");
button.addEventListener("click", () => {
  let num1 = document.getElementById("input1").value;
  let num2 = document.getElementById("input2").value;
  let num3 = document.getElementById("input3").value;
  // validate is the password insert by the user is correct or not and insert in the paragraph a massegge
  if (num1 == 9 && num2 == 1 && num3 == 1) {
    document.getElementById("logIn").innerHTML = "Password 1 correcto";
  } else if (num1 == 7 && num2 == 1 && num3 == 4) {
    document.getElementById("logIn").innerHTML = "Password 2 correcto";
  } else {
    document.getElementById("logIn").innerHTML = "Password incorrecto";
  }
});
