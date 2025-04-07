document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

const menuBtn = document.querySelector(".menu");
const navbar = document.getElementById("nav");

const menuIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f8f9fa"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>';
const closeIcon =
  '<svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#f8f9fa"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>';

menuBtn.innerHTML = menuIcon;
menuBtn.addEventListener("click", () => {
  navbar.classList.toggle("open");
  menuBtn.innerHTML = navbar.classList.contains("open") ? closeIcon : menuIcon;

  document.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
      menuBtn.innerHTML = menuIcon;
    });
  });
});

if (!localStorage.getItem("users")) {
  localStorage.setItem("users", "[]");
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const fullname = form.fullname.value;
  const email = form.email.value;
  const password = form.password.value;

  const user = {
    name: fullname,
    email,
    password,
  };

  const users = JSON.parse(localStorage.getItem("users"));
  const existingUser = users.find((user) => user.email === email);

  if (existingUser) {
    document.querySelector(".error").textContent =
      "User already exists. Please use a different email.";
    return;
  }

  users.push(user);
  localStorage.setItem("users", JSON.stringify(users));
  localStorage.setItem("currentUser", email);

  window.location.href = "dashboard.html";
});
