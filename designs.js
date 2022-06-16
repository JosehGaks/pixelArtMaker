// Select color input
const colorInput = document.querySelector("#colorPicker");
// select table element
const table = document.getElementById("pixelCanvas");
// select the size input form
const form = document.querySelector("form");

function submitForm(event) {
  event.preventDefault(); // to prevent reloading
  table.innerHTML = "";
  table.style.backgroundColor = "white";

  // Select size input
  let grid_size_height = Number(form.elements.height.value);
  let grid_size_width = Number(form.elements.width.value);

  // When size is submitted by the user, call makeGrid()
  makeGrid(grid_size_height, grid_size_width);
}
// add an event listener to the form
form.addEventListener("submit", submitForm);

function makeGrid(gridSizeHeight, gridSizeWidth) {
  for (let index = 0; index < gridSizeHeight; index++) {
    // create tr element for the table rows corresponding to the grid height value
    const row = document.createElement("tr");
    table.appendChild(row);
    //for each row insert cells corresponding to the grid width value
    for (let index = 0; index < gridSizeWidth; index++) {
      row.insertCell();
    }
  }
}

const changePixelColor = (event) => {
  if (event.target.nodeName === "TD") {
    event.target.style.backgroundColor = colorInput.value;
  }
};

table.addEventListener("click", changePixelColor);
