const container = document.querySelector("#container");
const createGridButton = document.querySelector("#create-grid-button");

const initialGridSize = 16;

function createGrid(gridSize) {
    clearGrid();
    
    for (let i = 1; i <= gridSize; i++) {
        const cellRow = document.createElement("div");
        cellRow.className = "cellRow";
        for (let j = 1; j <= gridSize; j++) {
            const cellBorder = document.createElement("div");
            cellBorder.className = "cellBorder";

            const cell = document.createElement("div");
            cell.className = "cell";

            cell.addEventListener("mouseenter", (event) => {
                colorCell(event.target);
            });
            
            cellBorder.append(cell);
            cellRow.append(cellBorder);
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

function colorCell(target) {
    const currentOpacity = getCurrentOpacity(target);
    if (currentOpacity < 1) {
        const newOpacity = currentOpacity + 0.1;
        target.style.opacity = newOpacity;   
    }
                
    target.style.backgroundColor = getRandomColor(target);
}

function getRandomColor() {
    const red = getRandomNumber(0, 255);
    const green = getRandomNumber(0, 255);
    const blue = getRandomNumber(0, 255);

    return `rgba(${red}, ${green}, ${blue})`;
}

function getRandomNumber(min, max) {
    return min + Math.floor(Math.random() * (max - min + 1));
}

function getCurrentOpacity(target) {
    return parseFloat(window.getComputedStyle(target).getPropertyValue("opacity"));
}

createGridButton.addEventListener("click", promptGrid);

createGrid(initialGridSize);