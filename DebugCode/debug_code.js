function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let resultMultiply = multiply(num1, num2);
        let resultAddition = addition(num1, num2);
        let resultDivision = division(num1, num2);

        // Display the result
        displayResult(resultMultiply, resultAddition, resultDivision);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function addition(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a + b;
}

function division(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a / b;
}

function displayResult(resultMultiply, resultAddition, resultDivision) {
    // Display the result in the paragraph element
    const resultElementMultiplication = document.getElementById('resultMultiplication');
    const resultElementAddition = document.getElementById('resultAddition');
    const resultElementDivision = document.getElementById('resultDivision');
    resultElementMultiplication.textContent = `The result is: ${resultMultiply}`;
    resultElementAddition.textContent = `The result is: ${resultAddition}`
    resultElementDivision.textContent = `The result is: ${resultDivision}`
}