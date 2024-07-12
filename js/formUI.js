const formStarter = document.querySelector(".form__starter");
const formContent = document.querySelector(".form__content");
const formTitle = document.querySelector(".form__title");
const formTextFake = document.querySelector(".form__text-fake");
const formText = document.querySelector(".form__text");
const btnSubmit = document.querySelector("#btnSubmit");

formStarter.onclick = (e) => {
  e.stopPropagation();

  formStarter.hidden = true;
  formContent.hidden = false;
  formTextFake.hidden = true;
  formText.hidden = true;
  formTitle.focus();
};

formContent.onclick = (e) => {
  e.stopPropagation();
};

formTitle.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    // e.preventDefault();
    formTextFake.hidden = false;
    formText.hidden = false;
    formText.focus();
    // formText.innerText = "Текст заметки";
  }
});

formText.addEventListener("keyup", (e) => {
  if (formText.textContent !== "") {
    formTextFake.textContent = "";
    btnSubmit.disabled = false;
  } else {
    formTextFake.textContent = "Текст заметки";
    btnSubmit.disabled = true;
  }
});

document.addEventListener("click", () => {
  formStarter.hidden = false;
  formContent.hidden = true;
});
