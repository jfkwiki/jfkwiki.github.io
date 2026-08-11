const checklistItems = document.querySelectorAll("[data-check-item]");
const sourceToggle = document.querySelector("[data-source-toggle]");
const sourcePanel = document.querySelector("#source-panel");
const quiz = document.querySelector("[data-quiz]");

const storagePrefix = "jfki-welcome-check:";

checklistItems.forEach((item, index) => {
  const input = item.querySelector("input");
  const key = storagePrefix + (item.dataset.key || index);
  const saved = localStorage.getItem(key);

  if (saved === "true") {
    input.checked = true;
    item.classList.add("is-done");
  }

  input.addEventListener("change", () => {
    localStorage.setItem(key, input.checked ? "true" : "false");
    item.classList.toggle("is-done", input.checked);
  });
});

if (sourceToggle && sourcePanel) {
  sourceToggle.addEventListener("click", () => {
    const expanded = sourceToggle.getAttribute("aria-expanded") === "true";
    sourceToggle.setAttribute("aria-expanded", String(!expanded));
    sourcePanel.hidden = expanded;
  });
}

if (quiz) {
  const checkButton = quiz.querySelector("[data-quiz-check]");
  const result = quiz.querySelector("[data-quiz-result]");
  const questions = [...quiz.querySelectorAll(".quiz-question")];

  checkButton.addEventListener("click", () => {
    const total = questions.length;
    const score = questions.reduce((sum, question) => {
      const selected = question.querySelector("input:checked");
      return sum + (selected?.value === "correct" ? 1 : 0);
    }, 0);

    const messages = {
      5: "5/5. Excellent. You can now correct someone about BER being zone C.",
      4: "4/5. Very good. One more detail and the first week gets noticeably easier.",
      3: "3/5. Solid start. Revisit Anmeldung, ticket zones, and the Campuscard note.",
      2: "2/5. Enough to begin; not enough to skip the checklist.",
      1: "1/5. Start with BVG zones, Anmeldung, and Sunday shopping.",
      0: "0/5. Perfectly normal on arrival. The checklist is your friend."
    };

    result.textContent = messages[score] || `${score}/${total}.`;
  });
}
