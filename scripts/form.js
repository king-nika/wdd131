const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

let year = new Date().getFullYear();
currentYear.innerText = year;

let modified = new Date(document.lastModified);
lastModified.innerText = modified;

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5,
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7,
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5,
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9,
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0,
  },
];
const selectField = document.getElementById("productName");

products.map((product) => {
  const option = document.createElement("option");

  option.textContent = product.name;
  option.value = product.id;

  selectField.appendChild(option);
});
