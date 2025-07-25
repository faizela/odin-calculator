// calculator variables
let num1 
let num2
let operator = ""
let currentInput = ""
let resultJustDisplayed = false

const btns = Array.from(document.querySelectorAll(".digit"))
const calc_display = document.querySelector(".calc_display")
const operators = document.querySelectorAll(".operator")
const equal_btn = document.querySelector('.special_op')
const clear_btn = document.querySelector('.clear_btn')
const zero_digit = document.querySelector('.zero_digit')

let add = (a,b) => a + b
let subtract = (a,b) => a - b
let multiply = (a,b) => a * b
let divide = (a,b) => a / b

function operate(operator, num1, num2) {
    switch(operator) {
        case '+':
         return add(num1, num2)
        case '-':
         return subtract(num1, num2)
        case '*': 
         return multiply(num1, num2)
        case '/':
        if (num2 == 0) {
          alert("sorry we aint gonna divide by zero fr ")
          return 'ERROR'
        }
        else {return divide(num1, num2)}
    }
}





for (let btn of btns) {  //display numbers in calc display 
  btn.addEventListener('click', (e) => {
    if(resultJustDisplayed) {
      currentInput = '';
      calc_display.innerText = ''
      resultJustDisplayed = false
     }
    currentInput += e.target.innerText
    calc_display.innerText = currentInput
}); 
}

for (let op of operators) {
  op.addEventListener('click', (e) => {

    // Guard clause: If no input and no previous number, do nothing
    if (currentInput === '' && num1 === undefined) return;

    // If there's some input (a number was typed)
    if (currentInput !== '') {
      if (num1 === undefined) {
        // First time: store it as the first number
        num1 = parseFloat(currentInput);
      } else {
        // If we already had num1, now get num2 and calculate
        num2 = parseFloat(currentInput);    
        num1 = operate(operator, num1, num2)
        
         // store result in num1
        calc_display.innerText = num1;        // show result
      }

      // Reset input for next number
      currentInput = '';
    }

    // Save the new operator for next operation
    operator = e.target.textContent;
  });
}

equal_btn.addEventListener('click', () => {
    if (currentInput === '') return;

    num2 = parseFloat(currentInput);
   
    let result = operate(operator, num1, num2);
   
    if (result === 'ERROR') return 
    result = parseFloat(result.toFixed(2))
    calc_display.innerText = result;
    currentInput = '';
    operator = ''
    num1 = undefined
    num2 = undefined

    resultJustDisplayed = true
    })




clear_btn.addEventListener('click', () =>  {
  currentInput = ''
  operator = ''
  num1 = undefined
  num2 = undefined
  calc_display.innerText = ""
}

)

