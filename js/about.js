import createMenu from "./ui/createMenu.js";

createMenu(); 

const span = document.querySelector("#span");
const classes = span.classList;

span.addEventListener('click', function() {


  if (classes.toggle("c")) {
    span.textContent = `'c' added; classList is now "${classes}".`;
  } else {
    span.textContent = `'c' removed; classList is now "${classes}".`;
  }
})