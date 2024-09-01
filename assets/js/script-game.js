/* Question functionality */

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
      showQuestion(0);
    });
  });
}

function showQuestion(index) {
  const questionHeader = document.querySelector("#question-box h3");
  if (index < gameQuestions.length) {
    questionHeader.textContent = gameQuestions[index].question;
    showAnswers(index);
  } else {
    alert("No more Questions!");
  }
}

/* Answer functionality */

function showAnswers(index) {
  const answerA = document.getElementById("answer-a");
  const answerB = document.getElementById("answer-b");
  const answerC = document.getElementById("answer-c");
  const answerD = document.getElementById("answer-d");

  if (index < gameQuestions.length) {
    answerA.textContent = gameQuestions[index].options[0];
    answerB.textContent = gameQuestions[index].options[1];
    answerC.textContent = gameQuestions[index].options[2];
    answerD.textContent = gameQuestions[index].options[3];

    remainingTime();
  } else {
    console.log("Invalid question index.");
  }
}

/* Countdown */

function remainingTime() {
    let countdown = 60;
    let timer = setInterval(function() {
        countdown--;
        console.log(countdown);
        if (countdown === 0) {
            clearInterval(timer);
            console.log("Countdown finished");
        }
    },1000);
}


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