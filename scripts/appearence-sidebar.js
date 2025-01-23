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

  const cellsWrapper = sidebarPickAppearence.querySelector(".appearence");
  const cells = cellsWrapper.querySelectorAll(".cell");

  const appearences = sidebarPickAppearence.querySelectorAll(".icon_container");
  appearences.forEach((appearence) => {
    // При клике на иконку: (парик/одежда/тд)
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
      appearence.classList.add("active");
      // Узнать что это за внешность (face/wig/pants/etc)
      const activeAppearence = appearence.classList[1];
      uploadCells(activeAppearence);
    });
  });

  // Подгрузка внешности в ячейки от активной иконки
  const uploadCells = (activeAppearence) => {
    for (let i = 1; i <= cells.length; i++) {
      const image = document.createElement("img");
      image.className = "icon";
      image.src = `images/appearence/${activeAppearence}/${i}.png`;

      // Костыль без бекенда
      // Изображения грузятся 1-12.png, даже если их нет
      // TODO: изменить
      image.onerror = () => {
        image.remove();
        console.clear();
      };

      cells[i - 1].appendChild(image);
    }
  };

  // По умолчанию первая иконка - активна
  appearences[0].classList.add("active");
  uploadCells(appearences[0].classList[1]);

  cells.forEach((cell) => {
    cell.addEventListener("click", () => {
      // TODO: добавить прозрачную иконку и обозначить, что не искать такую же и не добавлять её на перса

      // .container .character > img.wig + img.face + img.shirt + img.pants
      // .pick-character .character.mini > img.wig + img.face + img.shirt + img.pants
      // брать путь дочернего элемента - изображения.icon
      const icon = cell.querySelector(".icon");
      const iconUrl = icon.getAttribute("src"); // images/appearence/face/1.png
      const currentAppearenceUrl = iconUrl.substring(18, iconUrl.length); // face/1.png
      const appearenceFromUrl = currentAppearenceUrl.split("/")[0]; // face

      // Путь одежды для персонажа, исходя из пути ячейки
      const outfitUrl = `images/outfit/${currentAppearenceUrl}`;
      // применить найденное на персонажа
      const character = document.querySelector(".container .character");

      switch (appearenceFromUrl) {
        case "face":
          const face = character.querySelector(".face");
          face.src = outfitUrl;
          break;
        case "wig":
          const wig = character.querySelector(".wig");
          wig.src = outfitUrl;
          break;
        case "shirt":
          const shirt = character.querySelector(".shirt");
          shirt.src = outfitUrl;
          break;
        case "pants":
          const pants = character.querySelector(".pants");
          pants.src = outfitUrl;
          break;
        // default:
        //   console.log(`${appearenceFromUrl} не существует`);
      }
      // TODO: by click on new session: add img.body src="images/body/human.png"
      // TODO: different session by .cell.1 .cell.2 ~ .cell.4 by localStorage smhw
    });
  });
}
