document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

if (!localStorage.getItem("transactions")) {
  localStorage.setItem("transactions", JSON.stringify([]));
}

if (!localStorage.getItem("currentUser")) {
  alert("You are not logged in. Please log in to continue.");
  window.location.href = "login.html";
}

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);
  data.user = localStorage.getItem("currentUser");
  const transactions = JSON.parse(localStorage.getItem("transactions"));

  transactions.push(data);
  localStorage.setItem("transactions", JSON.stringify(transactions));
  window.location.href = "dashboard.html";
});
