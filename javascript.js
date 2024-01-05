var modal = document.getElementById("myModal");

window.onload = function () {
    modal.style.display = "block";
};


//----------------------------Playing Audio --------------------
document.addEventListener("DOMContentLoaded", function () {
    let audi = document.getElementById("welcome");
    audi.play();
});

let Audio = document.getElementById("myAudio");
let Audible = document.querySelectorAll(".audio").forEach((element) => {
    element.addEventListener("click", () => { Audio.play() });
});
Audible

let interfaceAudio = document.getElementById("interface-welcome");



//---------------------------Multiplayer------------------------


let currentPlayer = 1;
let player1Roll = 0;
let player2Roll = 0;
let tie = 0;

let playerscore1 = 0;
let playerscore2 = 0;
let tiescore = 0;

function rollDice(diceNumber) {
    // Check if it's the current player's turn
    if (diceNumber !== currentPlayer) {
        console.log("It's not your turn.");
        return;
    }

    let randomNum = Math.floor(Math.random() * 6) + 1;
    let diceChoice = document.getElementById('dice' + diceNumber);
    diceChoice.src = 'images/dice' + randomNum + '.png';
    // console.log(diceNumber)

    // Remove border from both players' dice
    document.getElementById('dice1').style.border = 'none';
    document.getElementById('dice2').style.border = 'none';


    if (diceNumber == 1) {
        player1Roll = randomNum;
        document.getElementById('dice1').style.border = '3px solid black';
        document.getElementById('dice1').style.borderRadius = '10px';
    } else if (diceNumber == 2) {
        player2Roll = randomNum;
        document.getElementById('dice2').style.border = '3px solid black';
        document.getElementById('dice2').style.borderRadius = '10px';
    } else {
        tie = randomNum;

    }

    currentPlayer = (currentPlayer % 2) + 1;

    // Check if both players have played
    if (currentPlayer === 1) {
        if (player1Roll > player2Roll) {
            document.getElementById("result").innerHTML = `Player 1 wins with a roll of ${player1Roll}`
            document.getElementById("playerscore1").innerHTML = playerscore1 += 1

        } else if (player2Roll > player1Roll) {
            document.getElementById("result").innerHTML = `Player 2 wins with a roll of ${player2Roll}`
            document.getElementById("playerscore2").innerHTML = playerscore2 += 1

        } else {
            document.getElementById("result").innerHTML = "It's a tie! Both players rolled " + player1Roll
            document.getElementById("tiescore").innerHTML = tiescore += 1

        }
    }



    return randomNum;
}

//---------------------------Single Player------------------------


let dice_1 = document.getElementById("dice_1");
let dice_2 = document.getElementById("dice_2");

const singleRolls = document.querySelectorAll(".singleImg");
singleRolls.forEach((element) => {
    element.addEventListener("click", rollDice2);
});

let singlePlayerScore1 = 0;
let singlePlayerScore2 = 0;
let SinglePlayerTieScore = 0;

function rollDice2() {

    let randomNumDice1 = Math.floor(Math.random() * 6) + 1;
    let randomNumDice2 = Math.floor(Math.random() * 6) + 1;

    dice_1.src = 'images/dice' + randomNumDice1 + '.png';
    dice_2.src = 'images/dice' + randomNumDice2 + '.png';


    if (randomNumDice1 > randomNumDice2) {
        document.getElementById("result").innerHTML = `Human Player wins with a roll of ${randomNumDice1}`
        document.getElementById("playerscore1").innerHTML = singlePlayerScore1 += 1
    } else if (randomNumDice2 > randomNumDice1) {
        document.getElementById("result").innerHTML = `Computer wins with a roll of ${randomNumDice2}`
        document.getElementById("playerscore2").innerHTML = singlePlayerScore2 += 1
    } else {
        document.getElementById("result").innerHTML = "It's a tie! Both players rolled " + randomNumDice1
        document.getElementById("tiescore").innerHTML = SinglePlayerTieScore += 1
    }

}



//--------------------------Modal Update ----------------------------

document.getElementById("multiplayerBtn").onclick = function () {
    interfaceAudio.play()
    document.getElementById("mode").innerHTML = "Multiplayer Mode"
    rollDice();
    modal.style.display = "none";
};

document.getElementById("singlePlayerBtn").onclick = function () {
    interfaceAudio.play()
    document.getElementById("mode").innerHTML = "Single Player Mode";
    document.getElementById("multiPlayer").style.display = "none";
    document.getElementById("singlePlayer").style.display = "block";
    document.getElementById('dice_1').style.border = '3px solid black';
    singleRolls
    modal.style.display = "none";
};









