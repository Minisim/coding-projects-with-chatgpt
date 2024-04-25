window.onload = function() {
    var storedItems = JSON.parse(localStorage.getItem("items")) || [];
    var ul = document.getElementById("list");
    storedItems.forEach(function(item) {
        addItemToList(item);
    });
};

function addItemToList(itemText) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(itemText));
    
    var deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "";
    deleteBtn.onclick = deleteItem;
    li.appendChild(deleteBtn);
    
    li.onclick = crossOffItem;
    ul.appendChild(li);
}

function addItem() {
    var input = document.getElementById("item");
    var item = input.value.trim();
    
    if (item !== "") {
        addItemToList(item);
        saveItems();
        input.value = "";
    } else {
        alert("Please enter an item!");
    }
}

function deleteItem() {
    var listItem = this.parentElement;
    listItem.remove();
    saveItems();
}

function crossOffItem() {
    this.classList.toggle("crossed-off");
    saveItems();
}

function saveItems() {
    var items = [];
    var lis = document.getElementsByTagName("li");
    for (var i = 0; i < lis.length; i++) {
        items.push(lis[i].textContent);
    }
    localStorage.setItem("items", JSON.stringify(items));
}