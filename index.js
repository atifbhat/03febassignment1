var num1 = "";
var num2 = "";


var calc = document.getElementById("calc");
calc.addEventListener('click', fun)

function fun() {
    num1 = parseInt(document.getElementById("one").value);
    num2 = parseInt(document.getElementById("two").value);
    let operand = document.getElementById("three").value;




    if (operand == '*') {
        var sol = num1 * num2;

    } else if (operand == '+') {
        var sol = num1 + num2;

    } else {
        document.write("enter the symbols correctly (* or +)");
    }
    document.getElementById("operation").value = sol;
}