
        function addItem() {
            var input = document.getElementById("item");
            var item = input.value;
            if (item.trim() !== "") {
                var ul = document.getElementById("list");
                var li = document.createElement("li");
                li.appendChild(document.createTextNode(item));
                li.onclick = crossOffItem;
                ul.appendChild(li);
                input.value = "";
            } else {
            alert("Please enter an item!");
            }
        }

    function crossOffItem() {
        this.classList.toggle("crossed-off");
        }

        function linecrossed() {
            setTimeout(10)
            this.classList.toggle("linecrossed");
            
            }
    