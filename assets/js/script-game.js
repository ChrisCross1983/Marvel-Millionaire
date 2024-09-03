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

/* Loading game questions */

const gameMode = sessionStorage.getItem("gameMode");

if (gameMode === "hard") {
  questions = hardQuestions;
} else {
  questions = normalQuestions;
}

/* Question functionality */
/* Ask initial question if player is ready */

let currentQuestionIndex = 0;

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
      showScore(0);
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
    disableButton();
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

    if (selectedAnswer === correct) {
      alert("You're right buddy!");
      increaseScore();
      showScore();
      enableButton();
      isQuestionAnswered = true;
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

/* next question & answer */

document.getElementById("next-question").addEventListener("click", function () {
  this.classList.remove("animate-button");
  nextAnswer();
});

function nextAnswer() {
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
    startNewCountdown();
    isQuestionAnswered = false;

    // Reactivate disabled answers
    let answerOptions = document.querySelectorAll('input[name="answers"]');
    answerOptions.forEach((option) => {
      option.disabled = false;
    });

    // Restore opacity
    let answerLabels = document.querySelectorAll(".answer-text");
    answerLabels.forEach((label) => {
      label.style.opacity = 1;
    });
  } else {
    alert("You've completed the Quiz!");
  }
}

/* Enable & Disable buttons */

document.getElementById("next-question").disabled = true;

function enableButton() {
  const nextQuestionButton = document.getElementById("next-question");
  nextQuestionButton.disabled = false;
  nextQuestionButton.classList.add("animate-button");
}

function disableButton() {
  const nextQuestionButton = document.getElementById("next-question");
  nextQuestionButton.disabled = true;
  nextQuestionButton.classList.remove("animate-button");
}

/* Joker */

let jokerUsed = false;

/* 50:50 Joker Thanos */

document.getElementById("joker-thanos").addEventListener("click", jokerThanos);

function jokerThanos() {
  if (jokerUsed) return;

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

  console.log(randomAnswer1, randomAnswer2);

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
  jokerUsed = true;
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

/* Take Money and exit Game Button */

document.getElementById("take-btn").addEventListener("click", function () {
  exitGame();
});

document.getElementById("quit").addEventListener("click", function () {
  takeMoney();
});

function takeMoney() {
  const currentScore = scoreMoney[currentScoreIndex];
  alert(`You have won ${currentScore}!`);
}

/* Exit Game */

function exitGame() {
  const exit = document.getElementById("exit-select");
  exit.classList.remove("hidden");
  pauseCountdown();
}

function closeExitGame() {
  const closeExit = document.getElementById("exit-select");
  closeExit.classList.add("hidden");
}

document.getElementById("quit").addEventListener("click", function () {
  closeExitGame();
  window.location.href = "index.html";
});

document.getElementById("stay").addEventListener("click", function () {
  closeExitGame();
  resumeCountdown();
});

/* Restart Game */

function resetGame() {
  currentQuestionIndex = 0;
  currentScoreIndex = 0;
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("next-question").disabled = true;
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
  });

  jokerUsed = false;
  document.getElementById("joker-thanos").disabled = false;
  showReadyQuestion();
}
