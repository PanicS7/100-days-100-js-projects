$("#submit").click(function () {

        // Images (random select)
        const images = ["cust-0.jpg", "cust-1.jpg", "cust-2.jpg", "cust-3.jpg", "cust-4.jpg", "cust-5.jpg"];
        var randomImage = "./img/" + images[Math.floor(Math.random() * images.length)];

        // Get data from inputs and save as object
        var customerName = $("#customerName").val();
        var course = $("#course").val();
        var author = $("#author").val();

        if (customerName != "" && course != "" && author != "") {
            $("#alertMsg").text("Calculating....."); // show alert
            $("#loadingImg").attr("src","./img/loading.gif"); // show loading image

            setTimeout(function () { // update course after 2sec
            function CourseContainer(cn, c, a) {
                this._customerName = cn;
                this._course = c;
                this._author = a;
            }
            var newCourse = new CourseContainer(customerName, course, author);


            // Create elements
            var div = $("<div></div>"); // course container
            var imageDiv = $("<div></div>"); // image container
            var courseText = $("<div></div>"); // text container
            var image = $("<img/>");
            image.attr("src", randomImage);
            var pName = $("<p></p>");
            var pCourse = $("<p></p>");
            var pAuthor = $("<p></p>");
            var sName = $("<span></span>");
            sName.text("Name");
            var sCourse = $("<span></span>");
            sCourse.text("Course");
            var sAuthor = $("<span></span>");
            sAuthor.text("Author");
            var sNameValue = $("<span></span>");
            sNameValue.text(newCourse._customerName);
            var sCourseValue = $("<span></span>");
            sCourseValue.text(newCourse._course);
            var sAuthorValue = $("<span></span>");
            sAuthorValue.text(newCourse._author);

            // Add classes
            div.addClass("courseContainer");
            imageDiv.addClass("imageContainer");
            courseText.addClass("courseText");
            sName.addClass("name");
            sCourse.addClass("course");
            sAuthor.addClass("author");

            // Add elements to DOM
            $("main").append(div);
            div.append(imageDiv);
            div.append(courseText);
            imageDiv.append(image);
            courseText.append(pName, pCourse, pAuthor);
            pName.append(sName, sNameValue);
            pCourse.append(sCourse, sCourseValue);
            pAuthor.append(sAuthor, sAuthorValue);

            $("#customerName").val("");
            $("#customerName").parent().css({
                "border": "2px solid #c26104"
            });
            $("#course").val("");
            $("#course").parent().css({
                "border": "2px solid #c26104"
            });
            $("#author").val("");
            $("#author").parent().css({
                "border": "2px solid #c26104"
            });
            }, 2000);
        }

        else {
            if (customerName == "") {
                $("#customerName").parent().css({
                    "border": "2px solid red"
                });
            }
            if (course == "") {
                $("#course").parent().css({
                    "border": "2px solid red"
                });
            }
            if (author == "") {
                $("#author").parent().css({
                    "border": "2px solid red"
                });
            }
        }

    setTimeout(function () {
         // remove alert
        $("#alertMsg").text("");
        $("#loadingImg").attr("src", ""); // remove loading image
    }, 2000);
});

// Change border color to notify user that input must have value
$("#customerName").add("#course").add("#author").on("change", function () {
    if ($(this).val()) {
        $(this).parent().css({
            "border": "2px solid green"
        });
    }
    else {
        $(this).parent().css({
            "border": "2px solid red"
        });
    }
}).on("focus", function () {
    $(this).parent().css({
        "border": "2px solid aqua"
    });
});
