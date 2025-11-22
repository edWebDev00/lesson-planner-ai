// Select the form and suggestions section
const lessonForm = document.getElementById("lessonForm");
const suggestionsSection = document.getElementById("suggestions");

// Listen for form submission
lessonForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent page reload

  // Get user input values
  const level = document.getElementById("level").value;
  const theme = document.getElementById("theme").value;
  const skill = document.getElementById("skill").value;
  const duration = document.getElementById("duration").value;
  const objectives = document.getElementById("objectives").value;

  // Clear previous suggestions
  suggestionsSection.innerHTML = "";

  // Generate mock suggestions (hard-coded for now)
  const mockSuggestions = [
    {
      theme: "Your Last Vacation",
      grammar: "Simple Past",
      skill: skill,
      activity: "Partner interview about holidays",
      level: level
    },
    {
      theme: "Childhood Memories",
      grammar: "Past Simple & Past Continuous",
      skill: skill,
      activity: "Storytelling in pairs",
      level: level
    },
    {
      theme: "Famous People’s Early Life",
      grammar: "Simple Past",
      skill: skill,
      activity: "Reading + discussion",
      level: level
    }
  ];

  // Display suggestions dynamically
  mockSuggestions.forEach((suggestion, index) => {
    const div = document.createElement("div");
    div.classList.add("suggestion");
    div.innerHTML = `
      <h3>Suggestion ${index + 1}</h3>
      <p><strong>Theme:</strong> ${suggestion.theme}</p>
      <p><strong>Grammar:</strong> ${suggestion.grammar}</p>
      <p><strong>Skill Focus:</strong> ${suggestion.skill}</p>
      <p><strong>Activity:</strong> ${suggestion.activity}</p>
      <p><strong>Level:</strong> ${suggestion.level}</p>
    `;
    suggestionsSection.appendChild(div);
  });
});
