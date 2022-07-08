// Changing border color of the image when click on it
let img = document.querySelector("#imgborder");
img.addEventListener("click", () =>{
   if (img.style.border == "none"){
    img.setAttribute("style", `border: solid 1rem; border-image: linear-gradient(to right, pink, darkorchid) 1;`)
    // console.log("enter if");
   }
   else {
    img.setAttribute("style", `border: none`)
    // img.removeAttribute("style", `border`);
    // console.log("enter else")
   }
});