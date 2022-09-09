function add(numbers){
    return numbers.reduce((a,b)=>{return a+b})
}
function subtract(numbers){
    return numbers.reduce((a,b)=>{return a-b})
    }
function multiply(numbers){
    return numbers.reduce((a,b)=>{return a*b})
    }
function divide(numbers){
    return numbers.reduce((a,b)=>{return a/b})
    }

function operate(sign,...numbers){
    switch(sign){
        case '+': add(numbers);break;
        case '-': subtract(numbers);break;
        case '*': multiply(numbers);break;
        case '/': divide(numbers);break;
    }
}
