export default function createGameboard() {
  let userGrid = document.querySelector(".userGrid");
  let computerGrid = document.querySelector(".computerGrid");

  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("gridBox");
      gridBox.setAttribute("x", i);
      gridBox.setAttribute("y", j);
      gridBox.setAttribute("id", `U${i}${j}`);
      userGrid.appendChild(gridBox);
    }
  }
  for (let i = 1; i < 11; i++) {
    for (let j = 1; j < 11; j++) {
      let gridBox = document.createElement("div");
      gridBox.classList.add("gridBox");
      gridBox.setAttribute("x", i);
      gridBox.setAttribute("y", j);
      gridBox.setAttribute("id", `C${i}${j}`);
      computerGrid.appendChild(gridBox);
    }
  }
}
