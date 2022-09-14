const numberButtons = document.querySelectorAll('.number');
const text = document.querySelector('#result');
const operator = document.querySelectorAll('.operator')
const ac = document.querySelector('#ac');
const equal=document.querySelector('.equal');
equal.addEventListener('click', ()=>{doTheThing()});

ac.addEventListener('click', () => { text.textContent = '';num1=[];num2=[];i=0;numString='' })

numberButtons.forEach((button) => { button.addEventListener('click', () => { writeOperation(button.id) }); })

operator.forEach((button) => { button.addEventListener('click', () => { writeOperation(button.id) }); })
let num1=[];
let i;
let numString='';
function writeOperation(a) {
  console.log(a);
  if(a!='+' && a!='-' && a!='*' && a!='/')
   { text.textContent += a;
    numString+=a;
    i??=0;
    num1[i]=numString;
  }else{
    i===undefined? i=0:i++; 
    text.textContent += a
    num1[i]=a;
    numString='';
    i++
  }
}

num2=[];
function doTheThing(a) {
  console.log(num1);
  for(let i=0;i<num1.length;i++){
    num2[i]=parseInt(num1[i]);
    if(isNaN(num2[i])){
      // console.log('syntax error! pusiste un operador al comienzo pete!');
      num2[i]=num1[i];
    }
  // }
}
  console.log('the thing is done!')
  console.log(num2);
text.textContent+=`\n =${operate(num2[1],num2[0],num2[2])}`
// operate
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
  return numbers.reduce((a, b) => { return a / b })
}

function operate(sign, ...numbers) {
  switch (sign) {
    case '+': return add(numbers);
    case '-': return subtract(numbers);
    case '*': return multiply(numbers);
    case '/': return divide(numbers);
  }
}
// let example=[12,'+',5];
// console.log(operate(example[1],example[0],example[2]));
// let stringg='10+5'
// console.log(stringg.split('+'));