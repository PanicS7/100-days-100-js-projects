// Buttons for adding event listeners
const allBtn = document.querySelector("[data-category='all']");
const cakeBtn = document.querySelector("[data-category='cake']");
const cupcakeBtn = document.querySelector("[data-category='cupcake']");
const dougnutBtn = document.querySelector("[data-category='dougnut']");
const sweetBtn = document.querySelector("[data-category='sweet']");
const modalContainer = document.querySelector(".modalContainer");
const modalBtn = document.querySelector(".fa-window-close");
const bodyElement = document.querySelector("body");

// Search btn
const searchBtn = document.getElementById("searchBtn");

// Card Elements
const cakeCards = document.querySelectorAll("[data-item='cake']");
const cupcakeCards = document.querySelectorAll("[data-item='cupcake']");
const dougnutCards = document.querySelectorAll("[data-item='dougnut']");
const sweetCards = document.querySelectorAll("[data-item='sweet']");
const allCards = document.querySelectorAll("[data-item]");

// Image List 
var imageList = [];
var imageIndex;

// Modal Arrows 
const leftArrow = document.querySelector(".fa-arrow-circle-left");
const rightArrow = document.querySelector(".fa-arrow-circle-right");

cakeBtn.addEventListener("click", function () {
    // hide all exept cake items
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "hide";
    }
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "show";
    }
});
cupcakeBtn.addEventListener("click", function () {
    // hide all exept cupcake items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "hide";
    }
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "show";
    }
});
dougnutBtn.addEventListener("click", function () {
    // hide all exept dougnut items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "hide";
    }
    for (let i = 0; i <cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "show";
    }
});
sweetBtn.addEventListener("click", function () {
    // hide all exept sweet items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "hide";
    }
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "hide";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
       dougnutCards[i].classList = "hide";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "show";
    }
});
allBtn.addEventListener("click", function () {
    // show all items
    for (let i = 0; i < cakeCards.length; i++) {
        cakeCards[i].classList = "show";
    }
    for (let i = 0; i < cupcakeCards.length; i++) {
        cupcakeCards[i].classList = "show";
    }
    for (let i = 0; i < dougnutCards.length; i++) {
        dougnutCards[i].classList = "show";
    }
    for (let i = 0; i < sweetCards.length; i++) {
        sweetCards[i].classList = "show";
    }
});

// Custom search
function customSearch() {
    var searchText = document.querySelector("input").value;
    var cardsList = []; // used as plaseholder for all cards what have searched text in it
    var filteredList = []; // removed duplicates from unsearchedCards
    var unsearchedCards = []; // all ther cards - used to add "hide" class

    // loot trought all cards and check if they have searched text in it
    for (let i = 0; i < allCards.length; i++) {
        allCards[i].classList = "show"; // restart displayed cards to all visible
        if (allCards[i].dataset.item.search(searchText) >= 0) {
            cardsList.push(allCards[i].dataset.item);
        }
        else {
            unsearchedCards.push(allCards[i].dataset.item);
        }
    }
    filteredList = [... new Set(unsearchedCards)]; //filter unsearched cards from duplicated
    var hiddenCards = [];

    for (let i = 0; i < filteredList.length; i++) {
        hiddenCards = (document.querySelectorAll("[data-item=" + filteredList[i] + "]"));
        for (let j = 0; j < hiddenCards.length; j++) {
            hiddenCards[j].classList = "hide";
        }

    }
    // clear input after search
    document.querySelector("input").value = "";
    document.querySelector("input").placeholder = "search";
}
// Custom search added to search btn
searchBtn.addEventListener("click", function () {
    customSearch();
});

// Custom search added to input and work when enter is pressed
document.querySelector("input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        customSearch();
    }
});

const shopingCart = document.querySelectorAll(".fa-shopping-cart");
const modalElement = document.querySelectorAll(".modal");
// Show shoping cart on hover of image - card-container
for (let i = 0; i < allCards.length; i++) {
    // show shoping cart on hover
    allCards[i].addEventListener("mouseover", function () {
        if (allCards[i].childNodes[1].childNodes[3].classList == "") {
            allCards[i].childNodes[1].childNodes[3].classList = "showShopingCart";
        }
    });
    // hide shoping cart whan user move mouse away
    allCards[i].addEventListener("mouseout", function () {
        if (allCards[i].childNodes[1].childNodes[3].classList == "showShopingCart") {
            allCards[i].childNodes[1].childNodes[3].classList = "";
        }
    });

    /* MODAL*/
    allCards[i].addEventListener("click", function () {
        let currentImage = allCards[i].childNodes[1].childNodes[1].src; // save clicked image
        modalContainer.classList.add("showModal"); // show modal
        bodyElement.classList.add("greyBackground"); // change background of page when modal is active
        modalContainer.childNodes[1].childNodes[1].src = currentImage; // let modal image match clicked
        imageIndex = i; // Save index of modal image - used to change image of modal with arrows
    });

    // Make image list
    imageList.push(allCards[i].childNodes[1].childNodes[1].src);
}

// modal btn 
modalBtn.addEventListener("click", function () {
    modalContainer.classList.remove("showModal"); // remove modal
    bodyElement.classList.remove("greyBackground"); // reverse background
    console.log(imageIndex);
});

// modal arrows 
leftArrow.addEventListener("click", function () {
    if (imageIndex == 0) {
        imageIndex = imageList.length-1;
    }
    else {
        imageIndex--;
    }
    modalContainer.childNodes[1].childNodes[1].src = imageList[imageIndex];
});
rightArrow.addEventListener("click", function () {
    if (imageIndex == imageList.length - 1) {
        imageIndex = 0;
    }
    else {
        imageIndex++;
    }
    modalContainer.childNodes[1].childNodes[1].src = imageList[imageIndex];
});


