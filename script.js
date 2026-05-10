const Gameboard = (() => {
    const grid = [null, null, null,
                  null, null, null, 
                  null, null, null]
    
    const wins = () => {return (grid[0] && grid[0] == grid[1] && grid[1] == grid[2] ||
                  grid[3] && grid[3] == grid[4] && grid[4] == grid[5] || 
                  grid[6] && grid[6] == grid[7] && grid[7] == grid[8] ||

                  grid[0] && grid[0] == grid[3] && grid[3] == grid[6] ||
                  grid[1] && grid[1] == grid[4] && grid[4] == grid[7] ||
                  grid[2] && grid[2] == grid[5] && grid[5] == grid[8] ||

                  grid[0] && grid[0] == grid[4] && grid[4] == grid[8] ||
                  grid[2] && grid[2] == grid[4] && grid[4] == grid[6] 
    )}

    const tie = () => {return !grid.includes(null)}

    return {grid, wins, tie}
})()


function Player(name, marker, score) {
    return {name, marker, score}
}

const Game = (() => {
    let playerTurn = "Player1";

    const checkGame = (cell, index) => {
        //Check if the board is full or if the players dont exist
        if (Gameboard.wins()) { return }
        if (!P1exist || !P2exist) {
            return
        }

        if (Game.playerTurn == Player1.name) {

                Gameboard.grid[index] = Player1.marker
                console.log(Gameboard.grid)
                cell.textContent = Player1.marker
                //Checks the win or tie state
                if (Gameboard.wins() == true) {
                    turn.textContent = Player1.name + " wins"
                    winstate = true
                }
                
                else if (Gameboard.tie() == true) {
                    turn.textContent = "Tie"
                }

                else {
                    Game.playerTurn = Player2.name
                    turn.textContent = Player2.name + " Turn"
                }}
            
            else {

                Gameboard.grid[index] = Player2.marker
                console.log(Gameboard.grid)
                cell.textContent = Player2.marker
                //Checks the win state
                if (Gameboard.wins() == true) {
                    turn.textContent = Player2.name + " wins"
                    winstate = true
                }

                else if (Gameboard.tie() == true) {
                    turn.textContent = "Tie"
                }
                
                else {
                    Game.playerTurn = Player1.name
                    turn.textContent = Player1.name + " Turn"
                }}}

    return {playerTurn, checkGame}
})()


const cells = document.querySelectorAll(".cell") 
const turn = document.querySelector(".Turn")
const player1 = document.querySelector(".one")
const player2 = document.querySelector(".two")
let P1exist = false
let P2exist = false

//For when a grid square is clicked
cells.forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (Gameboard.grid[index] == null) { 

            Game.checkGame(cell, index)
        }})
})

//For making the players 
player1.addEventListener("click", () => {
    name = prompt("What is your name")
    Player1 = Player(name, "X", 0)
    P1exist = true
})

player2.addEventListener("click", () => {
    name = prompt("What is your name")
    Player2 = Player(name, "O", 0)
    P2exist = true
})