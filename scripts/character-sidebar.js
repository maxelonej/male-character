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

    /*
     При клике на ячейку:
     отключать боковую панель выбор персонажа
     TODO: убирать описание персонажа
     TODO: передвигать персонажа влево
     TODO: передвигать сайдбар внешки
     включать боковую панель выбор внешности
    */
    cell.addEventListener("click", () => {
      sidebarPickCharacter.classList.add("deactive");
      aboutCharacter.classList.add("deactive");
      sidebarPickAppearence.classList.add("active");
      character.classList.add("appearence");
    });

    // Если есть мини перс в ячейке, тогда убрать текст "Персонаж N"
    if (cell.contains(miniCharacter)) {
      text.style.display = "none";
    }
  });
}
