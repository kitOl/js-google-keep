const addNoteForm = document.querySelector("#addNoteForm");
const noteTextInput = document.querySelector("#notetext");
const cardsWrapper = document.querySelector("#cardsWrapper");

const notes = ["Basic JS", "DOM", "Events in JavaScript"];

showAllNotes();

addNoteForm.addEventListener("submit", (e) => {
  e.preventDefault();
  notes.push(noteTextInput.value);
  addNoteForm.reset();
  const lastNote = notes[notes.length - 1];

  showNote(lastNote);
});

function showAllNotes() {
  notes.forEach((item) => {
    showNote(item);
  });
}

function showNote(note) {
  const html = `<section class="card">
  <div class="card-body">
  <p class="card-text">
  ${note}
  </p>
  </div>
  </section>`;

  cardsWrapper.insertAdjacentHTML(`beforeend`, html);
}
