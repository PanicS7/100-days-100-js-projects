// Budget
$("#calculate").on("click", function () {
    addBudget();
});
$("#budgetForm input").keypress(function (e) {
    if (e.which == 13) {
        addBudget();
    }
});
// Add budget
function addBudget() {
    var budget = $("#budgetForm input").val();
    if (budget > 0) {
        $("#budgetValue").text(budget * 1);
        updateBalance();
        colorChange("#budgetValue", $("#budgetValue").text());
        colorChange("#balanceValue", $("#balanceValue").text());
    }
    else {
        // show alert
        $("#budgetAlert").text("Value Cannot Be Empty Or Negative");
        $("#budgetAlert").css({
            "padding": "10px"
        });
        setTimeout(function () {
            $("#budgetAlert").text("");
            $("#budgetAlert").css({
                "padding": "0"
            });
        }, 2000);  
    } 
    $("#budgetForm input").val("");
}

//Expense 
$("#addExpense").on("click", function () {
    addExpense();
});
$("#expense").keypress(function (e) {
    if (e.which == 13) {
        addExpense();
    }
});
// Add expense
function addExpense() {
    var expenseTitle = $("#expenseTitle").val();
    var expense = $("#expense").val();
    if (expenseTitle != "" && expense != "" && expense > 0) { // if user enter data
        // Update Value
        var newValue = $("#expensesValue").text() * 1 + expense * 1;
        $("#expensesValue").text(newValue);
        updateBalance();

        // Add expense to list
        var div = $("<div></div>");
        var title = $("<p></p>");
        title.text(expenseTitle);
        div.append(title);
        var value = $("<p></p>");
        value.text(expense);
        div.append(value);
        $("#addedDataContainer").append(div);
        var icons = $("<p></p>");
        icons.addClass("icons");
        var edit = $("<i></i>");
        edit.addClass("fas fa-edit");
        icons.append(edit);
        var bin = $("<i></i>");
        bin.addClass("fas fa-trash");
        icons.append(bin);
        div.append(icons);

        // Add click events
        edit.on("click", function () {
            $("#expenseTitle").val(title.text());
            $("#expense").val(value.text());
            div.remove();
            $("#balanceValue").text($("#balanceValue").text() * 1 + value.text() * 1);
            $("#expensesValue").text($("#expensesValue").text() * 1 - value.text() * 1);
            colorChange("#balanceValue", $("#balanceValue").text());
        });
        bin.on("click", function () {
            div.remove();
            $("#balanceValue").text($("#balanceValue").text() * 1 + value.text() * 1);
            $("#expensesValue").text($("#expensesValue").text() * 1 - value.text() * 1);

            colorChange("#balanceValue", $("#balanceValue").text());
        });

        colorChange("#balanceValue", $("#balanceValue").text());

        // RESET INPUT
        $("#expenseTitle").val("");
        $("#expense").val("");
    }
    else {
        // show alert
        $("#expenseAlert").text("Value Cannot Be Empty Or Negative");
        $("#expenseAlert").css({
            "padding": "10px"
        });
        setTimeout(function () {
            $("#expenseAlert").text("");
            $("#expenseAlert").css({
                "padding": "0"
            });
        }, 2000);           
    }
}

function updateBalance() {
    $("#balanceValue").text($("#budgetValue").text() * 1 - $("#expensesValue").text() * 1);
}
// Change color of element 
function colorChange(element, value) {
    if (value < 0) {
        $(element).css({
            "color": "red"
        });
    }
    else if (value > 0) {
        $(element).css({
            "color": "green"
        });
    }
    else {
        $(element).css({
            "color": "black"
        });
    }
}
