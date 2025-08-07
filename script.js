const topics = [
  "Introduction to Networks",
  "OSI and TCP/IP Models",
  "IP Addressing",
  "Routing Algorithms",
  "Transport Layer Protocols",
  "Application Layer Protocols"
];

const topicList = document.getElementById("topic-list");
const progressBar = document.getElementById("progress-bar");
const progressText = document.getElementById("progress-percent");

let completed = JSON.parse(localStorage.getItem("completedTopics")) || [];

topics.forEach((topic, index) => {
  const div = document.createElement("div");
  div.className = "topic";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = `topic-${index}`;
  checkbox.checked = completed.includes(index);

  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      completed.push(index);
    } else {
      completed = completed.filter(i => i !== index);
    }
    localStorage.setItem("completedTopics", JSON.stringify(completed));
    updateProgress();
  });

  const label = document.createElement("label");
  label.htmlFor = `topic-${index}`;
  label.textContent = topic;

  div.appendChild(checkbox);
  div.appendChild(label);
  topicList.appendChild(div);
});

function updateProgress() {
  const percent = Math.round((completed.length / topics.length) * 100);
  progressBar.value = percent;
  progressText.textContent = `${percent}%`;
}
function saveProgress() {
  alert("Progress saved successfully!");
  // Since teacher checkboxes already update localStorage in real-time,
  // this is mostly for user feedback.
}

updateProgress();
function login() {
  const role = document.getElementById("role").value;
  const password = document.getElementById("password").value;

  // Simple hardcoded passwords
  if ((role === "teacher" && password === "teacher123") ||
      (role === "student" && password === "student123")) {
    window.location.href = `${role}.html`; // Redirect
  } else {
    alert("Invalid credentials");
  }
}
