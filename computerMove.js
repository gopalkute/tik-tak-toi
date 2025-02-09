function computerMove() {
  if (checkWinner()) return displayWinner();

  if (checkDraw()) return displayDraw();

  let idx = Math.floor(Math.random() * 8);
  if (allBtns[idx].textContent === "") {
    allBtns[idx].textContent = "O";
    allBtns[idx].disabled = true;
  } else {
    computerMove();
  }

  setTimeout(() => {
    if (checkWinner()) return displayWinner();
  }, 50);
}
