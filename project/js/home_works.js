// gmail

const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailSpan = document.querySelector('#gmail_result')

const regExp = /^[a-z0-9]+@gmail.com$/i

gmailButton.addEventListener('click',() => {
    if (regExp.test(gmailInput.value)) {
        gmailSpan.innerHTML = 'OK'
        gmailSpan.style.color = 'green'

    }else{
        gmailSpan.innerHTML = 'NOT OK'
        gmailSpan.style.color = 'red'
    }
})

//

 const parrentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')
 let maxOffsetWidth = parrentBlock.offsetWidth - childBlock.offsetWidth
let positionX = 0
let positionY = 0
let direction = 1
const moveBlock = () => {
    if (direction === 1) {
        if (positionX < maxOffsetWidth) {
            childBlock.style.left = `${positionX}px`
            positionX++
        } else {
            direction = 2
            positionX = maxOffsetWidth
        }
    } else if (direction === 2) {
        if (positionY < maxOffsetWidth) {
            childBlock.style.top = `${positionY}px`
            positionY++
        } else {
            direction = 3
        }
    } else if (direction === 3) {
        if (positionX > 0) {
            childBlock.style.left = `${positionX}px`
            positionX--
        } else {
            direction = 4
            positionX = 0
        }
    } else if (direction === 4) {
        if (positionY > 0) {
            childBlock.style.top = `${positionY}px`
            positionY--
        } else {
            direction = 1
            positionY = 0
        }
    }

    setTimeout(moveBlock, 1)
}

moveBlock()


















//timer

const seconds = document.querySelector("#seconds")
const startbutton = document.querySelector("#start")
const stopbutton = document.querySelector("#stop")
const resetbutton = document.querySelector("#reset")

let count = 0
let inter;
let timerRunning = false


 startbutton.addEventListener('click',() => {
    if (!timerRunning) {
        inter = setInterval(() => {
            count++
            seconds.textContent = count
        }, 1000)
        timerRunning = true
    }

 })

 stopbutton.addEventListener('click',() => {
    clearInterval(inter)
    timerRunning = false
 })

 resetbutton.addEventListener('click',() => {
    clearInterval(inter)
    count = 0
    seconds.textContent = count
    timerRunning = false
 })












