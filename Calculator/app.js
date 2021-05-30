/* 
   Coded by: Sanja Panic
   Date: 28.08.2020
   
   bug fixed:
   25.12.2020 - calculator show error in console whan divide with 0

   bug fixed: 
   24.05.2021 - if you continue to calculate after seeing "Cant divide with 0" output will be NAN - not a number - now calculator clear screen

    feature idea:
    add clear for last character/number 
*/


// default variables
var currentValue = "";
var previousValue = "";
var operationSymbol = "";
var output = "";

// function what calculate final result
function calculate(previous, current, operation) {
    if (previous == "Can't divide with 0") {
        clearEverything();
    }
    else {
        if (operation == "+") {
            output = previous * 1 + current * 1;
        }
        else if (operation == "-") {
            output = previous * 1 - current * 1;
        }
        else if (operation == "*") {
            output = (previous * 1) * (current * 1);
        }
        else if (operation == "/") {
            if (current == 0) {
                output = "Can't divide with 0";
            }
            else {
                output = previous * 1 / current * 1;
            }
        }

        // fix js float accuracy problem
        if (Number.isInteger(output) == false) {
            if (typeof output != "string") {
                output = output.toFixed(2);
            }
        }

        updateScreen(output);
    }
    
}

// add to screen what user type
function appendToScreen(id) {
    if ((id == ".") && (currentValue.indexOf(".") >= 0)) {
    }
    else {
        var current = document.getElementById("current");

        currentValue = document.getElementById("current").innerText;
        currentValue += id;

        current.innerText = currentValue;      
    }
}


// choose operation 

function operationsFn(id) {
    // if first input is "-", if user type negative number wait for number
    if ((previousValue == "") && (currentValue == "") && (id == "-")) {
        currentValue = id;
        document.getElementById("current").innerText = id;
    }
    // if all is empty and operation is selected dont show on screen anything
    else if ((previousValue == "") && (currentValue == "")) {

    }
    else {
        //whan screen have just current number, typed by user
        if ((previousValue == "") && (output == "")) {
            previousValue = currentValue; document.getElementById("current").innerText = ""; document.getElementById("previous").innerText = previousValue + id;

            operationSymbol = id;
            currentValue = "";
        }
        else if ((previousValue != "") && (output == "") && (currentValue == "")) {
            operationSymbol = id;
            document.getElementById("previous").innerText = previousValue + id;
        }

        // all other case
        else {

            compute();
            document.getElementById("previous").innerText = output + id;
            document.getElementById("current").innerText = "";
            currentValue = "";
            previousValue = output;
            operationSymbol = id;
        }
    }
}
// whan called start calculation
function compute() {
    if ((document.getElementById("current").innerText != "") && (document.getElementById("previous").innerText != "")) {
        calculate(previousValue, currentValue, operationSymbol);
    }
}


//update on screen result and restart
function updateScreen(output) {
    document.getElementById("current").innerText = output;
    document.getElementById("previous").innerText = "";

}

// whan called clear and restart everything
function clearEverything() {
    document.getElementById("previous").innerText = "";
    previousValue = "";
    document.getElementById("current").innerText = "";
    currentValue = "";
    output = "";
    operationSymbol = "";
}