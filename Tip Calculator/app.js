const btn = document.querySelector("button");
const tipAmountPlaceholder = document.getElementById("tipAmount");
const totalAmountPlaceholder = document.getElementById("totalAmount");
const perPersonPlaceholder = document.getElementById("perPerson");
const tipPlaceholder = document.querySelector(".tip");
const alertForBlank = document.querySelector(".alertForBlank");

btn.addEventListener("click", function () {
    var billAmount = document.getElementById("billAmount").value * 1;
    var numOfPeople = document.getElementById("numOfPeople").value * 1;
    var service = document.getElementById("service").value;

    if ((billAmount == "") || (numOfPeople == "") || (service == "choose")) {
        if (billAmount == "") {
            alertBlank("alertForBill");
        }
        if (numOfPeople == "") {
            alertBlank("alertForUser");
        }
        if (service == "choose") {
            alertBlank("alertForService");
        }
        else if (numOfPeople == "") {
            alertForUser.style.display = "block";
        }
        else {
            alertForService.style.display = "block";
        }
    }
    else {
        // calculate
        calculateTip(billAmount, numOfPeople, service);
    }
    
});

// calculate tip when user click on button
function calculateTip(bill, people, percent) {
    const tipPercent = {
        great: 20,
        good: 10,
        bad: 2
    };
    // tip amount
    var tipAmount = bill * (tipPercent[percent] / 100);
    // total
    var total = bill + tipAmount;
    // per person
    var perPerson = total / people;

    updateData(Math.round(tipAmount), Math.round(total), Math.round(perPerson));
}

//update data to placeholder
function updateData(amount, totalPay, eachPerson) {
    var image = document.querySelector("img");
    image.classList = "show";
    setTimeout(function () {
        tipAmountPlaceholder.innerText = amount;
        totalAmountPlaceholder.innerText = totalPay;
        perPersonPlaceholder.innerText = eachPerson;

        tipPlaceholder.style.display = "block";
        image.classList = "";
        setTimeout(function () {
            tipAmountPlaceholder.innerText = "";
            totalAmountPlaceholder.innerText = "";
            perPersonPlaceholder.innerText = "";

            tipPlaceholder.style.display = "none";

        }, 5000);

    }, 3000);

}

//alert 
function alertBlank(alertType) {
    var message = {
        alertForBill: "Bill Amount Cannot Be Blank",
        alertForUser: "Number Of Users Must Be Greater Than Zero",
        alertForService: "You Must Select A Service",

    }
    alertForBlank.style.display = "block";
    var alertTypePlaceholder = document.getElementById(alertType);
    alertTypePlaceholder.innerText = message[alertType];
    setTimeout(function () {
        alertForBlank.style.display = "none";
        alertTypePlaceholder.innerText = "";
    }, 3000);
}
