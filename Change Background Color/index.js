const bgElement = document.querySelector("body");
var randomColor = "";
var red = 0;
var green = 0;
var blue = 0;

function changeBgColor() {
    red = randomRGB();
    green = randomRGB();
    blue = randomRGB();

    randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';

    bgElement.style.backgroundColor = randomColor;
}

function randomRGB() {
    return Math.floor(Math.random() * 256);
}