const numberButtons = document.querySelectorAll('.number');
const displayValue = document.querySelector('#result');
const operator = document.querySelectorAll('.operator')
const ac = document.querySelector('#ac');
const equal=document.querySelector('.equal');
equal.addEventListener('click', ()=>{equals()});

ac.addEventListener('click', () => { allClear() })
function allClear () {displayValue.textContent = '';numArr=[];num2=[];i=0;numString=''};

numberButtons.forEach((button) => { button.addEventListener('click', () => { writeNumber(button.id) }); })

operator.forEach((button) => { button.addEventListener('click', () => { writeOperator(button.id) }); })
let numArr=[];
let i;
let numString='';
function writeNumber(a) {
  console.log(a);
    displayValue.textContent += a;
    numString+=a;
    i??=0;
    console.log(i)
    numArr[i]=numString;
    
}
function writeOperator(a){
  if(i==2){equals()};
  displayValue.textContent += a;
  numArr[1]=a;
  i=2;
  numString='';
}
num2=[];
function equals(a) {
  console.log(numArr);
  for(let i=0;i<numArr.length;i++){
    num2[i]=parseInt(numArr[i]);
    if(isNaN(num2[i])){
      num2[i]=numArr[i];
    }
}
let result=operate(numArr[1],numArr[0],numArr[2]);
  console.log(`equals = ${result}`)
  console.log(num2);
displayValue.textContent+=`\n =${result}`;
allClear();
writeNumber(result);
}

function add(numbers) {
  return numbers.reduce((a, b) => { return parseInt(a) + parseInt(b) })
}
function subtract(numbers) {
  return numbers.reduce((a, b) => { return a - b })
}
function multiply(numbers) {
  return numbers.reduce((a, b) => { return a * b })
}
function divide(numbers) {
  return numbers.reduce((a, b) => { return  b==0? displayValue.textContent='Boom!': (a / b) })
}

function operate(sign, ...numbers) {
  switch (sign) {
    case '+': return add(numbers);
    case '-': return subtract(numbers);
    case '*': return multiply(numbers);
    case '/': return divide(numbers);
  }
}
