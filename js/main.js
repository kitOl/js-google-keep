const addNoteForm = document.querySelector("#addNoteForm");

const noteTitleInput = document.querySelector("#noteTitleInput");
const noteTextInput = document.querySelector("#noteTextInput");
const noteDelete = document.querySelector("#btnDelete");

const cardsWrapper = document.querySelector("#cardsWrapper");

const notes = [
  {
    id: 1,
    title: "Basic JS",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 2,
    title: "DOM",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    id: 3,
    title: "Events in JavaScript",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];

showAllNotes();

addNoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  notes.push({
    id: notes[notes.length - 1]["id"] + 1,
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

  const lastIndex = notes.length - 1;
  const lastNote = notes[lastIndex];

  showNote(lastNote);
});

document.addEventListener("click", (e) => {
  if (e.target.dataset.action === "delete") {
    const id = e.target.dataset.id;
    const index = notes.findIndex((item) => {
      return item.id == id;
    });

    console.log("index", index);

    notes.splice(index, 1);
    e.target.closest(".card").remove();
  }
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
  <button data-action="delete" data-id="${note.id}" class="btn btn-dark btn-sm">Удалить заметку</button>
  </div>
  </section>`;

  cardsWrapper.insertAdjacentHTML(`afterbegin`, html);
}
