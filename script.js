// TODO 
// Fix bug that gives incorrect solution when modifying floating numbers and then  operating with it.

const numberButtons = document.querySelectorAll('.number');
const displayValue = document.querySelector('#display');
const operator = document.querySelectorAll('.operator')
const ac = document.querySelector('#ac');
const equal = document.querySelector('.equal');
const float = document.querySelector('.floatingPoint');
const backspace = document.querySelector('#del');
let firstTime = true;
let arrayOfStringNumbers = [];
let i;
let arrayOfNumbers = [];

window.addEventListener('keydown', (e) => {
  if (!isNaN(parseInt(e.key))) { writeNumber(e.key) };
  if (e.key == '/' || e.key == '*' || e.key == '-' || e.key == '+') { writeOperator(e.key) };
  if (e.key == '.') { writeFloatingPoint() }
  if (e.key == 'Enter') { equals() }
})
backspace.addEventListener('click', () => { undo() });
float.addEventListener('click', () => { writeFloatingPoint() })
equal.addEventListener('click', () => { equals() });
ac.addEventListener('click', () => { allClear() });
numberButtons.forEach((button) => { button.addEventListener('click', () => { writeNumber(button.id) }) });
operator.forEach((button) => { button.addEventListener('click', () => { writeOperator(button.id) }) });

function undo() {
  if (!arrayOfStringNumbers[i] && i > 0) { arrayOfStringNumbers[i] = ''; i-- }
  let modifiedString = arrayOfStringNumbers[i].slice(0, (arrayOfStringNumbers[i].length - 1));
  let currentDisplay = displayValue.textContent;
  displayValue.textContent = currentDisplay.slice(0, (currentDisplay.length - 1));
  arrayOfStringNumbers[i] = modifiedString;
}

function writeNumber(a) {
  if (firstTime === true) { allClear(); firstTime = false }
  i ??= 0;
  arrayOfStringNumbers[i] ??= '';
  if ((arrayOfStringNumbers[i].length) < 9) {
    displayValue.textContent += a;


    arrayOfStringNumbers[i] += a;
  }
}
function writeOperator(a) {
  if (i == 2) { equals() };
  displayValue.textContent += a;
  arrayOfStringNumbers[1] = a;
  i = 2;
}
function allClear() {
  displayValue.textContent = '';
  arrayOfStringNumbers = []; arrayOfNumbers = []; i = 0;
};

function equals() {
  for (let i = 0; i < arrayOfStringNumbers.length; i++) {
    arrayOfNumbers[i] = parseFloat(arrayOfStringNumbers[i]);
    if (isNaN(arrayOfNumbers[i])) {
      arrayOfNumbers[i] = arrayOfStringNumbers[i];
    }
  }
  let result = (operate(arrayOfNumbers[1], arrayOfNumbers[0], arrayOfNumbers[2]).toString());
  if (isNaN(result) || result == undefined) {
    if (result == 'Boom!') {
      allClear();
      writeNumber('Boom!');
      firstTime = true;
    } else {
      allClear();
      writeNumber('Syntax Error!');
      firstTime = true;
    }
  }
  else {
    allClear();
    writeNumber(result);
  }
}
function writeFloatingPoint() {
  if (!arrayOfStringNumbers[i].includes('.')) { writeNumber('.') }
}
function add(numbers) {
  return numbers.reduce((a, b) => { return a + b })
}
function subtract(numbers) {
  return numbers.reduce((a, b) => { return a - b })
}
function multiply(numbers) {
  return numbers.reduce((a, b) => { return a * b })
}
function divide(numbers) {
  return numbers.reduce((a, b) => { return b == 0 ? displayValue.textContent = 'Boom!' : (a / b) })
}

function operate(sign, ...numbers) {
  switch (sign) {
    case '+': return add(numbers);
    case '-': return subtract(numbers);
    case '*': return multiply(numbers);
    case '/': return divide(numbers);
  }
}
