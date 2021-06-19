// Show question and answer modal
$("#addQuestion").on("click", function () {
    $("#questionModal").show();
});

// Close question and answer modal 
$(".fa-window-close").on("click", function () {
    $("#questionModal").hide();
    $("textarea").val(""); // reset input
});

// When user click Save
$("#submit").on("click", function () {
    // Take data
    var question = $("#textQuestion").val();
    var answer = $("#textAnswer").val();
    // If both have value
    if (question != "" && answer != "") {
        $("textarea").val(""); // reset input

        // Create flashcard
        var flashcardsContainer = $("#flashcardsContainer");
        var flashcard = $("<div></div>");
        flashcard.addClass("flashcard");
        flashcardsContainer.append(flashcard)
        // make selected flashcard expand if answer is visible
        flashcard.css({ 
            "height": "100%"
        });
        // Question
        var questionElement = $("<h1></h1>");
        questionElement.text(question);
        flashcard.append(questionElement);
        // Answer 
        var answerBtn = $("<a></a>");
        answerBtn.text("Show/Hide Answer");
        flashcard.append(answerBtn);
        var answerElement = $("<p></p>");
        answerElement.text(answer);
        flashcard.append(answerElement);
        // Buttons
        var btnGroup = $("<div></div>");
        btnGroup.addClass("btnGroup");
        flashcard.append(btnGroup);
        var editBtn = $("<button></button>");
        editBtn.text("EDIT");
        editBtn.addClass("editBtn");
        btnGroup.append(editBtn);
        var deleteBtn = $("<button></button>");
        deleteBtn.text("DELETE");
        deleteBtn.addClass("deleteBtn");
        btnGroup.append(deleteBtn);

        // Answer modal
        answerBtn.on("click", function () {
            answerElement.toggle();
        });

        // Edit 
        editBtn.on("click", function () {
            $("#textQuestion").val(questionElement.text());
            flashcard.remove();
        });

        // Delete
        deleteBtn.on("click", function () {
            flashcard.remove();
        });
    }

    // Notify user to enter question and answer
    else {
        $("#alert").show();
        setTimeout(function () {
            $("#alert").hide();
        }, 2000);      
    }
});