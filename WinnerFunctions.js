function checkWinner() {
  let isWinner = false;
  // coping all texts on buttons in 2d array
  let data = winConditionPattern.map((condition) => {
    first = allBtns[condition[0]].textContent;
    second = allBtns[condition[1]].textContent;
    third = allBtns[condition[2]].textContent;
    return [first, second, third];
  });

  // check if any winning condition is matches or not
  data.forEach((condition) => {
    if (condition[0] && condition[1] && condition[2]) {
      if (condition[0] == condition[1] && condition[1] === condition[2]) {
        winner.status = true;
        winner.name = eval(condition[0]);
        isWinner = true;
      }
    }
  });

  return isWinner;
}

function displayWinner() {
  if (winner.name === "computer") {
    msg.innerHTML = ` you lose!<br> the winner is <span>${winner.name}</span>`;
  } else {
    msg.innerHTML = `Congratulation, the winner is <span>${winner.name}</span>`;
  }
  msg.classList.remove("hide");
  return;
}
