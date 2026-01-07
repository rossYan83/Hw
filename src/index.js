// import { PNotify } from 'https://cdnjs.cloudflare.com/ajax/libs/pnotify/5.2.0/PNotify.esm.js';

const keys = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J"];
const gamekey = document.querySelector(".game__key");
const userkey = document.querySelector(".user__Key");
const gameScore = document.querySelector(".game__score");
const game = document.querySelector("#game");

let currentKeyIndex = 0;
gamekey.textContent = `Нажміть клавішу - ${keys[currentKeyIndex]}`;

window.addEventListener("keydown", (event) => {
  let formatingKey = event.key.toUpperCase();
  userkey.textContent = `Натиснута клавіша - ${formatingKey}`;

  if (keys[currentKeyIndex] == formatingKey) {
    currentKeyIndex++;

    gamekey.textContent = `Нажміть клавішу - ${keys[currentKeyIndex]}`;
    gameScore.textContent = `Натиснуто ${currentKeyIndex}/10`;
    PNotify.success({
      title: "Success!",
      delay: 700,
    });

    if (currentKeyIndex > 9) {
      gamekey.textContent = `Гру закінчено ви натиснули 10-10 клавіш`;

      const newGameBtn = document.createElement("button");
      newGameBtn.textContent = `Нова гра`;
      newGameBtn.classList.add('newGameBtn')
      game.appendChild(newGameBtn);

      newGameBtn.addEventListener("click", () => {
        currentKeyIndex = 0;
        newGameBtn.remove();

        gamekey.textContent = `Нажміть клавішу - ${keys[currentKeyIndex]}`;
        gameScore.textContent = `Натиснуто ${currentKeyIndex}/10`;
        PNotify.info({
          title: "Start new game!",
          delay: 700,
        });
      });
    }
  } else {
    PNotify.notice({
      title: "Error!",
      delay: 700,
    });
  }
});

window.addEventListener("keypress", (event) => {
  event.preventDefault();
});

