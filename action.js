var arr = [];
var idCounter = 0;
var btn = document.getElementById("bttn");
var comArea = document.getElementById("comment");
var emailGlobal = document.getElementById("email");
var list = document.getElementById("itemList");

btn.addEventListener("click", function onClick() {
    addItem();
    displayComments();
    comArea.value = "";
    email.value = "";

});

function addItem() {
    var item = {
        id: idCounter,
        email: emailGlobal.value,
        comment: comArea.value
    }
    if ((item.comment === "") || (item.email === "")) {
        return;
    }
    arr.push(item);
    idCounter++;
}

function displayComments() {
    list.innerHTML = "";
    arr.forEach((item) => {
        var li = document.createElement("li");
        li.innerText = item.comment;
        li.id = item.id;
        delButton(li);
        list.appendChild(li);
    });
}

function delButton(parent) {
    var buttonElem = parent.appendChild(document.createElement("button"));
    buttonElem.innerHTML = "X";
    buttonElem.onclick = function () {
        for (var i = 0; i < arr.length; i++) {
            if (this.parentElement.id == arr[i].id) {
                arr.splice(i, 1);
                displayComments();
            }
        }
    }
}