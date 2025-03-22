const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

let year = new Date().getFullYear();
currentYear.innerText = year;

let modified = new Date(document.lastModified);
lastModified.innerText = modified;

const temperature = 32;
const windSpeed = 10;

const calculateWindChill = () => {
  const windChill =
    13.12 +
    0.6215 * temperature -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temperature * Math.pow(windSpeed, 0.16);

  document.getElementById("wind-chill").textContent += ` ${Math.round(
    windChill
  )}°C`;
};

calculateWindChill();
