function checkDraw() {
  let isFull = allBtns.every((btn) => {
    return btn.textContent === "X" || btn.textContent === "O";
  });
  return isFull;
}

function displayDraw() {
  msg.innerText = `match is draw reload the page`;
  msg.classList.remove("hide");
}
