let operand1 = '';
let operand2 = '';
let operator = '';
let result = '';

function updateDisplay(value) {
  const display = document.getElementById('display');

  if (value === '/' || value === '*' || value === '-' || value === '+') {
    operator = value;
    operand1 = display.value;
    display.value = '';
  } else if (value === '=') {
    operand2 = display.value;
    result = calculateResult(operator, operand1, operand2);
    display.value = result;
  } else if (value === 'C') {
    clearDisplay();
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  const display = document.getElementById('display');
  display.value = '';
  operand1 = '';
  operand2 = '';
  operator = '';
  result = '';
}

function calculateResult(operator, operand1, operand2) {
  let result = '';

  if (operator === '/') {
    if (operand2 === '0') {
      result = 'Error';
    } else {
      result = parseFloat(operand1) / parseFloat(operand2);
    }
  } else if (operator === '*') {
    result = parseFloat(operand1) * parseFloat(operand2);
  } else if (operator === '-') {
    result = parseFloat(operand1) - parseFloat(operand2);
  } else if (operator === '+') {
    result = parseFloat(operand1) + parseFloat(operand2);
  }

  return result;
}
