// Dummy data for demonstration
const reports = [
  "Conflict at the market",
  "Noise complaint in the neighborhood",
  "Support for women and children",
  "Report of abuse",
  "Community awareness event"
];

const registeredUsers = 128;
const totalReports = reports.length;

// Set the number of reports and registered users
document.getElementById("reportCount").textContent = totalReports;
document.getElementById("userCount").textContent = registeredUsers;

// Populate the list of reports
const reportList = document.getElementById("reportList");
reports.forEach((report) => {
  const li = document.createElement("li");
  li.textContent = report;
  reportList.appendChild(li);
});
