if (document.getElementById("imgborder") !== null){
// Changing border color of the image when click on it
let img = document.querySelector("#imgborder");
img.addEventListener("click", () => {
  if (img.style.border == "none") {
    img.setAttribute("style", `border: solid 1rem #FF0000;`);
  } else {
    img.setAttribute("style", `border: none`);
  }
});
}

if (document.getElementById("validate") !== null){

  let button = document.querySelector("#validate");

button.addEventListener("click", () => {
  let amountStickerOne = document.getElementById("amountsticker1").value;
  let amountStickerTwo = document.getElementById("amountsticker2").value;
  let amountStickerThree = document.getElementById("amountsticker3").value;
  // calculate total of sticker and changing the value of every input to a int number
  let totalstickers =
    parseInt(amountStickerOne) +
    parseInt(amountStickerTwo) +
    parseInt(amountStickerThree);

  //input validation or return of total sticker
  if (isNaN(totalstickers)) {
    document.getElementById("totalstickers").innerHTML =
      "¡¡¡¡Favor de ingresar un numero, dato ingresado no es valido!!!!";
  } else if (
    amountStickerOne < 0 ||
    amountStickerTwo < 0 ||
    amountStickerThree < 0
  ) {
    document.getElementById("totalstickers").innerHTML =
      "¡¡¡¡Favor de ingresar un numero positivo, dato ingresado no es valido!!!!";
  } else if (totalstickers === 1) {
    document.getElementById(
      "totalstickers"
    ).innerHTML = `llevas ${totalstickers} sticker`;
  } else if (totalstickers <= 10) {
    document.getElementById(
      "totalstickers"
    ).innerHTML = `llevas ${totalstickers} stickers`;
  } else {
    document.getElementById(
      "totalstickers"
    ).innerHTML = `llevas demasiados stickers`;
  }
});
}

if (document.getElementById("sendPass") !== null){
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

}