// store ".accordion-q" & ".faq-card" in variables
const questions = document.querySelectorAll(".accordion-q");
const faqCard = document.querySelector(".faq-card");

// listen for a click on any of the questions
questions.forEach((question) => {
  // Within listner
  question.addEventListener("click", () => {
    // Get height of answer
    const height = question.nextElementSibling.scrollHeight;

    // Check if question has already been clicked close &&
    // return out of function
    if (question.parentElement.classList.contains("active")) {
      question.parentElement.classList.remove("active");
      question.nextElementSibling.style.maxHeight = "0px";
      return;
    }

    // reset all questions/answers back to initial state
    questions.forEach((q) => {
      q.parentElement.classList.remove("active");
      q.nextElementSibling.style.maxHeight = "0px";
    });

    // add active class to question selected & apply height
    question.parentElement.classList.add("active");
    question.nextElementSibling.style.maxHeight = `${height}px`;
  });
});
