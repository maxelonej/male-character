// :has(.character.mini) .text {
//   display: none;
// }

// Если есть мини перс в ячейке, тогда убрать текст "Персонаж N"
const sidebarPickCharacter = document.querySelector(".sidebar.pick-character");
if (sidebarPickCharacter) {
  const cells = document.querySelectorAll(".cell");
  cells.forEach((cell) => {
    const miniCharacter = cell.querySelector(".character.mini");
    const text = cell.querySelector(".text");
    if (cell.contains(miniCharacter)) {
      text.style.display = "none";
    }
  });
}
