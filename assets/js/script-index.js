/* Show and Hide Game Modus Box */

function showModusBox() {
  const modus = document.getElementById("game-select");
  modus.classList.remove("hidden");
}

function closeModusBox() {
  const modus = document.getElementById("game-select");
  modus.classList.add("hidden");
}

/* Start Game */

function startGame(mode) {
  if (mode === "normal") {
    alert("Starting Normal Mode with 120 Seconds timer for each question!");
    sessionStorage.setItem("gameMode", "normal");
  } else if (mode === "hard") {
    alert("Starting Hard Mode with 60 Seconds timer for each question!");
    sessionStorage.setItem("gameMode", "hard");
  }
  closeModusBox();
  window.location.href = "game.html";
}

/* Event listener for starting the game & close the box */

document.getElementById("play-button").addEventListener("click", showModusBox);

document.getElementById("normal-mode").addEventListener("click", function () {
  startGame("normal");
});

document.getElementById("hard-mode").addEventListener("click", function () {
  startGame("hard");
});

