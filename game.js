let allButtons = document.getElementsByClassName("square-button")
let postwin = document.getElementById("postwin")
let currentCharacter = true
let wins = ["123", "456", "789", "147", "258", "369", "159","357"]
let wins2 = [
    [1,2,3], [4,5,6], [7,8,9], // Rows
    [1,4,7], [2,5,8], [3,6,9], //Columns
    [1,5,9], [3,5,7] // Diagonals
]
let oClicks = []
let xClicks = []
let oWins = false;
let xWins = false;

function resetGame(){
    for (const btn of allButtons) {
        btn.innerText = ""
        btn.disabled = false
    }
    oClicks = []
    xClicks = []
    oWins = false
    xWins = false
    postwin.innerHTML = ""
}

function declareWin(whoWon){
    let winMessage = document.createElement("h1")
    winMessage.innerText = whoWon+" Wins!"
    let resetButton = document.createElement("button")
    resetButton.innerText = "RESET"
    resetButton.addEventListener("click", resetGame)
    postwin.appendChild(winMessage)
    postwin.appendChild(resetButton)
    for (const btn of allButtons) {
        btn.disabled = true
    }
}

function checkWin(){
    wins2.forEach(function(condition){
        let [a,b,c] = condition
        oWins = (oClicks.includes(a) && oClicks.includes(b) && oClicks.includes(c))
        if(oWins){
            declareWin("O")
        }
        xWins = (xClicks.includes(a) && xClicks.includes(b) && xClicks.includes(c))
        if(xWins){
            declareWin("X")
        }
    })
}

for (const btn of allButtons) {
    btn.addEventListener("click", function(e){
        if(!e.target.innerText)
        {
            e.target.innerText = currentCharacter?"O":"X"
            currentCharacter?oClicks.push(parseInt(e.target.value)):xClicks.push(parseInt(e.target.value))
            currentCharacter = !currentCharacter
            checkWin()
        }
    })
}