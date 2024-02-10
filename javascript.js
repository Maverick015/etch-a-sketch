let size = document.getElementById("gridSize");
let screen = document.querySelector(".sketchScreen");

makeGrid(size.value);

createGrid.addEventListener('click', () => {
  makeGrid(size.value);
});

function makeGrid(size) {
  // Clear the screen before creating a new grid
  screen.innerHTML = '';

  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      row.classList.add("row");
      row.style.border = "2px solid black";
      column.appendChild(row);
    }
    screen.appendChild(column);
  }

  // Add event listeners to the squares after creating the grid
  [...document.querySelectorAll(".column > .row")].forEach((square) => {
    const colors = ["blue", "red", "green", "yellow", "orange", "purple"];
    let colorIndex = 0; // Initialize color index
    square.addEventListener("click", function () {
      // Change background color to next color in array
      square.style.backgroundColor = colors[colorIndex];
      // Increment color index and reset to 0 if it exceeds the length of the array
      colorIndex = (colorIndex + 1) % colors.length;
    });
  });
}

function resetSketch() {
  let squares = screen.querySelectorAll('.row');
  squares.forEach(element => {
    element.remove();
  });
}
