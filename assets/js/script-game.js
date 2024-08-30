/* Question and Answer functionality */

function showReadyQuestion() {
  const ready = document.getElementById("ready-question");
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
  const questionParagraph = document.querySelector("#question-box p");
  if (index < gameQuestions.length) {
    questionParagraph.textContent = gameQuestions[index].question;
  } else {
    alert("No more Questions!");
  }
}

/* Questions and Answers array */

const gameQuestions = [
  {
    question: "What is the name of Thor's hammer?",
    options: ["A: Mjolnir", "B: Stormbreaker", "C: Aegis", "D: Gungnir"],
    correct: "A",
  },
  {
    question: "What is Tony Stark's superhero name?",
    options: ["A: Iron Fist", "B: Iron Man", "C: War Machine", "D: Hulk"],
    correct: "B",
  },
  {
    question:
      "What material is Captain America's shield made of in the comics?",
    options: [
      "A: Shield of Valor",
      "B: Aegis",
      "C: Vibranium",
      "D: Golden Shield",
    ],
    correct: "C",
  },
  {
    question: "Who is the King of Wakanda?",
    options: [
      "A: Black Panther",
      "B: Thor",
      "C: Spider-Man",
      "D: Doctor Strange",
    ],
    correct: "A",
  },
  {
    question: "What is the name of Tony Stark's AI assistant before JARVIS?",
    options: ["A: HOMER", "B: FRIDAY", "C: DUM-E", "D: P.E.P.P.E.R."],
    correct: "B",
  },
  {
    question: "Which Infinity Stone has the power to manipulate time?",
    options: [
      "A: Mind Stone",
      "B: Soul Stone",
      "C: Power Stone",
      "D: Time Stone",
    ],
    correct: "D",
  },
  {
    question:
      "Which superhero is also known as the 'Master of the Mystic Arts'?",
    options: ["A: Thor", "B: Doctor Strange", "C: Scarlet Witch", "D: Loki"],
    correct: "B",
  },
  {
    question: "Who was the first Avenger?",
    options: [
      "A: Iron Man",
      "B: Captain Marvel",
      "C: Captain America",
      "D: Ant-Man",
    ],
    correct: "C",
  },
  {
    question: "Which character sacrificed themselves for the Soul Stone?",
    options: ["A: Black Widow", "B: Hawkeye", "C: Gamora", "D: Iron Man"],
    correct: "A",
  },
  {
    question: "What is the real name of the superhero Black Widow?",
    options: [
      "A: Natasha Romanoff",
      "B: Wanda Maximoff",
      "C: Carol Danvers",
      "D: Peggy Carter",
    ],
    correct: "A",
  },
  {
    question: "Which metal is most commonly found in Wakanda?",
    options: ["A: Adamantium", "B: Uru", "C: Vibranium", "D: Titanium"],
    correct: "C",
  },
  {
    question:
      "What is the name of the fictional Eastern European country that was destroyed in 'Avengers: Age of Ultron'?",
    options: ["A: Latveria", "B: Sokovia", "C: Genosha", "D: Madripoor"],
    correct: "B",
  },
  {
    question:
      "Which character's DNA was used to create Wolverine in the comics?",
    options: ["A: Sabretooth", "B: Deadpool", "C: Omega Red", "D: Hulk"],
    correct: "A",
  },
  {
    question: "Who became the Sorcerer Supreme after the Ancient One?",
    options: ["A: Wong", "B: Doctor Strange", "C: Mordo", "D: Agatha Harkness"],
    correct: "B",
  },
  {
    question:
      "Which character in the Marvel Universe wields a shield inscribed with the star of David?",
    options: ["A: Sabra", "B: Captain Israel", "C: Union Jack", "D: Patriot"],
    correct: "A",
  },
];
