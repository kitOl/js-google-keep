const addNoteForm = document.querySelector("#addNoteForm");

const noteTitleInput = document.querySelector("#noteTitleInput");
const noteTextInput = document.querySelector("#noteTextInput");

const cardsWrapper = document.querySelector("#cardsWrapper");

const notes = [
  {
    title: "Basic JS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "DOM",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    title: "Events in JavaScript",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

showAllNotes();

addNoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  notes.push({
    title: noteTitleInput.value,
    text: noteTextInput.innerHTML,
  });

  console.log(notes);

  addNoteForm.reset();
  noteTextInput.textContent = "";
  btnSubmit.disabled = true;
  formStarter.hidden = false;
  formTextFake.textContent = "Текст заметки...";
  formContent.hidden = true;
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
  <h5 class="card-title">${note.title}</h5>
  <p class="card-text">
  ${note.text}
  </p>
  </div>
  </section>`;

  cardsWrapper.insertAdjacentHTML(`afterbegin`, html);
}
