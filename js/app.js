let board = ['','','','','','','','','']
let turn = "X"
let winner = false
let tie = false

const winningCombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const squareEls = document.querySelectorAll(".sqr")


const messageEl = document.querySelector("#message")

console.log(squareEls)
console.log(messageEl)


function switchPlayerTurn(){
    if(winner){
        return
    }
    else if(turn === "X"){
        turn = "O"
    }
    else{
        turn = "X"
    }
}


function checkForWinner(){
    if(board[0] !== "" && board[0] === board[1] && board[0] === board[2]){
        winner = true
        console.log(winner)
    }
        else if(board[3] !== "" && board[3] === board[4] && board[3] === board[5]){
            winner = true
        }
        else if(board[6] !== "" && board[6] === board[7] && board[6] === board[8]){
            winner = true
        }
        else if(board[0] !== "" && board[0] === board[3] && board[0] === board[6]){
            winner = true
        }
        else if(board[1] !== "" && board[1] === board[4] && board[1] === board[7]){
            winner = true
        }
        else if(board[2] !== "" && board[2] === board[5] && board[2] === board[8]){
            winner = true
        }
        else if(board[0] !== "" && board[0] === board[4] && board[0] === board[8]){
            winner = true
        }
        else if(board[2] !== "" && board[2] === board[4] && board[2] === board[6]){
            winner = true
        }
        else{
            winner = false
        }
}

function checkForTie(){
    for(let i=0; i<=8; i++){
    if(winner === true){
        tie = false
    }
    else if(winner === false && board[i] !== ""){
        tie = true
        console.log(tie)
    }
    else{
        tie = false
    }
    }
}


function updateMessage(){
    if(winner === false && tie === false){
        return
    }
    if(winner === false && tie === true){
        console.log("Tie")
        messageEl.innerText = "Tie"
    }
    else{
        console.log("Congrats! You Won")
        messageEl.innerText = "Congrats! You Won"
        messageEl.style.color = "green"
    }
    }

function updateBoard(event){
    console.log(turn)
    Number(event.target.id)
    if(board[event.target.id] === ""){ // to check if square is empty or not
        if(board[event.target.id] !== "X" || board[event.target.id] !== "O"){
            board[event.target.id] = turn
            // const squareIndex = event.target.id
            console.log(board)
        }
    else {
            return
        }
    }
    else{
        return
    }

    switchPlayerTurn()
    checkForWinner()
    checkForTie()
    updateMessage()
    
}

squareEls.forEach((square)=>{
    square.addEventListener("click", ()=>{
        square.innerText = turn
    })
    square.addEventListener("click", updateBoard)
})

console.log(board)



