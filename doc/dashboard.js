// Dummy data don misali
const reports = [
  "Rikici a kasuwa",
  "Ƙarar hayaniya a unguwa",
  "Taimakon mata da yara",
  "Rahoton cin zarafi",
  "Gudanar da taron wayar da kai"
];

const registeredUsers = 128;
const totalReports = reports.length;

// Saita adadin rahotanni da masu rijista
document.getElementById("reportCount").textContent = totalReports;
document.getElementById("userCount").textContent = registeredUsers;

// Cika jerin rahotanni
const reportList = document.getElementById("reportList");
reports.forEach((report) => {
  const li = document.createElement("li");
  li.textContent = report;
  reportList.appendChild(li);
});
