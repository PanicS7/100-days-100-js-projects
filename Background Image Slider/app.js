const leftArrow = document.querySelector(".fa-arrow-left");
const rightArrow = document.querySelector(".fa-arrow-right");
const container = document.getElementById("container");

// List of all background images
var imagesList = [
    "./img/contBcg-0.jpeg",
    "./img/contBcg-1.jpeg",
    "./img/contBcg-2.jpeg",
    "./img/contBcg-3.jpeg",
    "./img/contBcg-4.jpeg"
];
var index = 0;

// Select previous image from list if left arrow is clicked
leftArrow.addEventListener("click", function () {
    if (index == 0) {
        // if image is already first, show last image 
        index = imagesList.length - 1; 
    }
    else {
        index--;
    }
    // change background of container
    container.style.backgroundImage = `url(${imagesList[index]})`;
});
// Select next image from list if right arrow is clicked
rightArrow.addEventListener("click", function () {
    if (index == imagesList.length - 1) {
        // if image is already last, show first image 
        index = 0;
    }
    else {
        index++;
    }
    // change background of container
    container.style.backgroundImage = `url(${imagesList[index]})`
});
