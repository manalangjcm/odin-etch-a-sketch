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

            cell.addEventListener("mouseenter", () => {
                cell.style.backgroundColor = getRandomColor();
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

function getRandomColor() {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);

    return `rgb(${red}, ${green}, ${blue})`;
}

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

createGridButton.addEventListener("click", promptGrid);

createGrid(initialGridSize);