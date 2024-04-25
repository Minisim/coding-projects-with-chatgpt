function calculate() {
    var expression = document.getElementById("expression").value;
    try {
        var result = eval(expression);
        document.getElementById("result").innerHTML = "Result: " + result;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error.message;
    }
}
