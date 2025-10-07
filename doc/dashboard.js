document.addEventListener("DOMContentLoaded", () => {
  const reportCount = document.getElementById("reportCount");
  const userCount = document.getElementById("userCount");
  const reportList = document.getElementById("reportList");

  const reports = [
    { name: "Musa Ibrahim", location: "Lafia", issue: "Rashin tsaro" },
    { name: "Amina Bello", location: "Doma", issue: "Gobara" }
  ];

  reportCount.textContent = reports.length;
  userCount.textContent = 42;

  reports.forEach(report => {
    const li = document.createElement("li");
    li.textContent = `${report.name} - ${report.location} - ${report.issue}`;
    reportList.appendChild(li);
  });
});
