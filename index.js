function rollDice() {
  // Програвання звуку
  const audio = new Audio("sounds/dice-roll.mp3");
  audio.play();

  let randomNumber1 = Math.floor(Math.random() * 6) + 1;
  let randomNumber2 = Math.floor(Math.random() * 6) + 1;

  let diceImage1 = "images/dice" + randomNumber1 + ".png";
  let diceImage2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", diceImage1);
  document.querySelector(".img2").setAttribute("src", diceImage2);

  let title = document.querySelector("h1");
  if (randomNumber1 > randomNumber2) {
    title.innerHTML = "🚩 Player 1 Wins!";
  } else if (randomNumber1 < randomNumber2) {
    title.innerHTML = "Player 2 Wins! 🚩";
  } else {
    title.innerHTML = "Draw!";
  }
}

// Запускається при завантаженні
rollDice();

// Обробка натискання пробілу
document.addEventListener("keydown", function (event) {
  if (event.code === "Space") {
    rollDice();
  }
});
