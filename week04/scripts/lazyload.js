const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

let year = new Date().getFullYear();
currentYear.innerText = year;

let modified = new Date(document.lastModified);
lastModified.innerText = modified;
