const sidebarPickCharacter = document.querySelector(".sidebar.pick-character");
const sidebarPickAppearence = document.querySelector(
  ".sidebar.pick-appearence",
);

if (sidebarPickAppearence) {
  // const cells = sidebarPickCharacter.querySelectorAll(".cell");
  // cells.forEach((cell) => {
  const backToCharacterSelection = sidebarPickAppearence.querySelector(".back");
  const aboutCharacter = document.querySelector(".about-character");
  const character = document.querySelector(".container .character");

  backToCharacterSelection.addEventListener("click", () => {
    sidebarPickCharacter.classList.remove("deactive");
    aboutCharacter.classList.remove("deactive");
    sidebarPickAppearence.classList.remove("active");
    character.classList.remove("appearence");
  });

  const cells = sidebarPickAppearence.querySelectorAll(".appearence .cell");

  const appearences = sidebarPickAppearence.querySelectorAll(".icon_container");
  appearences.forEach((appearence) => {
    appearence.addEventListener("click", () => {
      // Удалить у всех .icon_container класс .active
      appearences.forEach((appearence) =>
        appearence.classList.remove("active"),
      );
      // Удалить у всех ячеек существовавшие изображения
      cells.forEach((cell) => {
        cell.innerHTML = "";
      });

      // Присвоить текущему .icon_container класс active
      appearence.classList.add = "active";
      const activeAppearence = appearence.classList[1];
      uploadCells(activeAppearence);
    });
  });

  // Подгрузка внешности в ячейки от активной иконки
  const uploadCells = (activeAppearence) => {
    for (let i = 1; i <= cells.length; i++) {
      const image = document.createElement("img");
      image.className = "icon";
      image.src = `../images/appearence/${activeAppearence}/${i}.png`;

      // Костыль без бекенда
      // Изображения грузятся 1-12.png, даже если их нет
      // TODO: изменить
      image.onerror = () => {
        image.remove();
        console.clear();
      };

      cells[i - 1].appendChild(image);
    }
    const image = document.createElement("img");
  };

  // По умолчанию первая иконка - активна
  appearences[0].classList.add("active");
  uploadCells(appearences[0].classList[1]);
}
