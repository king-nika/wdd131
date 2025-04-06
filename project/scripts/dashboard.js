if (!localStorage.getItem("currentUser")) {
  alert("You are not logged in. Please log in to continue.");
  window.location.href = "login.html";
}

const currentUser = localStorage.getItem("currentUser");
const users = JSON.parse(localStorage.getItem("users"));

const username = users.find((user) => user.email === currentUser).name;
document.getElementById("username").textContent = username;

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

const logout = document.getElementById("logout");
logout.addEventListener("click", () => {
  localStorage.removeItem("currentUser");
  window.location.href = "login.html";
});

if (!localStorage.getItem("transactions")) {
  localStorage.setItem("transactions", JSON.stringify([]));
}

const allTransactions = JSON.parse(localStorage.getItem("transactions"));
const transactionTable = document.getElementById("transactions");

const transactions = allTransactions.filter(
  (transaction) => transaction.user === currentUser
);

transactions.forEach((transaction) => {
  const row = document.createElement("tr");
  row.innerHTML = `
  <td>${transaction.date}</td>
  <td>${
    transaction.incomeExpense.charAt(0).toUpperCase() +
    transaction.incomeExpense.slice(1)
  }</td>
  <td>${transaction.description}</td>
  <td>$${transaction.amount}</td>
  `;
  transactionTable.appendChild(row);
});

const totalIncome = transactions.reduce((acc, transaction) => {
  if (transaction.incomeExpense === "income") {
    return acc + Number(transaction.amount);
  }
  return acc;
}, 0);

const totalExpenses = transactions.reduce((acc, transaction) => {
  if (transaction.incomeExpense === "expense") {
    return acc + Number(transaction.amount);
  }
  return acc;
}, 0);

document.getElementById("totalIncome").textContent = "$" + totalIncome;
document.getElementById("totalExpenses").textContent = "$" + totalExpenses;

const netBalance = totalIncome - totalExpenses;
document.getElementById("netBalance").textContent = "$" + netBalance;

if (netBalance < 0) {
  document.getElementById("netBalance").style.color = "#c0392b";
} else {
  document.getElementById("netBalance").style.color = "#66bb6a";
}
