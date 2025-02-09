let allBtns = document.querySelectorAll(".btn");
let msg = document.querySelector("p");
allBtns = [...allBtns];

let winConditionPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let winner = { status: false, name: "" };

let O = "computer";
let X;

function reset() {
  allBtns.forEach((btn) => {
    btn.textContent = "";
    btn.disabled = false;
  });
  winner = { status: false, name: "" };
  msg.classList.add("hide");
}

function replay() {
  reset();
  X = prompt("enter player name");
}
