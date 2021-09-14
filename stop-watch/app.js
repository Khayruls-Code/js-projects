
let secondContainer = document.getElementById('second')
let milisecondContainer = document.getElementById('milisecond')
let startBtn = document.getElementById('start')
let stopBtn = document.getElementById('stop')
let resetBtn = document.getElementById('reset')

let miliseconds = 00
let second = 00
let interval;
startBtn.addEventListener('click', function(){
    interval = setInterval(startTimer, 10)
})
stopBtn.addEventListener('click', function(){
   clearInterval(interval)
})
resetBtn.addEventListener('click', function(){
   clearInterval(interval)
    secondContainer.innerText = '00'
    milisecondContainer.innerText = '00'
})

const startTimer = () => {
    miliseconds++
    milisecondContainer.innerText = '0' + miliseconds
    if(miliseconds > 9){
        milisecondContainer.innerText = miliseconds
    }
    if(miliseconds > 99){
        second++
        secondContainer.innerText = '0'+ second
        miliseconds = 0;
        milisecondContainer.innerText = miliseconds
    }
    if(second > 9){
        secondContainer.innerText = second
    }
}