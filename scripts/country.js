const currentYear = document.getElementById("currentYear");
const lastModified = document.getElementById("lastModified");

let year = new Date().getFullYear();
currentYear.innerText = year;

let modified = new Date(document.lastModified);
lastModified.innerText = modified;

const temperature = 32;
const windSpeed = 10;

const calculateWindChill = (temp, wind) => {
  if (wind > 10 || temp < 4.8) {
    return "N/A";
  }

  const windChill =
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(wind, 0.16) +
    0.3965 * temp * Math.pow(wind, 0.16);

  return Math.round(windChill) + "°C";
};

document.getElementById("wind-chill").textContent += ` ${calculateWindChill(
  temperature,
  windSpeed
)}`;
