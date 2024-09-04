/* jshint esnext: true */
"use strict";

/* Questions and Answers array */

const normalQuestions = [
  {
    question: "What is the name of Thor's hammer?",
    options: ["Mjolnir", "Stormbreaker", "Aegis", "Gungnir"],
    correct: "Mjolnir",
    hint: "This weapon's name sounds like a thunderous strike.",
  },
  {
    question: "What is Tony Stark's superhero name?",
    options: ["Iron Fist", "Iron Man", "War Machine", "Hulk"],
    correct: "Iron Man",
    hint: "This hero's name reflects his metal suit.",
  },
  {
    question:
      "What material is Captain America's shield made of in the comics?",
    options: ["Shield of Valor", "Aegis", "Vibranium", "Golden Shield"],
    correct: "Vibranium",
    hint: "It's a rare and almost indestructible metal from Wakanda.",
  },
  {
    question: "Who is the King of Wakanda?",
    options: ["Black Panther", "Thor", "Spider-Man", "Doctor Strange"],
    correct: "Black Panther",
    hint: "This character shares his name with a stealthy feline.",
  },
  {
    question: "What is the name of Tony Stark's AI assistant before JARVIS?",
    options: ["HOMER", "FRIDAY", "DUM-E", "P.E.P.P.E.R."],
    correct: "FRIDAY",
    hint: "This assistant is named after a day in the week, often associated with the end of the workweek.",
  },
  {
    question: "Which Infinity Stone has the power to manipulate time?",
    options: ["Mind Stone", "Soul Stone", "Power Stone", "Time Stone"],
    correct: "Time Stone",
    hint: "Its power is related to an element that is always moving forward.",
  },
  {
    question:
      "Which superhero is also known as the 'Master of the Mystic Arts'?",
    options: ["Thor", "Doctor Strange", "Scarlet Witch", "Loki"],
    correct: "Doctor Strange",
    hint: "He is a former surgeon who turned to magic after an accident.",
  },
  {
    question: "Who was the first Avenger?",
    options: ["Iron Man", "Captain Marvel", "Captain America", "Ant-Man"],
    correct: "Captain America",
    hint: "He fought in World War II and is known as a symbol of hope.",
  },
  {
    question: "Which character sacrificed themselves for the Soul Stone?",
    options: ["Black Widow", "Hawkeye", "Gamora", "Iron Man"],
    correct: "Black Widow",
    hint: "A highly skilled spy with a complicated past.",
  },
  {
    question: "What is the real name of the superhero Black Widow?",
    options: [
      "Natasha Romanoff",
      "Wanda Maximoff",
      "Carol Danvers",
      "Peggy Carter",
    ],
    correct: "Natasha Romanoff",
    hint: "She has a Russian background and was trained in the Red Room.",
  },
  {
    question: "Which metal is most commonly found in Wakanda?",
    options: ["Adamantium", "Uru", "Vibranium", "Titanium"],
    correct: "Vibranium",
    hint: "This metal is known for its ability to absorb vibrations.",
  },
  {
    question:
      "What is the name of the fictional Eastern European country destroyed in 'Avengers: Age of Ultron'?",
    options: ["Latveria", "Sokovia", "Genosha", "Madripoor"],
    correct: "Sokovia",
    hint: "This country was the site of a major battle involving Ultron.",
  },
  {
    question:
      "Which character's DNA was used to create Wolverine in the comics?",
    options: ["Sabretooth", "Deadpool", "Omega Red", "Hulk"],
    correct: "Sabretooth",
    hint: "This character shares a feral connection with Wolverine.",
  },
  {
    question: "Who became the Sorcerer Supreme after the Ancient One?",
    options: ["Wong", "Doctor Strange", "Mordo", "Agatha Harkness"],
    correct: "Doctor Strange",
    hint: "He has a photographic memory and studied under the Ancient One.",
  },
  {
    question:
      "Which character in the Marvel Universe wields a shield inscribed with the star of David?",
    options: ["Sabra", "Captain Israel", "Union Jack", "Patriot"],
    correct: "Sabra",
    hint: "This hero is a mutant from Israel.",
  },
];

const hardQuestions = [
  {
    question: "In which year was the first Iron Man movie released?",
    options: ["2005", "2008", "2010", "2012"],
    correct: "2008",
    hint: "This year marked the beginning of the Marvel Cinematic Universe.",
  },
  {
    question:
      "What is the real name of the superhero known as the Scarlet Witch?",
    options: ["Wanda Maximoff", "Jean Grey", "Emma Frost", "Natasha Romanoff"],
    correct: "Wanda Maximoff",
    hint: "She is a powerful sorceress and the sister of Quicksilver.",
  },
  {
    question:
      "Which character is often referred to as the 'Merc with a Mouth'?",
    options: ["Deadpool", "Wolverine", "Gambit", "Spider-Man"],
    correct: "Deadpool",
    hint: "This antihero is known for his humor and ability to break the fourth wall.",
  },
  {
    question: "Who was the scientist that transformed himself into the Hulk?",
    options: ["Bruce Wayne", "Bruce Banner", "Tony Stark", "Peter Parker"],
    correct: "Bruce Banner",
    hint: "His transformation was a result of exposure to gamma radiation.",
  },
  {
    question: "Which comic book series introduced the character Thanos?",
    options: [
      "Iron Man",
      "The Invincible Iron Man",
      "The Incredible Hulk",
      "The Invincible Thor",
    ],
    correct: "The Invincible Iron Man",
    hint: "Thanos' first appearance was in a comic involving a metal-clad superhero.",
  },
  {
    question: "What is the name of Thor's father in Norse mythology?",
    options: ["Loki", "Odin", "Baldur", "Freyr"],
    correct: "Odin",
    hint: "He is often depicted as an elderly, wise god with one eye.",
  },
  {
    question: "Which villain is known as the 'Mad Titan'?",
    options: ["Ultron", "Loki", "Thanos", "Hela"],
    correct: "Thanos",
    hint: "He is obsessed with balancing the universe using the Infinity Stones.",
  },
  {
    question: "What was the name of the Nazi organization led by Red Skull?",
    options: ["Hydra", "SHIELD", "The Hand", "AIM"],
    correct: "Hydra",
    hint: "Their motto is 'Cut off one head, two more shall take its place.'",
  },
  {
    question: "Which material is Thor's new weapon, Stormbreaker, made from?",
    options: ["Uru", "Vibranium", "Adamantium", "Steel"],
    correct: "Uru",
    hint: "This metal is of Asgardian origin, used by dwarves in Nidavellir.",
  },
  {
    question:
      "What is the name of the alternate dimension that Doctor Strange primarily draws power from?",
    options: [
      "Dark Dimension",
      "Mirror Dimension",
      "Quantum Realm",
      "Astral Plane",
    ],
    correct: "Dark Dimension",
    hint: "This dimension is ruled by Dormammu.",
  },
  {
    question: "Who is the guardian of the Soul Stone in the MCU?",
    options: ["Red Skull", "Loki", "Odin", "Gamora"],
    correct: "Red Skull",
    hint: "He was once a Nazi scientist before being transported to a distant planet.",
  },
  {
    question: "Which Avenger is known as the 'Man out of Time'?",
    options: ["Iron Man", "Captain America", "Black Panther", "Hawkeye"],
    correct: "Captain America",
    hint: "He was frozen for decades before being revived in the modern era.",
  },
  {
    question: "Who is the current Sorcerer Supreme in the MCU?",
    options: ["The Ancient One", "Doctor Strange", "Mordo", "Wong"],
    correct: "Doctor Strange",
    hint: "He was trained in Kamar-Taj and uses the Eye of Agamotto.",
  },
  {
    question: "Which Marvel character is a founding member of the X-Men?",
    options: ["Wolverine", "Cyclops", "Deadpool", "Scarlet Witch"],
    correct: "Cyclops",
    hint: "He leads the X-Men and can emit powerful optic blasts.",
  },
  {
    question: "Which Marvel villain is a master of magnetism?",
    options: ["Magneto", "Doctor Doom", "Green Goblin", "Kingpin"],
    correct: "Magneto",
    hint: "He can control metal and is a major adversary of the X-Men.",
  },
];

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
let countdown = 120;
let currentQuestion;
let currentQuestionIndex = 0;

/* Loading game questions */

const gameMode = sessionStorage.getItem("gameMode");

if (gameMode === "hard") {
  questions = hardQuestions;
} else {
  questions = normalQuestions;
}

/* Question functionality */
/* Ask initial question if player is ready */

function showReadyQuestion() {
  const ready = document.getElementById("ready-question");
  const readyText = document.querySelector("#ready-question p");

  readyText.innerHTML = `Prepare for your ${
    currentQuestionIndex + 1
  } question and<br /> remember to keep an eye on the countdown!`;
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
  if (index < questions.length) {
    questionHeader.textContent = questions[index].question;
    currentQuestion = questions[index];
    showAnswers(index);
  } else {
    alert("No more Questions!");
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
  } else {
    console.log("Invalid question index.");
  }
}

/* check correct answer */

document.getElementById("submit-btn").addEventListener("click", function () {
  correctAnswer();
});

function correctAnswer() {
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
      const nextScore = scoreMoney[currentQuestionIndex + 1] || "1M";
      showSuccessPopup(`You're right buddy! You reached ${nextScore}`);
      increaseScore();
      showScore();
      isQuestionAnswered = true;
      disableJokers();
    } else {
      const currentScore = scoreMoney[currentQuestionIndex];
      alert(`Sorry buddy, you're wrong! You have won ${currentScore}`);
      resetGame();
      return;
    }
    pauseCountdown();
    document.getElementById("submit-btn").disabled = true;
  } else {
    alert("Please select an answer before submitting");
  }
}

/* Success Popup */

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

function nextAnswer() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    resetAnswers();
    showQuestion(currentQuestionIndex);
    startNewCountdown();
    isQuestionAnswered = false;
    enableUnusedJokers();

    /*// Reactivate disabled answers
    let answerOptions = document.querySelectorAll('input[name="answers"]');
    answerOptions.forEach((option) => {
      option.disabled = false;
    });

    // Restore opacity
    let answerLabels = document.querySelectorAll(".answer-text");
    answerLabels.forEach((label) => {
      label.style.opacity = 1;
      label.classList.remove("selected-answer");
    });*/
  } else {
    alert("You've completed the Quiz!");
  }
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

  for (let i = 0; i < currentQuestion.options.length; i++) {
    if (currentQuestion.options[i] !== correctAnswer) {
      incorrectAnswers.push(currentQuestion.options[i]);
    }
  }

  /* Collect two random answers */

  let randomIndex1 = Math.floor(Math.random() * incorrectAnswers.length);
  let randomAnswer1 = incorrectAnswers[randomIndex1];

  incorrectAnswers.splice(randomIndex1, 1);

  let randomIndex2 = Math.floor(Math.random() * incorrectAnswers.length);
  let randomAnswer2 = incorrectAnswers[randomIndex2];

  /* Disable the random answers */

  let answerLabels = document.querySelectorAll(".answer-text");
  answerLabels.forEach((label) => {
    if (
      label.textContent === randomAnswer1 ||
      label.textContent === randomAnswer2
    ) {
      label.previousElementSibling.disabled = true;
      label.style.opacity = 0.5;
    }
  });

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
  let randomIndex = Math.floor(Math.random() * incorrectAnswers.length);
  let randomAnswer = incorrectAnswers[randomIndex];

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

/* Countdown */

function remainingTime() {
  const countdownDisplay = document.getElementById("seconds");

  timer = setInterval(function () {
    countdown--;
    countdownDisplay.textContent = countdown;

    if (countdown <= 0) {
      clearInterval(timer);
      console.log("Countdown finished");
    }
  }, 1000);
}

/* Pause countdown */

function pauseCountdown() {
  clearInterval(timer);
}

/* Resume countdown */

function resumeCountdown() {
  if (countdown > 0 && !isQuestionAnswered) {
    remainingTime();
  }
}

/* Start new countdown */

function startNewCountdown() {
  clearInterval(timer);
  countdown = 120;
  remainingTime();
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
  window.location.href = "index.html";
});

function takeMoney() {
  const currentScore = scoreMoney[currentScoreIndex];
  alert(`You have won ${currentScore}!`);
}

/* No */

document.getElementById("take-stay").addEventListener("click", function () {
  closeTakeMoneyMessage();
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
