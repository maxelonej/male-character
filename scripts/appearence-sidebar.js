// TODO: Load pics from ./images to sidebarPickAppearence.content.appearence.cell as img.icon

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
}
