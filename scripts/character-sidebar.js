const sidebarPickCharacter = document.querySelector(".sidebar.pick-character");
const sidebarPickAppearence = document.querySelector(
  ".sidebar.pick-appearence",
);

if (sidebarPickCharacter) {
  const cells = sidebarPickCharacter.querySelectorAll(".cell");
  cells.forEach((cell) => {
    const miniCharacter = cell.querySelector(".character.mini");
    const text = cell.querySelector(".text");
    const aboutCharacter = document.querySelector(".about-character");
    const character = document.querySelector(".container .character");
    const sessionNumber = cell.classList.toString().split(" ")[1]; // cell 3 => 3

    // Если есть мини перс в ячейке, тогда убрать текст "Персонаж N"
    if (cell.contains(miniCharacter)) {
      text.style.display = "none";
    }

    // Если в ячейке был сохранен персонаж, тогда загрузить его
    const storedValue = localStorage.getItem(sessionNumber);
    const savedCharacter = document.createElement("div");
    savedCharacter.classList.add = "character mini";
    savedCharacter.innerHTML = storedValue;
    cell.appendChild(savedCharacter);

    /*
     * Скрывать сайдбар выбора персонажа, инфо о персонаже
     * Показывать сайдбар внешности, передвигать персонажа
     */
    cell.addEventListener("click", () => {
      sidebarPickCharacter.classList.add("deactive");
      aboutCharacter.classList.add("deactive");
      sidebarPickAppearence.classList.add("active");
      character.classList.add("appearence");
    });
  });
}
