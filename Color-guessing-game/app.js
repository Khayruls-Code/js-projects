const header = document.querySelector('.header')
const colorCode = document.querySelector('.colorCode')
const changeBtn = document.querySelector('.changeBtn')
const success = document.querySelector('.success')
const firstmode = document.querySelector('.mode')
const modeButtons = document.querySelectorAll('.mode')
const square = document.querySelectorAll('.square')

let colors = []  //colors array
let pickedColor = '' //single color
let numberCount = 6; //number of box

//its an initioalize function , than contain particular functions a init those
function init () {
    setSquareColor ()
    initialization ()
    reset()
}
init ()

//this function wil execute when the change Color will be clicked
changeBtn.addEventListener('click', function() {
    reset()
    location.reload()
})

//here i am added all main functionality thats create the game,
//setting box color and functionality
//but there is a problem, after clicking on ease box the box getting tow click event, if i want i can fixerd the problem by seperate the click event function form setSqureColor function but for now i keep it as it is.
let counter = 0;
function setSquareColor () {
    for(let i = 0; i < square.length; i++){
        square[i].style.backgroundColor = colors[i]
        square[i].addEventListener('click', function () {
            if(square[i].style.backgroundColor === pickedColor){
                changeColor (colorCode.innerHTML)
                header.style.backgroundColor = pickedColor
                success.innerText = 'Success'
            }else{
                success.innerText = 'Try Again'
                square[i].style.backgroundColor = '#232323'
                counter ++
                if(counter === 6){
                    success.innerText = 'No More Change, Play Again'
                    setTimeout(function() {
                        reset()
                        location.reload()
                    }, 1000)
                }
            }
        })
    }
}

function reset(){
    header.style.backgroundColor = '#00b894'
    success.innerText = ''
    colors = getColors (numberCount)
    pickedColor = selectSingleColor ()
    colorCode.innerHTML = pickedColor
    for(let i = 0; i < square.length; i++){
        if(colors[i]){
            square[i].style.backgroundColor = colors[i]
            square[i].style.display = 'block'
        }else{
            square[i].style.display = 'none'
        }
    }
    setSquareColor ()
}

function initialization () {
    for(let i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener('click', function() {
            if(modeButtons[i].innerText === 'Easy'){
                modeButtons[0].classList.add('selected')
                modeButtons[1].classList.remove('selected')
                numberCount = 3

            }else{
                modeButtons[0].classList.remove('selected')
                modeButtons[1].classList.add('selected')
                numberCount = 6
            }
            reset()
        })
    }
}

function makeColor () {
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}

function getColors (num) {
    let colorArr = []
    for(let i = 0; i < num; i++){
        colorArr.push(makeColor())
    }
    return colorArr
}

function selectSingleColor () {
    let random = Math.floor(Math.random() * colors.length)
    return colors[random]
}

function changeColor (color) {
    square.forEach(item => {
        item.style.backgroundColor = color
    })
}
