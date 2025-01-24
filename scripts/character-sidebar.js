const sidebarPickCharacter = document.querySelector(".sidebar.pick-character");
const sidebarPickAppearence = document.querySelector(
  ".sidebar.pick-appearence",
);

if (sidebarPickCharacter) {
  const cells = sidebarPickCharacter.querySelectorAll(".cell");
  cells.forEach((cell) => {
    const text = cell.querySelector(".text");
    const aboutCharacter = document.querySelector(".about-character");
    const character = document.querySelector(".container .character");

    // Если в ячейке был сохранен персонаж, тогда загрузить его
    const session = cell.getAttribute("data-id"); // for all sessions
    const storedValue = localStorage.getItem(session);
    const savedCharacter = document.createElement("div");
    savedCharacter.classList.add("character", "mini");

    if (storedValue) {
      // console.log(`Персонаж ${session} загружен ${storedValue}`);
      savedCharacter.innerHTML = storedValue;
      // Если есть мини перс в ячейке, тогда убрать текст "Персонаж N"
      text.style.display = "none";
      cell.appendChild(savedCharacter);
    } else {
      // console.log(`Персонаж ${session} не найден`);
    }

    /*
     * Скрывать сайдбар выбора персонажа, инфо о персонаже
     * Показывать сайдбар внешности, передвигать персонажа
     */
    cell.addEventListener("click", () => {
      sidebarPickCharacter.classList.add("deactive");
      aboutCharacter.classList.add("deactive");
      sidebarPickAppearence.classList.add("active");
      cell.classList.toggle("active");
      character.classList.add("appearence");

      const miniCharacter = cell.querySelector(".character.mini");

      // При заходе в сессию подгружать персонажа
      if (
        savedCharacter.innerHTML !== "" &&
        savedCharacter.innerHTML !== null
      ) {
        // Если есть мини персонаж - подгружаем на основной
        character.innerHTML = savedCharacter.innerHTML;
      } else {
        // Если нет персонажа - создаем обычного
        character.innerHTML = `
          <img class="wig" src="images/outfit/wig/6.png" alt="Парик персонажа" />
          <img class="face" src="images/outfit/face/2.png" alt="Лицо персонажа" />
          <img
            class="shirt"
            src="images/outfit/shirt/7.png"
            alt="Футболка персонажа"
          />
          <img
            class="pants"
            src="images/outfit/pants/2.png"
            alt="Штаны персонажа"
          />
          <img
            class="body"
            src="images/character/body.png"
            alt="Тело персонажа"
          />
        `;
      }
    });
  });
}
