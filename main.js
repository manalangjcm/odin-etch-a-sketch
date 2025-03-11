const container = document.querySelector("#container");
const createGridButton = document.querySelector("#create-grid-button");

const initialGridSize = 16;

function createGrid(gridSize) {
    clearGrid();
    
    for (let i = 1; i <= gridSize; i++) {
        const cellRow = document.createElement("div");
        cellRow.className = "cellRow";
        for (let j = 1; j <= gridSize; j++) {
            const cell = document.createElement("div");
            cell.className = "cell";

            cell.addEventListener("mouseenter", (event) => {
                cell.style.backgroundColor = "black";
            });

            cellRow.append(cell);
        }

        container.append(cellRow);
    }
}

function clearGrid() {
    container.innerHTML = '';
}

function promptGrid() {
    let gridSize = prompt("Please enter new grid size. (Max: 100)");

    while (gridSize <= 1 || gridSize > 100) {
        gridSize = prompt("Invalid grid size. Please enter new grid size. (Max: 100)");
    }

    createGrid(gridSize);
    
}

createGridButton.addEventListener("click", promptGrid);

createGrid(initialGridSize);