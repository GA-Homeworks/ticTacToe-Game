console.log(`I am attached.`);
// --------------First page of the game
// => Setting the players names
let firstP = [];
let secondP = [];

// => grabbing the players names
let formOne = document.querySelector(".first");
let formTwo = document.querySelector(".second");

// => adding events to change the players names and add 'x' and 'o'
formOne.addEventListener("submit", function (e) {
  let fName = document.querySelector("#one");
  //   console.log(fName.value); WORKS
  e.preventDefault();
  document.querySelector(".oName").innerText = fName.value;
});
formTwo.addEventListener("submit", function (e) {
  let sName = document.querySelector("#two");
  //   console.log(sName.value); WORKS
  e.preventDefault();
  document.querySelector(".tName").innerText = sName.value;
});

// => getting play button to open the next page IF names are filled
let play = document.querySelector("button");
play.addEventListener("click", function () {
  //   self.location = "game.html"; WORKS
  let fN = document.querySelector(".oName");
  let sN = document.querySelector(".tName");
  if (fN.innerText === "") {
    alert(
      "Please fill both players names OR select you want to play against a computer"
    );
  } else if (sN.innerText === "") {
    alert(
      "Please fill both players names OR select you want to play against a computer"
    );
  } else {
    self.location = "game.html";
  }
});
