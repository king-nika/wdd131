const radiusOutput = document.getElementById("radius");
const areaOutput = document.getElementById("area");

console.log(radiusOutput);
let area = 0;
const PI = 3.14159;

let radius = 10;
area = PI * radius * radius;
radiusOutput.innerText = radius;
areaOutput.textContent = area;

radius = 20;
area = PI * radius * radius;
radiusOutput.textContent = radius;
areaOutput.textContent = area;
