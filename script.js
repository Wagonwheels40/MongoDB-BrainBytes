/*document.addEventListener("DOMContentLoaded", function () {
  const flashcardForm = document.getElementById("flashcard-form");
  const frontTextArea = document.getElementById("front");
  const backTextArea = document.getElementById("back");

  flashcardForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const frontText = frontTextArea.value;
    const backText = backTextArea.value;

    // Call a function to create flashcard elements on the page
    createFlashcard(frontText, backText);

    // Clear the input fields
    frontTextArea.value = "";
    backTextArea.value = "";

    // Submit the form programmatically
    flashcardForm.submit();
  });

  function createFlashcard(front, back) {
    const cardList = document.getElementById("card-list");
    const newCard = document.createElement("li");
    newCard.innerHTML = `
      <div class="card">
        <div class="front">${front}</div>
        <div class="back">${back}</div>
      </div>
    `;
    cardList.appendChild(newCard);

    newCard.addEventListener("click", function () {
      newCard.classList.toggle("flipped");
    });
  }
});

*/
