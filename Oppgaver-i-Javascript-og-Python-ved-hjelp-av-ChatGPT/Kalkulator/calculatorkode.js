

function calculate() {
    var expression = document.getElementById("expression").value;
    try {
        var result = eval(expression);
        document.getElementById("result").innerHTML = "Result: " + result;
    } catch (error) {
        document.getElementById("result").innerHTML = "Error: " + error.message;
    }
}
function appendToDisplay(value) {
    document.getElementById('expression').value += value;
}

function clearDisplay() {
    document.getElementById('expression').value = '';
}

function calculateResult() {
    const expression = document.getElementById('expression').value;
    try {
        const result = eval(expression);
        document.getElementById('expression').value = result;
    } catch (error) {
        document.getElementById('expression').value = 'Error';
    }
}