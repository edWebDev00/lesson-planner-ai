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
  // Mapping keywords to lesson suggestions
const suggestionMap = {
  "simple past": [
    {
      theme: "Your Last Vacation",
      grammar: "Simple Past",
      activity: "Partner interview about holidays"
    },
    {
      theme: "Childhood Memories",
      grammar: "Past Simple & Past Continuous",
      activity: "Storytelling in pairs"
    }
  ],
  "superpowers": [
    {
      theme: "Superhero Interview",
      grammar: "Second Conditional",
      activity: "Role-play: I wish I could..."
    },
    {
      theme: "Create Your Hero",
      grammar: "Second Conditional",
      activity: "Writing: My superhero origin story"
    }
  ],
  "default": [
    {
      theme: "Daily Routine",
      grammar: "Present Simple",
      activity: "Describe your day to a partner"
    },
    {
      theme: "Travel Plans",
      grammar: "Future Simple",
      activity: "Plan a trip and discuss"
    }
  ]
};
// Determine suggestions based on user theme input
let userKeyword = theme.toLowerCase().trim(); // what the user typed
let mockSuggestions = suggestionMap[userKeyword] || suggestionMap["default"];

// Add the skill and level info from user input
mockSuggestions = mockSuggestions.map(s => ({
  ...s,
  skill: skill,
  level: level
}));

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
