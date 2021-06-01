const addBtn = document.getElementById("add");
const clearBtn = document.getElementById("clear");
const todoBody = document.getElementById("todoBody");

// Start app if user click button
addBtn.addEventListener("click", function () {
    startApp();
});

// Start app if user click enter
document.querySelector("input").addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        startApp();
    }
});

function startApp() {
    // Take value of users input
    let input = document.getElementById("input").value;

    // If input is not empty start app
    if (input != "") {
        // Create div
        var list = document.createElement("div");
        list.id = "list";
        // add div to body of to-do App
        todoBody.appendChild(list);
        // Make paragraf tag
        let para = document.createElement("p");
        // Make input as text of paragraf
        let node = document.createTextNode(input);
        // Add text(input) to paragraf
        para.appendChild(node);
        // Add paragraf to div
        list.appendChild(para);
        para.id = "para";

        // Make check icon
        let iconCheck = document.createElement("p");
        iconCheck.innerHTML += '<i class="fas fa-check-circle"></i>';
        list.appendChild(iconCheck);
        iconCheck.style.color = "green";

        // Make edit icon
        let iconEdit = document.createElement("p");
        iconEdit.innerHTML += '<i class="fas fa-edit"></i>';
        list.appendChild(iconEdit);
        iconEdit.style.color = "blue";

        // Make remove icon
        let iconRemove = document.createElement("p");
        iconRemove.innerHTML += '<i class="fas fa-times"></i>';
        list.appendChild(iconRemove);
        iconRemove.style.color = "red";

        // Add function for done/check btn
        iconCheck.addEventListener("click", function () {
            // Add line through and remove if already exist
            if (para.style.textDecoration != "line-through") {
                para.style.textDecoration = "line-through";
                iconCheck.style.color = "grey";
            }
            else {
                para.style.textDecoration = "none";
                iconCheck.style.color = "green";
            }
        });

        // Add function for edit btn
        iconEdit.addEventListener("click", function () {
            list.remove();
            document.getElementById("input").value = input;
        });

        // Add function for remove btn
        iconRemove.addEventListener("click", function () {
            // Remove method will remove element from dom
            list.remove();
        });
    }

    // Clear Input 
    document.getElementById("input").value = "";

    // select clear element btn and remove everything
    clearBtn.addEventListener("click", function () {
        // remove each list from todo Body
        for (let i = 0; i < todoBody.childNodes.length; i++) {
            todoBody.childNodes[i].remove();
        }
    });
}