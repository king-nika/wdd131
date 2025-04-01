const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

let year = new Date().getFullYear();
currentYear.innerText = year;

let modified = new Date(document.lastModified);
lastModified.innerText = modified;

const pageCounter = document.getElementById("pageCounter");
let visitCounter = Number(localStorage.getItem("visitCounter")) || 0;

if (visitCounter !== 0) {
  pageCounter.textContent = `The number of times you've submitted a review is ${
    visitCounter + 1
  }`;
} else {
  pageCounter.textContent = "This is your first submitted review!!";
}

visitCounter++;
localStorage.setItem("visitCounter", visitCounter);
