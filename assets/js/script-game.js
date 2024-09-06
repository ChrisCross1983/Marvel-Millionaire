/* Score array */

const scoreMoney = [
  "0K",
  "0.1k",
  "0.2k",
  "0.5K",
  "1K",
  "2K",
  "4K",
  "8K",
  "16K",
  "32K",
  "64K",
  "128K",
  "250K",
  "500K",
  "1M",
];

/* Global variables timer and game questions */

let questions = [];
let isQuestionAnswered = false;
let timer;
let countdown = null;
let currentQuestion;
let currentQuestionIndex = 0;
let isCountdownStopped = false;

/* Loading game questions */

const gameMode = sessionStorage.getItem("gameMode");

if (gameMode === "hard") {
  questions = hardQuestions;
  countdown = 60;
} else {
  questions = normalQuestions;
  countdown = 120;
}

/* Question functionality */
/* Ask initial question if player is ready */

function showReadyQuestion() {
  const ready = document.getElementById("ready-question");
  const readyText = document.querySelector("#ready-question p");

  readyText.innerHTML = `Prepare for your first question and remember to keep an eye on the countdown!`;
  ready.classList.remove("hidden");
}

function closeReadyQuestion() {
  const ready = document.getElementById("ready-question");
  ready.classList.add("hidden");
}

if (window.location.pathname.includes("game.html")) {
  window.addEventListener("DOMContentLoaded", function () {
    showReadyQuestion();

    document.getElementById("btn-ready").addEventListener("click", function () {
      closeReadyQuestion();
      showScore();
      showQuestion(0);
      /* Background Music */
      document.getElementById("background-music").play();
    });
  });
}

/* Show Question */

function showQuestion(index) {
  document.getElementById("submit-btn").disabled = false;
  /* Deselect Radio Button */
  const deselect = document.querySelectorAll('input[name="answers"]');
  deselect.forEach((radio) => (radio.checked = false));

  const questionHeader = document.querySelector("#question-box h3");

  if (index < questions.length && index >= 0) {
    questionHeader.textContent = questions[index].question;
    currentQuestion = questions[index];
    countdown = gameMode === "hard" ? 60 : 120;
    showAnswers(index);
  } else {

  }
}

/* Answer functionality */

/* show answer */

function showAnswers(index) {
  const answerLabels = [
    document.getElementById("label1"),
    document.getElementById("label2"),
    document.getElementById("label3"),
    document.getElementById("label4"),
  ];

  if (index < questions.length) {
    for (let i = 0; i < answerLabels.length; i++) {
      answerLabels[i].textContent = questions[index].options[i];
    }
    startNewCountdown();
  }
}

/* check correct answer */

document.getElementById("submit-btn").addEventListener("click", function () {
  correctAnswer();
});

function correctAnswer() {
  if (!questions[currentQuestionIndex]) {
    return;
  }

  const selectedOption = document.querySelector(
    'input[name="answers"]:checked'
  );

  if (selectedOption) {
    const selectedAnswer = document
      .querySelector(`label[for="${selectedOption.id}"]`)
      .textContent.trim();
    const correct = questions[currentQuestionIndex].correct;

    /* disable radio buttons after answer is selected */
    const answerOptions = document.querySelectorAll('input[name="answers"]');
    answerOptions.forEach((option) => {
      option.disabled = true;
    });

    /* Visual effect for selected answer */
    document
      .querySelector(`label[for="${selectedOption.id}"]`)
      .classList.add("selected-answer");

    if (selectedAnswer === correct) {
      increaseScore();
      currentQuestionIndex++;
      const nextScore = scoreMoney[currentScoreIndex] || "1M";
      showSuccessPopup(`You're right Buddy! You reached ${nextScore}`);
      showScore();
      isQuestionAnswered = true;
      disableJokers();
    } else {
      const currentScore = scoreMoney[currentScoreIndex];
      wrongAnswerMessage();
      resetGame();
      return;
    }
    pauseCountdown();
    document.getElementById("submit-btn").disabled = true;
  } else {
    const noAnswerPopup = document.getElementById("no-answer-selected");
    noAnswerPopup.classList.remove("hidden");

    document
      .getElementById("close-no-answer")
      .addEventListener("click", function () {
        noAnswerPopup.classList.add("hidden");
      });
  }
}

/* Success correct answer Popup */

function showSuccessPopup(message) {
  const successPopup = document.getElementById("success-popup");
  const successMessage = document.getElementById("success-message");

  successMessage.textContent = message;
  successPopup.classList.remove("hidden");

  document.getElementById("btn-next").addEventListener("click", function () {
    successPopup.classList.add("hidden");
    nextAnswer();
  });
}

const answerOptions = document.querySelectorAll('input[name="answers"]');
answerOptions.forEach((option) => {
  option.addEventListener("change", function () {
    document.querySelectorAll(".answer-text").forEach((label) => {
      label.classList.remove("selected-answer");
    });
    document
      .querySelector(`label[for="${option.id}"]`)
      .classList.add("selected-answer");
  });
});

/* next question & answer */

let answeringInProgress = false;

function nextAnswer() {
  if (answeringInProgress) return;
  answeringInProgress = true;

  if (currentQuestionIndex >= questions.length) {
    resetGame();
    answeringInProgress = false;
    return;
  }
  resetAnswers();
  showQuestion(currentQuestionIndex);
  startNewCountdown();
  isQuestionAnswered = false;
  enableUnusedJokers();

  // Reactivate disabled answers
  let answerOptions = document.querySelectorAll('input[name="answers"]');
  answerOptions.forEach((option) => {
    option.disabled = false;
  });

  // Restore opacity
  let answerLabels = document.querySelectorAll(".answer-text");
  answerLabels.forEach((label) => {
    label.style.opacity = 1;
    label.classList.remove("selected-answer");
  });

  answeringInProgress = false; // Flag zurücksetzen
}

/* Joker */

let thanosJokerUsed = false;
let rocketJokerUsed = false;
let thorJokerUsed = false;
let hulkJokerUsed = false;

/* Enables or disables Jokers */

function disableJokers() {
  document.getElementById("joker-thanos").disabled = true;
  document.getElementById("joker-rocket").disabled = true;
  document.getElementById("joker-thor").disabled = true;
  document.getElementById("joker-hulk").disabled = true;
}

function enableUnusedJokers() {
  if (!thanosJokerUsed) {
    document.getElementById("joker-thanos").disabled = false;
    document.getElementById("joker-thanos").classList.remove("joker-used");
  }
  if (!rocketJokerUsed) {
    document.getElementById("joker-rocket").disabled = false;
    document.getElementById("joker-rocket").classList.remove("joker-used");
  }
  if (!thorJokerUsed) {
    document.getElementById("joker-thor").disabled = false;
    document.getElementById("joker-thor").classList.remove("joker-used");
  }
  if (!hulkJokerUsed) {
    document.getElementById("joker-hulk").disabled = false;
    document.getElementById("joker-hulk").classList.remove("joker-used");
  }
}

/* 50:50 Joker Thanos */

document.getElementById("joker-thanos").addEventListener("click", jokerThanos);

function jokerThanos() {
  if (thanosJokerUsed) return;

  let incorrectAnswers = [];
  let correctAnswer = currentQuestion.correct;

  document.querySelectorAll(".answer-text").forEach((label) => {
    if (
      label.textContent !== correctAnswer &&
      !label.previousElementSibling.disabled
    ) {
      incorrectAnswers.push(label);
    }
  });

  /* Collect two random answers */
  if (incorrectAnswers.length > 1) {
    let randomIndex1 = Math.floor(Math.random() * incorrectAnswers.length);
    let randomAnswer1 = incorrectAnswers.splice(randomIndex1, 1)[0];

    let randomIndex2 = Math.floor(Math.random() * incorrectAnswers.length);
    let randomAnswer2 = incorrectAnswers[randomIndex2];

    /* Disable the random answers */

    randomAnswer1.previousElementSibling.disabled = true;
    randomAnswer1.style.opacity = 0.5;

    randomAnswer2.previousElementSibling.disabled = true;
    randomAnswer2.style.opacity = 0.5;
  }

  document.getElementById("joker-thanos").disabled = true;
  document.getElementById("joker-thanos").classList.add("joker-used");
  thanosJokerUsed = true;
}

/* Hint Joker Rocket */

const showHint = document.getElementById("hint-message");
const addHint = document.querySelector("#hint-message p");
document.getElementById("joker-rocket").addEventListener("click", jokerRocket);

function jokerRocket() {
  if (rocketJokerUsed) return;

  if (currentQuestionIndex >= questions.length) {
    return;
  }
  const collectHints = questions[currentQuestionIndex].hint;

  showHint.classList.remove("hidden");
  addHint.textContent = `Here is your hint: "${collectHints}"`;
  document.getElementById("joker-rocket").disabled = true;
  document.getElementById("joker-rocket").classList.add("joker-used");
  rocketJokerUsed = true;
}

document.getElementById("btn-close").addEventListener("click", function () {
  closeHint();
});

function closeHint() {
  showHint.classList.add("hidden");
}

/* Stop Timer Joker Thor */

document.getElementById("joker-thor").addEventListener("click", jokerThor);

function jokerThor() {
  if (thorJokerUsed) return;
  pauseCountdown();
  isCountdownStopped = true;
  document.getElementById("joker-thor").disabled = true;
  document.getElementById("joker-thor").classList.add("joker-used");
  thorJokerUsed = true;
}

/* Hulk Joker */

document.getElementById("joker-hulk").addEventListener("click", jokerHulk);

function jokerHulk() {
  if (hulkJokerUsed) return;

  let incorrectAnswers = [];
  let correctAnswer = currentQuestion.correct;

  for (let i = 0; i < currentQuestion.options.length; i++) {
    if (currentQuestion.options[i] !== correctAnswer) {
      incorrectAnswers.push(currentQuestion.options[i]);
    }
  }

  let availableIncorrectAnswers = incorrectAnswers.filter((answer) => {
    let answerLabel = Array.from(
      document.querySelectorAll(".answer-text")
    ).find((label) => label.textContent === answer);
    return answerLabel && !answerLabel.previousElementSibling.disabled;
  });

  if (availableIncorrectAnswers.length > 0) {
    let randomIndex = Math.floor(
      Math.random() * availableIncorrectAnswers.length
    );
    let randomAnswer = availableIncorrectAnswers[randomIndex];

    let answerLabels = document.querySelectorAll(".answer-text");
    answerLabels.forEach((label) => {
      if (label.textContent === randomAnswer) {
        label.previousElementSibling.disabled = true;
        label.classList.add("smash");
      }
    });

    document.getElementById("joker-hulk").disabled = true;
    document.getElementById("joker-hulk").classList.add("joker-used");
    hulkJokerUsed = true;
  }
}

/* Countdown */

function remainingTime() {
  const countdownDisplay = document.getElementById("seconds");

  timer = setInterval(function () {
    countdown--;
    countdownDisplay.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      timeoutMessage();
    }
  }, 1000);
}

/* Pause countdown */

function pauseCountdown() {
  clearInterval(timer);
}

/* Resume countdown */

function resumeCountdown() {
  if (countdown > 0 && !isQuestionAnswered && !isCountdownStopped) {
    remainingTime();
  }
}

/* Start new countdown */

function startNewCountdown() {
  clearInterval(timer);
  remainingTime();
}

/* Time is over */

function timeoutMessage() {
  const popupTime = document.getElementById("timeout-message");
  const finalScore = document.getElementById("final-score");

  finalScore.textContent = scoreMoney[currentScoreIndex];

  popupTime.classList.remove("hidden");

  document.getElementById("restart-btn").addEventListener("click", function () {
    resetGame();
    popupTime.classList.add("hidden");
  });
}

/* Wrong answer message */

function wrongAnswerMessage() {
  const popupWrongAnswer = document.getElementById("wrong-message");
  const finalScore = document.getElementById("end-score");

  finalScore.textContent = scoreMoney[currentScoreIndex];

  popupWrongAnswer.classList.remove("hidden");

  document.getElementById("resume-btn").addEventListener("click", function () {
    resetGame();
    popupWrongAnswer.classList.add("hidden");
  });
}

/* Score system */

let currentScoreIndex = 0;

function increaseScore() {
  if (currentScoreIndex < scoreMoney.length - 1) {
    currentScoreIndex++;
  }
}

function showScore() {
  const currentScore = document.getElementById("current-score");
  const nextScore = document.getElementById("next-score");

  currentScore.innerHTML = scoreMoney[currentScoreIndex];
  nextScore.innerHTML = scoreMoney[currentScoreIndex + 1] || "1M";
}

/* Exit Game Button */

document.getElementById("exit-btn").addEventListener("click", function () {
  document.getElementById("exit-select").classList.remove("hidden");
  pauseCountdown();
});

/* Yes and redirect to index */

document.getElementById("quit").addEventListener("click", function () {
  closeExitGame();
  window.location.href = "index.html";
});

/* No and return to game */

document.getElementById("stay").addEventListener("click", function () {
  closeExitGame();
  resumeCountdown();
});

function closeExitGame() {
  const closeExit = document.getElementById("exit-select");
  closeExit.classList.add("hidden");
}

/* Take Money Button */

document.getElementById("take-btn").addEventListener("click", function () {
  document.getElementById("take-select").classList.remove("hidden");
  pauseCountdown();
});

/* Yes */

document.getElementById("take-leave").addEventListener("click", function () {
  takeMoney();
});

function takeMoney() {
  const currentScore = scoreMoney[currentScoreIndex];
  showMessage(`Thanks for playing, you have won ${currentScore}!`);
  document.getElementById("take-select").classList.add("hidden");
}

function showMessage(message) {
  const messageBox = document.getElementById("message-box");
  const messageText = document.getElementById("message-text");

  messageText.textContent = message;
  messageBox.classList.remove("hidden");

  document
    .getElementById("close-message")
    .addEventListener("click", function () {
      messageBox.classList.add("hidden");
      window.location.href = "index.html";
    });
}

/* No */

document.getElementById("take-stay").addEventListener("click", function () {
  closeTakeMoneyMessage();
  if (!isCountdownStopped) {
    resumeCountdown();
  }
});

function closeTakeMoneyMessage() {
  const takeMessage = document.getElementById("take-select");
  takeMessage.classList.add("hidden");
  resumeCountdown();
}

/* Refresh answer box */

function resetAnswers() {
  let answerLabels = document.querySelectorAll(".answer-text");
  answerLabels.forEach((label) => {
    label.classList.remove("selected-answer", "smash");
    label.style.opacity = 1;
  });
  let answerOptions = document.querySelectorAll('input[name="answers"]');
  answerOptions.forEach((option) => {
    option.disabled = false;
    option.checked = false;
  });
}

/* Restart Game */

function resetGame() {
  currentQuestionIndex = 0;
  currentScoreIndex = 0;
  document.getElementById("submit-btn").disabled = false;
  pauseCountdown();
  showScore();

  const questionBox = document.getElementById("question-box");
  questionBox.classList.remove("hidden");

  let answerOptions = document.querySelectorAll('input[name="answers"]');
  answerOptions.forEach((option) => {
    option.disabled = false;
    option.checked = false;
  });

  let answerLabels = document.querySelectorAll(".answer-text");
  answerLabels.forEach((label) => {
    label.style.opacity = 1;
    label.classList.remove("selected-answer");
  });

  thanosJokerUsed = false;
  rocketJokerUsed = false;
  thorJokerUsed = false;
  hulkJokerUsed = false;

  resetAnswers();
  enableUnusedJokers();
  showReadyQuestion();
}

/* Won game congrats message

function showEndGameMessage() {
  const congratsMessage = document.getElementById("congrats-message");
  congratsMessage.classList.remove("hidden");

  document.getElementById("restart-btn").addEventListener("click", function () {
    congratsMessage.classList.add("hidden");
    resetGame();
  });
}*/
