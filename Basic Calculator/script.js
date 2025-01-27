let display = document.getElementById('display');
let fullOperation = ''; // Stores the entire expression as a string

// Append a number or decimal point
function appendNumber(number) {
  fullOperation += number;
  updateDisplay();
}

// Append an operation (+, -, *, /)
function setOperation(op) {
  if (fullOperation.slice(-1).match(/[+\-*/]/)) {
    // Replace the last operator if one already exists at the end
    fullOperation = fullOperation.slice(0, -1);
  }
  fullOperation += op;
  updateDisplay();
}

// Append an opening brace "("
function openBraces() {
  fullOperation += '(';
  updateDisplay();
}

// Append a closing brace ")"
function closeBraces() {
  fullOperation += ')';
  updateDisplay();
}

// Perform the calculation
function calculate() {
  try {
    // Use eval to calculate the result
    let result = eval(fullOperation); // Evaluate the expression
    fullOperation = result.toString(); // Store the result as the new operation
    updateDisplay();
  } catch (error) {
    fullOperation = 'Error'; // Handle invalid expressions
    updateDisplay();
  }
}

// Clear the display
function clearDisplay() {
  fullOperation = '';
  updateDisplay();
}

// Remove the last character
function back() {
  fullOperation = fullOperation.slice(0, -1);
  updateDisplay();
}

// Update the display
function updateDisplay() {
  display.innerText = fullOperation || '0';
}
