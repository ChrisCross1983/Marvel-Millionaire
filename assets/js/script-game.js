/* Questions and Answers array */

const gameQuestions = [
  {
    question: "What is the name of Thor's hammer?",
    options: ["Mjolnir", "Stormbreaker", "Aegis", "Gungnir"],
    correct: "Mjolnir",
  },
  {
    question: "What is Tony Stark's superhero name?",
    options: ["Iron Fist", "Iron Man", "War Machine", "Hulk"],
    correct: "Iron Man",
  },
  {
    question:
      "What material is Captain America's shield made of in the comics?",
    options: ["Shield of Valor", "Aegis", "Vibranium", "Golden Shield"],
    correct: "Vibranium",
  },
  {
    question: "Who is the King of Wakanda?",
    options: ["Black Panther", "Thor", "Spider-Man", "Doctor Strange"],
    correct: "Black Panther",
  },
  {
    question: "What is the name of Tony Stark's AI assistant before JARVIS?",
    options: ["HOMER", "FRIDAY", "DUM-E", "P.E.P.P.E.R."],
    correct: "FRIDAY",
  },
  {
    question: "Which Infinity Stone has the power to manipulate time?",
    options: ["Mind Stone", "Soul Stone", "Power Stone", "Time Stone"],
    correct: "Time Stone",
  },
  {
    question:
      "Which superhero is also known as the 'Master of the Mystic Arts'?",
    options: ["Thor", "Doctor Strange", "Scarlet Witch", "Loki"],
    correct: "Doctor Strange",
  },
  {
    question: "Who was the first Avenger?",
    options: ["Iron Man", "Captain Marvel", "Captain America", "Ant-Man"],
    correct: "Captain America",
  },
  {
    question: "Which character sacrificed themselves for the Soul Stone?",
    options: ["Black Widow", "Hawkeye", "Gamora", "Iron Man"],
    correct: "Black Widow",
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
  },
  {
    question: "Which metal is most commonly found in Wakanda?",
    options: ["Adamantium", "Uru", "Vibranium", "Titanium"],
    correct: "Vibranium",
  },
  {
    question:
      "What is the name of the fictional Eastern European country that was destroyed in 'Avengers: Age of Ultron'?",
    options: ["Latveria", "Sokovia", "Genosha", "Madripoor"],
    correct: "Sokovia",
  },
  {
    question:
      "Which character's DNA was used to create Wolverine in the comics?",
    options: ["Sabretooth", "Deadpool", "Omega Red", "Hulk"],
    correct: "Sabretooth",
  },
  {
    question: "Who became the Sorcerer Supreme after the Ancient One?",
    options: ["Wong", "Doctor Strange", "Mordo", "Agatha Harkness"],
    correct: "Doctor Strange",
  },
  {
    question:
      "Which character in the Marvel Universe wields a shield inscribed with the star of David?",
    options: ["Sabra", "Captain Israel", "Union Jack", "Patriot"],
    correct: "Sabra",
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

/* Global timer */

let timer;

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
  if (index < gameQuestions.length) {
    disableButton();
    questionHeader.textContent = gameQuestions[index].question;
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

  if (index < gameQuestions.length) {
    for (let i = 0; i < answerLabels.length; i++) {
      answerLabels[i].textContent = gameQuestions[index].options[i];
    }
    remainingTime();
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
    const correct = gameQuestions[currentQuestionIndex].correct;

    if (selectedAnswer === correct) {
      alert("You're right buddy!");
      increaseScore();
      showScore();
      enableButton();
    } else {
      const currentScore = scoreMoney[currentQuestionIndex];
      alert(`Sorry buddy, you're wrong! You have won ${currentScore}`);
      resetGame();
    }
    stopCountdown();
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

  if (currentQuestionIndex < gameQuestions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    alert("You've completed the Quiz!");
  }
}

/* Enable & Disable next question button */

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

/* Countdown */

function remainingTime() {
  let countdown = 60;
  const countdownDisplay = document.getElementById("seconds");

  timer = setInterval(function () {
    countdown--;
    countdownDisplay.textContent = countdown;

    if (countdown === 0) {
      clearInterval(timer);
      console.log("Countdown finished");
    }
  }, 1000);
}

/* Stop countdown */

function stopCountdown() {
  clearInterval(timer);
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

function resetGame() {
  currentQuestionIndex = 0;
  currentScoreIndex = 0;
  document.getElementById("submit-btn").disabled = false;
  document.getElementById("next-question").disabled = true;
  stopCountdown();
  showScore();
  showReadyQuestion();
}

/* Exit Game */

 document.getElementById("exit-btn").addEventListener('click', function() {
    exitGame();
 });

 function exitGame() {
    const exit = document.getElementById("exit-select");
    exit.classList.remove("hidden");
}