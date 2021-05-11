const bgElement = document.querySelector("body");
const spanElement = document.querySelector("span");
var randomColor = "";
var hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

function changeBgColor() {
    for (let i = 0; i < 6; i++) {
        randomColor += randomHEX();
    }
    bgElement.style.backgroundColor = "#" + randomColor;
    spanElement.innerText = "#" + randomColor;
    randomColor = "";
}

function randomHEX() {
    return hex[Math.floor(Math.random() * hex.length)];
}
