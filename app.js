allBtns.forEach((btn) => {
  allBtns.forEach((btn) => (btn.textContent = ""));

  function start() {
    if (checkDraw()) return displayDraw();
    if (checkWinner()) return displayWinner();

    btn.textContent = "X";
    btn.disabled = true;
    setTimeout(computerMove, 300);
  }

  btn.addEventListener("click", start);
});
