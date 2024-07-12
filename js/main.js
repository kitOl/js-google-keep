const addNoteForm = document.querySelector("#addNoteForm");

const noteTitleInput = document.querySelector("#noteTitleInput");
const noteTextInput = document.querySelector("#noteTextInput");
const noteDelete = document.querySelector("#btnDelete");

const cardsWrapper = document.querySelector("#cardsWrapper");

// const notes = [
//   {
//     id: 1,
//     title: "Basic JS",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 2,
//     title: "DOM",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
//   {
//     id: 3,
//     title: "Events in JavaScript",
//     text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
//   },
// ];

let notes = [];
if (localStorage.getItem("notes")) {
  notes = JSON.parse(localStorage.getItem("notes"));
}

console.log("notes", notes);

showAllNotes();

addNoteForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let id = notes.length ? notes[notes.length - 1]["id"] + 1 : 1;

  notes.push({
    id: id,
    title: noteTitleInput.value,
    text: noteTextInput.innerHTML,
  });

  localStorage.setItem("notes", JSON.stringify(notes));

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
    localStorage.setItem("notes", JSON.stringify(notes));
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
