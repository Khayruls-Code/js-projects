const operators = document.querySelector('.operators')
const numbers = document.querySelector('.numbers')
const history = document.querySelector('.history')
const output = document.querySelector('.output')
const equal = document.querySelector('.equal')

//get numbers in input
numbers.addEventListener('click', function(e){
    let number = e.target.id;
    if(e.target.innerText === 'C'){
        history.innerText = ''
        output.innerText = ''
    }
    let firstOutput = output.innerText + number
    output.innerText = firstOutput
})

//operator implementation
let hasOperator = false;
operators.addEventListener('click', function(e){
    let operator = e.target.id
    let currentOutput = output.innerText

    //when there is no operator
    if(hasOperator == false){
        history.innerText = currentOutput + operator
        output.innerText = ''
        hasOperator = true
    }
    //when there is an operator
    else{
        let remainingwith = history.innerText.slice(0, history.innerText.length - 1);
        history.innerText = remainingwith + operator
    }
})

//after clicking = the operation will be execute
equal.addEventListener('click', function(){
    hasOperator = false;
    if(history.innerText === '' || output.innerText === ''){
        return false
    }
    let result = eval(history.innerText + output.innerText)
    output.innerText = result
    history.innerText = ''
})