document.getElementById("openSet").addEventListener("click", function() {
  document.querySelector(".input-container").classList.add("hidden");
  document.querySelector(".flashcard-container").classList.remove("hidden");
});

const cardList = document.getElementById('card-list');
const openSetButton = document.getElementById('openSet');
const inputContainer = document.querySelector('.input-container');
const flashcardContainer = document.querySelector('.flashcards-container');

function fetchAndDisplayFlashcards() {
  fetch('/notes')
    .then((response) => response.json())
    .then((cards) => {
      cardList.innerHTML = '';
      cards.forEach(function(card) {
        const newCard = document.createElement('li');
        newCard.innerHTML = `
          <div class="card">
            <div class="front">
              <h3>${card.front}</h3>
            </div>
            <div class="back">
              <h3>${card.back}</h3>
            </div>
          </div>
        `;
        cardList.appendChild(newCard);
        newCard.addEventListener('click', function() {
          newCard.classList.toggle('flipped');
        });
      });

      inputContainer.classList.add('hidden');
      flashcardContainer.classList.remove('hidden');
    })
    .catch((error) => {
      console.log("Error fetching flashcards:", error);
    });
}

openSetButton.addEventListener('click', function() {
  fetchAndDisplayFlashcards();
});

// Still Not working //
