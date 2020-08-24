const CANVAS = document.querySelector("#canvas");

const makeGrid = () => {
    // grid 16 x 16
    for (let i = 1; i <= 16; i++) {
        CANVAS.appendChild(document.createElement('div')).className = "canvasRow";
        for (let j = 1; j <= 16; j++) {
            CANVAS.lastChild.appendChild(document.createElement('div')).className = "canvasColumn";
        }
    }
};

makeGrid();