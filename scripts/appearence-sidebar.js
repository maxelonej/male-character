const sidebarPickCharacter = document.querySelector(".sidebar.pick-character");
const sidebarPickAppearence = document.querySelector(
  ".sidebar.pick-appearence",
);

if (sidebarPickAppearence) {
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

  const sessions = document.querySelectorAll(".sidebar.pick-character .cell");
  const miniCharacter = document.querySelector(".character.mini");

  sessions.forEach((session) => {
    session.addEventListener("click", () => {
      const sessionNumber = session.classList.toString().split(" ")[1]; // cell 3 => 3
      const isEdited = session.contains(miniCharacter); // true/false

      // Если нет персонажа - создаем, отображая только тело по дефолту
      if (!isEdited) {
        character.innerHTML =
          '<img class="body" src="images/character/body.png" alt="Тело персонажа">';
      }

      const cells = document.querySelectorAll(
        ".sidebar.pick-appearence .appearence .cell",
      );
      cells.forEach((cell) => {
        cell.addEventListener("click", () => {
          // .container .character > img.wig + img.face + img.shirt + img.pants
          // .pick-character .character.mini > img.wig + img.face + img.shirt + img.pants
          const appearenceImage = cell.querySelector(".icon"); // <img class="icon" src="images/appearence/face/1.png">
          const appearenceSrc = appearenceImage.getAttribute("src"); // images/appearence/face/1.png
          const currentAppearenceUrl = appearenceSrc.substring(
            18,
            appearenceSrc.length,
          ); // face/1.png
          const appearenceName = currentAppearenceUrl.split("/")[0]; // face

          // Путь одежды для персонажа, исходя из пути ячейки
          const outfitUrl = `images/outfit/${currentAppearenceUrl}`;

          const character = document.querySelector(".container .character");
          const face = character.querySelector(".face");
          const wig = character.querySelector(".wig");
          const shirt = character.querySelector(".shirt");
          const pants = character.querySelector(".pants");

          const characterImage = character.querySelector(`.${appearenceName}`);
          if (characterImage) {
            // Применить найденную одежду на персонажа
            switch (appearenceName) {
              case "face":
                face.src = outfitUrl;
                break;
              case "wig":
                wig.src = outfitUrl;
                break;
              case "shirt":
                shirt.src = outfitUrl;
                break;
              case "pants":
                pants.src = outfitUrl;
                break;
              // default:
              //   console.log(`${appearenceFromUrl} не существует`);
            }
          } else {
            // Если нет одежды персонажа - создаем
            const outfit = document.createElement("img");
            outfit.className = appearenceName;
            outfit.src = `images/outfit/${currentAppearenceUrl}`;
            switch (appearenceName) {
              case "face":
                outfit.classList.add = "face";
                break;
              case "wig":
                outfit.classList.add = "wig";
                break;
              case "shirt":
                outfit.classList.add = "shirt";
                break;
              case "pants":
                outfit.classList.add = "pants";
                break;
            }
            character.appendChild(outfit);
          }
        });
      });
    });
  });
}
