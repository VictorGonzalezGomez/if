// Changing border color of the image when click on it
let img = document.querySelector("#imgborder");
img.addEventListener("click", () => {
  if (img.style.border == "none") {
    img.setAttribute("style", `border: solid 1rem #FF0000;`);
  } else {
    img.setAttribute("style", `border: none`);
  }
});
