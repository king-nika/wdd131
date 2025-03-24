document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menu = document.getElementById("menu");
const navigation = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  menu.classList.toggle("open");
  navigation.classList.toggle("open");
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg",
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg",
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg",
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg",
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg",
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg",
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg",
  },
  {
    templeName: "Atlanta Georgia",
    location: "Atlanta, Georgia",
    dedicated: "2011, May, 1",
    area: 34500,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/atlanta-georgia-temple/atlanta-georgia-temple-13940-main.jpg",
  },
  {
    templeName: "Jordan River Utah",
    location: "Jordan River, Utah",
    dedicated: "2018, May, 20",
    area: 148236,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/jordan-river-utah-temple/jordan-river-utah-temple-51608-main.jpg",
  },
  {
    templeName: "Seattle Washington",
    location: "Seattle, Washington",
    dedicated: "1980, November, 17-21",
    area: 110000,
    imageUrl:
      "https://churchofjesuschristtemples.org/assets/img/temples/seattle-washington-temple/seattle-washington-temple-55800-main.jpg",
  },
  // Add more temple objects here...
];
const templeSection = document.getElementById("temples");
const oldLink = document.getElementById("old");
const newLink = document.getElementById("new");
const largeLink = document.getElementById("large");
const smallLink = document.getElementById("small");

const displayTemples = (temple, index) => {
  const figure = document.createElement("figure");
  const h3 = document.createElement("h3");
  const location = document.createElement("p");
  const dedicated = document.createElement("p");
  const size = document.createElement("p");
  const img = document.createElement("img");

  h3.textContent = temple.templeName;
  location.innerHTML = `Location: <span>${temple.location}</span>`;
  location.style.marginTop = "1rem";
  dedicated.innerHTML = `Dedicated: <span>${temple.dedicated}</span>`;
  size.innerHTML = `Size: <span>${temple.area} sq ft</span>`;
  size.style.marginBottom = "0.5rem";
  img.setAttribute("src", temple.imageUrl);
  img.setAttribute("alt", temple.templeName);
  img.setAttribute("width", "275");
  img.setAttribute("height", "183");
  if (index !== 0) {
    img.setAttribute("loading", "lazy");
  }

  figure.appendChild(h3);
  figure.appendChild(location);
  figure.appendChild(dedicated);
  figure.appendChild(size);
  figure.appendChild(img);

  templeSection.appendChild(figure);
};

temples.map(displayTemples);

largeLink.addEventListener("click", (e) => {
  e.preventDefault();
  templeSection.innerHTML = "";

  const largeTemples = temples.filter((temple) => temple.area > 90000);
  largeTemples.map(displayTemples);
});

smallLink.addEventListener("click", (e) => {
  e.preventDefault();
  templeSection.innerHTML = "";

  const smallTemples = temples.filter((temple) => temple.area < 10000);
  smallTemples.map(displayTemples);
});

oldLink.addEventListener("click", (e) => {
  e.preventDefault();
  templeSection.innerHTML = "";

  const oldTemples = temples.filter((temple) => {
    const year = temple.dedicated.split(",")[0].trim();
    parseInt(year);

    return year < 1900;
  });

  oldTemples.map(displayTemples);
});

newLink.addEventListener("click", (e) => {
  e.preventDefault();
  templeSection.innerHTML = "";

  const newTemples = temples.filter((temple) => {
    const year = temple.dedicated.split(",")[0].trim();
    parseInt(year);

    return year > 2000;
  });

  newTemples.map(displayTemples);
});
