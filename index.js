let menu = document.querySelector(".menu");
let hammenu = document.querySelector(".ham-menu")

let isVisible = false;
hammenu.classList.add("hide");

menu.addEventListener('click', ()=>{
  if (isVisible === false) {
    isVisible = true;
    hammenu.classList.remove("hide");
    hammenu.classList.add("show");
  } else {
    isVisible = false;
    hammenu.classList.remove("show");
    hammenu.classList.add("hide");
  }
})