
function calculateSum() {
    
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let number1 = parseFloat(num1);
    let number2 = parseFloat(num2);
    let sum = number1 + number2;
    //alert(sum)
    document.getElementById("result").innerText = "Sum: " + sum;
}