const CLEAR_BTN = document.querySelector("#clear_btn");

const getRandomNumInRange = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
};
// 25.5
const getRandomRGB = () => {
    return `rgb(${getRandomNumInRange(255)}, ${getRandomNumInRange(255)}, ${getRandomNumInRange(255)})`;
}

const makeCanvas = () => {
    // let canvasSize = parseInt(window.prompt("New Canvas Size: ", 40));
    document.body.appendChild(document.createElement('div')).id = "canvas";
    
    for (let i = 1; i <= 16; i++) {
        document.querySelector("#canvas").appendChild(document.createElement('div')).className = "canvasColumn";
        for (let j = 1; j <= 16; j++) {
            document.querySelector("#canvas").lastChild.appendChild(document.createElement('div')).className = "canvasCell";
        }
    }

    document.querySelectorAll(".canvasCell").forEach((cell) => {
        cell.addEventListener('mouseover', (event) => {
            if (event.target.style.backgroundColor) {
                const REGEX = /\d+/g;
                const RGB_ARR = event.target.style.backgroundColor.match(REGEX)
                const RGB_RED = RGB_ARR[0];
                const RGB_GREEN = RGB_ARR[1];
                const RGB_BLUE = RGB_ARR[2];

                event.target.style.backgroundColor = `rgb(${RGB_RED - 25.5}, ${RGB_GREEN - 25.5}, ${RGB_BLUE - 25.5})`;
            } else {
                event.target.style.backgroundColor = getRandomRGB();
            }
        });
    });
};

const deleteCanvas = () => {
    document.querySelector("#canvas").remove();
}

makeCanvas();

CLEAR_BTN.addEventListener('click', (event) => {
    deleteCanvas();
    makeCanvas();
});

