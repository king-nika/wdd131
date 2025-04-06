document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuBtn = document.querySelector(".menu");
const navbar = document.querySelector("ul");

const menuIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f8f9fa"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f8f9fa"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

menuBtn.innerHTML = menuIcon;
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menuBtn.innerHTML = navbar.classList.contains("open") ? closeIcon : menuIcon;
});

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", "[]");
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = form.email.value;
  const password = form.password.value;
  const users = JSON.parse(localStorage.getItem("users"));

  const foundUser = users.find(
    (user) => user.email === email && user.password === password
  );

  if (!foundUser) {
    return (document.querySelector(".error").textContent =
      "Invalid email or password");
  }

  localStorage.setItem("currentUser", email);
  window.location.href = "dashboard.html";
});
