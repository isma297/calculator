const numberButtons = document.querySelectorAll('.number');
const displayValue = document.querySelector('#result');
const operator = document.querySelectorAll('.operator')
const ac = document.querySelector('#ac');
const equal = document.querySelector('.equal');
const float = document.querySelector('.floatingPoint');
let arrayOfStringNumbers = [];
let i;
let numString = '';
let arrayOfNumbers = [];

float.addEventListener('click',()=>{writeFloatingPoint()})
equal.addEventListener('click', () => { equals() });
ac.addEventListener('click', () => { allClear() });
numberButtons.forEach((button) => { button.addEventListener('click', () => { writeNumber(button.id) }) });
operator.forEach((button) => { button.addEventListener('click', () => { writeOperator(button.id) }) });
function writeFloatingPoint() {
  if (!numString.includes('.')) { writeNumber('.') }
}
function writeNumber(a) {
  if (numString.length < 9) {
    displayValue.textContent += a;
    numString += a;
    i ??= 0;
    arrayOfStringNumbers[i] = numString;
  }
}
function writeOperator(a) {
  if (i == 2) { equals() };
  displayValue.textContent += a;
  arrayOfStringNumbers[1] = a;
  i = 2;
  numString = '';
}
function allClear() {
  displayValue.textContent = '';
  arrayOfStringNumbers = []; arrayOfNumbers = []; i = 0; numString = ''
};

function equals(a) {
  console.log(arrayOfStringNumbers);
  for (let i = 0; i < arrayOfStringNumbers.length; i++) {
    arrayOfNumbers[i] = parseFloat(arrayOfStringNumbers[i]);
    if (isNaN(arrayOfNumbers[i])) {
      arrayOfNumbers[i] = arrayOfStringNumbers[i];
    }
  }
  let result = operate(arrayOfNumbers[1], arrayOfNumbers[0], arrayOfNumbers[2]);
  console.log(`equals = ${result}`)
  console.log(arrayOfNumbers);
  displayValue.textContent += `${result}`;
  allClear();
  writeNumber(result);
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
