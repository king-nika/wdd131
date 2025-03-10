const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");
const menu = document.getElementById("menu");
const navigation = document.querySelector("ul");

let year = new Date().getFullYear();
currentYear.innerText = year;

let modified = new Date(document.lastModified);
lastModified.innerText = modified;

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  navigation.classList.toggle("open");
});
