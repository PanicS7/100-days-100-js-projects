const submitBtn = document.getElementById("submit");
const clearBtn = document.getElementById("clear");
const inputPlaceholder = document.querySelector("input");
const listPlaceholder = document.getElementById("list");
var clicked = false; // checker for clear items button, check if item is added to list

submitBtn.addEventListener("click", function () {
    if (inputPlaceholder.value == "") {
        // show alert
        let addAlert = document.getElementById("addAlert");
        addAlert.style.display = "block";
        addAlert.innerText = "Please Add Grocery Item";
        addAlert.style.color = "red";

        setTimeout(function () {
            addAlert.innerText = "";
            addAlert.style.display = "none";
        }, 2000);
    }
    else {
        // add item to list and show alert
        addToList();
    }
});
// Custom search added to input and work when enter is pressed
inputPlaceholder.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        addToList();
    }
});

function addToList() {
    // Show Alert when item is added to list
    let addedAlert = document.getElementById("addedAlert");
    addedAlert.style.display = "block";
    addedAlert.innerText = inputPlaceholder.value + " Added To The List";
    addedAlert.style.color = "yellow";
    setTimeout(function () {
        addedAlert.innerText = "";
        addedAlert.style.display = "none";
    }, 2000);

    // Create Item container
    var inputedText = inputPlaceholder.value;
    var itemContainer = document.createElement("div");
    listPlaceholder.appendChild(itemContainer);
    itemContainer.className = "itemContainer";

    var textElement = document.createElement("p");
    textElement.innerText = inputedText;
    itemContainer.appendChild(textElement);

    var iconElement = document.createElement("p");
    iconElement.innerHTML = '<i class="fas fa-trash"></i>';
    itemContainer.appendChild(iconElement);
    iconElement.style.cursor = "pointer";


    // Add function for remove btn / bin icon
    iconElement.addEventListener("click", function () {
        // Remove method will remove element from dom
        itemContainer.remove();
        // Show alert when single item is removed
        let removeAlert = document.getElementById("removeAlert");
        removeAlert.innerText = iconElement.parentNode.childNodes[0].innerText + " Removed From The List";
        removeAlert.style.color = "red";
        removeAlert.style.display = "block";
        setTimeout(function () {
            removeAlert.innerText = "";
            removeAlert.style.display = "none";
        }, 1000);
    });

    inputPlaceholder.value = ""; // reset input to empty

    // When "clear items" button is clicked remove all items from list
    clearBtn.addEventListener("click", function () {
        if (listPlaceholder.childNodes.length != 0) {
            // clear list
            for (let i = 0; i < listPlaceholder.childNodes.length; i++) {
                listPlaceholder.childNodes[i].remove();
            }
        }
    });

    clicked = true; // item is added to list
}

// Show alert when "clear items" button is clicked
clearBtn.addEventListener("click", function () {
    if (clicked == false) { // if item is not in list
        // show alert
        let clearAlertNoMore = document.getElementById("clearAlertNoMore");
        clearAlertNoMore.style.display = "block";
        clearAlertNoMore.innerText = "No More Items To Delete";
        clearAlertNoMore.style.color = "red";

        setTimeout(function () {
            clearAlertNoMore.innerText = "";
            clearAlertNoMore.style.display = "none";
        }, 2000);
    }
    else { // if item is in list
        let clearAlertAll = document.getElementById("clearAlertAll");
        clearAlertAll.style.display = "block";
        clearAlertAll.innerText = "All Items Deleted";
        clearAlertAll.style.color = "red";
        setTimeout(function () {
            clearAlertAll.innerText = "";
            clearAlertAll.style.display = "none";
        }, 2000);

        clicked = false; // item is removed from list
    }
});




