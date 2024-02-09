let globalid = 0;
let parent = document.getElementById("list");

function Delete(id) {
    let element = document.getElementById(id);
    element.parentNode.removeChild(element);
    saveData()
}

function Edit(id) {
    let parent1 = document.getElementById(id);
    let newTitle = prompt("Enter New ToDo!!")
    if(newTitle != null && newTitle.trim() != "") {
        parent1.children[0].innerHTML = newTitle;
    }
    else {
        alert("You must write something");
    }
    saveData();
}

function toDo(id) {
    let child = document.createElement("div");
    let firstGrandChild = document.createElement("li");
    let secondGrandChild = document.createElement("button");
    let thirdGrandChild = document.createElement("button");

    let value = document.getElementById("input-box").value;

    if (value.trim() === "") {
        alert("You must write something")
    }

    else {
        firstGrandChild.innerHTML = value;
        secondGrandChild.innerHTML = "Edit";
        secondGrandChild.setAttribute("onClick", `Edit(${id})`);
        secondGrandChild.setAttribute("id", "edit-button");
        thirdGrandChild.innerHTML = "Delete";
        thirdGrandChild.setAttribute("onClick", `Delete(${id})`);
        thirdGrandChild.setAttribute("id", "delete-button");
        child.appendChild(firstGrandChild);
        child.appendChild(secondGrandChild);
        child.appendChild(thirdGrandChild);
        child.setAttribute("id", id);
        child.setAttribute("class", "child");
        parent.appendChild(child);
    }
    document.getElementById("input-box").value = "";
    saveData();
}

function todos() {
    toDo(globalid++);
}

parent.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }

}, false);

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data");
}
showData();