window.addEventListener("DOMContentLoaded", () => {
    const documentLabel = document.getElementById("documentLabel");
    const flashcardContainer = document.getElementById("card-container");
  
    fetch("/unit_2")
      .then((response) => response.json())
      .then((data) => {
        const notes = data.map((note) => {
          const flashcard = createFlashcard(note.front, note.back);
          flashcardContainer.appendChild(flashcard);
          return `${note.front} - ${note.back}`;
        });
  
        const randomNote = notes[Math.floor(Math.random() * notes.length)];
        documentLabel.textContent = randomNote;
      })
      .catch((error) => {
        console.error(error);
        documentLabel.textContent = "Error retrieving flashcards";
      });
  });
  
  function createFlashcard(front, back) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const flipContainer = document.createElement("div");
    flipContainer.classList.add("flip-container");
  
    const innerContainer = document.createElement("div");
    innerContainer.classList.add("inner-container");
  
    const frontSide = document.createElement("div");
    frontSide.classList.add("front");
    const frontText = document.createElement("h1");
    frontText.classList.add("card-text");
    frontText.textContent = front;
    frontSide.appendChild(frontText);
  
    const backSide = document.createElement("div");
    backSide.classList.add("back");
    const backText = document.createElement("h1");
    backText.classList.add("card-text");
    backText.textContent = back;
    backSide.appendChild(backText);
  
    innerContainer.appendChild(frontSide);
    innerContainer.appendChild(backSide);
    flipContainer.appendChild(innerContainer);
    card.appendChild(flipContainer);
  
    card.addEventListener("click", function () {
      card.classList.toggle("flipped");
    });
  
    return card;
  }