document.addEventListener('DOMContentLoaded', generateGrid);


function generateGrid() {
    const container = document.getElementById('container');
    const gridSize = 16;
    const squareSize = 70 / gridSize; // Calcula el tamaño de cada cuadrado en porcentaje

    container.innerHTML = ''; // Limpia el contenido existente

    for (let i = 0; i < gridSize * gridSize; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareSize}%`; // Establece el ancho en función del tamaño de la cuadrícula
        square.style.paddingBottom = `${squareSize}%`; // Mantiene la proporción cuadrada
        square.addEventListener('mouseover', changeColor);
        container.appendChild(square);
    }

    // Ajusta el ancho del contenedor según el nuevo tamaño de la cuadrícula
    container.style.width = `${gridSize * squareSize}%`; // Ajusta el valor según tu diseño
}

var color 
function setBlack(){
    color = 0
}
function setGray(){
    color = 1
}
function changeColor(event) {
    const square = event.target; // Change the color value as needed

    if (color === 0) {
        square.classList.add('black');
        square.classList.remove('gray', 'white');
    } else if (color === 1) {
        square.classList.add('gray');
        square.classList.remove('black', 'white');
    }
}

function resetGrid() {
    const squares = document.querySelectorAll('.square');
    
    squares.forEach(square => {
        square.classList.remove('black', 'gray');
    });
}
