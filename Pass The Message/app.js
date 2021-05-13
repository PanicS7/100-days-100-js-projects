const msg = document.getElementById("msg");

msg.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        deliver()
    }
});


function deliver() {
    var msgPlaceholder = document.getElementById("msgPlaceholder");
    var alertPlaceholder = document.getElementById("alertPlaceholder");

    if (msg.value.length <= 250 && msg.value.length > 0) {
        msgPlaceholder.innerText = msg.value;
        msg.value = "";
    }
    else if (msg.value.length > 250) {
        alertPlaceholder.classList.add("msgCharLimit");
        msg.value = "";
    }

    setTimeout(function () {
        alertPlaceholder.classList.remove("msgCharLimit");
    }, 3000);
        
}