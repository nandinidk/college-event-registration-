let participants = JSON.parse(localStorage.getItem("participants")) || [];

function displayByActivity() {
  const activities = ["Dance", "Singing", "Drama", "Fashion Show", "Quiz", "Coding"];
  const container = document.getElementById("activityTables");
  container.innerHTML = "";

  activities.forEach(activity => {
    const filtered = participants.filter(p => p.activity === activity);
    if (filtered.length > 0) {
      // Create title
      const title = document.createElement("h3");
      title.className = "activity-title";
      title.textContent = `${activity} Participants`;
      container.appendChild(title);

      // Create table
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      thead.innerHTML = `<tr>
        <th>Name</th>
        <th>USN</th>
        <th>Department</th>
        <th>Session</th>
      </tr>`;
      table.appendChild(thead);

      const tbody = document.createElement("tbody");
      filtered.forEach(p => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${p.name}</td>
          <td>${p.usn}</td>
          <td>${p.dept}</td>
          <td>${p.session}</td>
        `;
        tbody.appendChild(row);
      });

      table.appendChild(tbody);
      container.appendChild(table);
    }
  });
}

document.getElementById("regForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const participant = {
    name: document.getElementById("name").value,
    usn: document.getElementById("usn").value,
    dept: document.getElementById("dept").value,
    session: document.getElementById("session").value,
    activity: document.getElementById("activity").value
  };

  participants.push(participant);
  localStorage.setItem("participants", JSON.stringify(participants));

  displayByActivity();
  this.reset();
});

displayByActivity();
