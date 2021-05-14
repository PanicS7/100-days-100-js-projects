var counter = document.querySelector("p");

const lowerBtn = document.getElementById("lowerBtn");
lowerBtn.addEventListener("click", function () {
    counter.innerText = counter.innerText * 1 - 1;
    changeColor();
});


const addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function () {
    counter.innerText = counter.innerText * 1 + 1;
    changeColor();
});

function changeColor() {
    if (counter.innerText > 0) {
        counter.style.color = "green";
    }
    else if (counter.innerText < 0) {
        counter.style.color = "red";
    }
    else {
        counter.style.color = "white";
    }
}