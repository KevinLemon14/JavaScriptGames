const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
let timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole')
    })
    
    let randomSquarePosition = squares[Math.floor(Math.random() * 9)]
    randomSquarePosition.classList.add('mole')

    hitPosition = randomSquarePosition.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})

function moveMole() {
    let timerId = null
    timerId = setInterval(randomSquare, 600)
}

moveMole()

function countDown () {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime == 0) {
        clearInterval(countDownTimerId)
        alert('GAME OVER! Your score is ' + result)
    }

}

let countDownTimerId = setInterval(countDown, 1000)