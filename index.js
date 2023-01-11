let score1 = document.getElementById("score1")
let score2 = document.getElementById("score2")

homeScore = 0
guestScore = 0

function score1Plus1() {
    homeScore += 1
    score1.textContent = homeScore
}

function score1Plus2() {
    homeScore += 2
    score1.textContent = homeScore
}

function score1Plus3() {
    homeScore += 3
    score1.textContent = homeScore
}

function score2Plus1() {
    guestScore += 1
    score2.textContent = guestScore
}

function score2Plus2() {
    guestScore += 2
    score2.textContent = guestScore
}

function score2Plus3() {
    guestScore += 3
    score2.textContent = guestScore
}