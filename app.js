// ------------opening the instructions
const openInfo = document.getElementById("open");
const modal = document.getElementById("modal");
const closeInfo = document.getElementById("close");
// --------------eventlistener to open
const open = () => {
  modal.style.display = "block";
};
openInfo.addEventListener("click", open);
// ---------------eventlistener to close
const close = () => {
  modal.style.display = "none";
};
closeInfo.addEventListener("click", close);

// --------------Game Board
const board = document.querySelector(".squares");
// console.log(board);
const cubes = document.querySelectorAll("span");
// console.log(cubes);
const next = document.querySelector("#next");
// console.log(next);
const player = document.querySelector(".player");
// console.log(player);
const restart = document.querySelector("#reset");
// console.log(restart);
const winText = document.querySelector("#win-statement");
const choices = document.querySelectorAll("#choice");
// --------------- players stats
const players = [
  {
    player: "1",
    symbol: "X",
    score: [0],
  },
  {
    player: "2",
    symbol: "O",
    score: [0],
  },
];

let currentPlayer = players[0];

function playerSwitch() {
  if (currentPlayer.symbol === "X") {
    next.innerText = players[1].symbol;
    return (currentPlayer = players[1]);
  } else {
    next.innerText = players[0].symbol;
    return (currentPlayer = players[0]);
  }
}

let hover = document.querySelectorAll(".div");
for (let i = 0; i < hover.length; i++) {
  hover[i].addEventListener("mouseover", function () {
    let pic = document.querySelectorAll("#hoverPhoto");
    for (let j = 0; j < pic.length; j++) {
      if (currentPlayer.symbol === "X") {
        pic[i].src = "X.png";
        setTimeout(function () {
          pic[i].src = "";
        }, 1000);
      } else {
        pic[i].src = "O.png";
        setTimeout(function () {
          pic[i].src = "";
        }, 1000);
      }
    }
  });
}
let select = document.querySelectorAll("#choice");
for (let i = 0; i < select.length; i++) {
  select[i].addEventListener("click", function (e) {
    if (currentPlayer.symbol === "X") {
      select[i].innerText = "X";
      playerScore(e.target.dataset.value);
      playerSwitch();
    } else {
      select[i].innerText = "O";
      playerScore(e.target.dataset.value);
      playerSwitch();
    }
  });
}

// function selectCell(e) {
//   //   const selectedCell = e.target;
//   //   selectedCell.innerHTML = `${currentPlayer.symbol}`;
//   //   selectedCell.classList.add(`selected${currentPlayer.symbol}`);
//   playerScore(e.target.dataset.value);
//   playerSwitch();
// }
function playerScore(newPoints) {
  currentPlayer.score.push(parseInt(newPoints));
  checkWin();
}

const wins = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];
function checkWin() {
  wins.forEach((winCondition) => {
    if (currentPlayer.score.sort().join().includes(winCondition)) {
      winText.innerHTML = `${currentPlayer.symbol} wins!`;
      reset.remove();
      player.innerHTML = `<button id='play-again' class='reset'>Play Again!</button>`;
      const playAgain = document.querySelector("#play-again");
      playAgain.addEventListener("click", resetGame);
    }
  });
  draw();
}

function draw() {
  if (
    players[0].score.reduce((a, b) => a + b) +
      players[1].score.reduce((a, b) => a + b) ===
    45
  ) {
    winText.innerHTML = "Draw";
  }
}

reset.addEventListener("click", resetGame);

function resetGame() {
  choices.forEach((choice) => (choice.innerHTML = "PICK ME"));
  players.forEach((player) => (player.score = [0]));
  winText.innerHTML = "";
  currentPlayer = players[0];
  next.innerText = players[0].symbol;
  choices.forEach((choice) => {
    choice.classList.remove("selectedX");
    choice.classList.remove("selectedO");
  });
}
//   hover[i].addEventListener("mouseover", function (e) {
//     if (currentPlayer.symbol === "X") {
//       e.target.style.backgroundImage = url("X.png");
//     }
//   });
// }
// cubes.forEach((cube) => {
//   cube.addEventListener("click", selectCube);
// });

// function selectCube(e) {
//   const selectedCube = e.target;

// }
