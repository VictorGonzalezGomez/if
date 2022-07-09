// Calculate the total of stickers whit a max of ten of them
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
