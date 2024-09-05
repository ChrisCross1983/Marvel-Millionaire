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
      question: "What material is Captain America's shield made of in the comics?",
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
      question: "What is the alias of Clint Barton?",
      options: ["Black Widow", "Hawkeye", "Falcon", "Quicksilver"],
      correct: "Hawkeye",
      hint: "He is an expert marksman with a bow.",
    },
    {
      question: "Which Infinity Stone is embedded in Vision's forehead?",
      options: ["Mind Stone", "Soul Stone", "Power Stone", "Time Stone"],
      correct: "Mind Stone",
      hint: "This stone can manipulate thoughts and consciousness.",
    },
    {
      question: "What is Peter Parker's superhero identity?",
      options: ["Spider-Man", "Iron Man", "Ant-Man", "Captain Marvel"],
      correct: "Spider-Man",
      hint: "This hero's powers come from a radioactive arachnid.",
    },
    {
      question: "Who was the first character to hold the title of Captain Marvel in the MCU?",
      options: ["Carol Danvers", "Mar-Vell", "Monica Rambeau", "Yon-Rogg"],
      correct: "Carol Danvers",
      hint: "She is a former U.S. Air Force pilot.",
    },
    {
      question: "What planet is the home of the Nova Corps?",
      options: ["Xandar", "Asgard", "Knowhere", "Sakaar"],
      correct: "Xandar",
      hint: "This planet was destroyed by Thanos in 'Infinity War.'",
    },
    {
      question: "What is the real name of the superhero known as Black Panther?",
      options: ["T'Challa", "N'Jadaka", "M'Baku", "T'Chaka"],
      correct: "T'Challa",
      hint: "He is the son of the former king of Wakanda.",
    },
    {
      question: "Which character is often referred to as the 'Merc with a Mouth'?",
      options: ["Deadpool", "Wolverine", "Gambit", "Spider-Man"],
      correct: "Deadpool",
      hint: "This antihero is known for his humor and ability to break the fourth wall.",
    },
    {
      question: "What is the name of the advanced AI created by Tony Stark in 'Avengers: Age of Ultron'?",
      options: ["JARVIS", "Ultron", "FRIDAY", "EDITH"],
      correct: "Ultron",
      hint: "This AI turned villainous and tried to destroy humanity.",
    },
    {
      question: "Who is the main antagonist in the movie 'Thor: Ragnarok'?",
      options: ["Loki", "Hela", "Surtur", "Grandmaster"],
      correct: "Hela",
      hint: "She is the Goddess of Death and Thor's sister.",
    },
    {
      question: "What is the name of the prison where many supervillains are kept?",
      options: ["The Raft", "Arkham Asylum", "The Vault", "The Triskelion"],
      correct: "The Raft",
      hint: "This floating prison is used to detain enhanced individuals.",
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
      question: "Who is known as the Sorcerer Supreme in the Marvel Universe?",
      options: ["Doctor Strange", "The Ancient One", "Wong", "Mordo"],
      correct: "Doctor Strange",
      hint: "He became the master of the mystic arts after the Ancient One.",
    },
    {
      question: "Which character's father was a celestial?",
      options: ["Star-Lord", "Thor", "Loki", "Drax"],
      correct: "Star-Lord",
      hint: "He is a half-human, half-celestial being.",
    },
    {
      question: "What is the true identity of the superhero known as 'The Winter Soldier'?",
      options: ["Sam Wilson", "James Barnes", "Steve Rogers", "Clint Barton"],
      correct: "James Barnes",
      hint: "He was Captain America's best friend during World War II.",
    },
    {
      question: "Which substance is injected into Steve Rogers to turn him into Captain America?",
      options: ["Super Soldier Serum", "Pym Particles", "Infinity Formula", "Extremis"],
      correct: "Super Soldier Serum",
      hint: "This serum was developed by Dr. Abraham Erskine.",
    },
    {
      question: "What is the name of the prison located in the Quantum Realm?",
      options: ["The Vault", "The Raft", "The Kyln", "Subatomic Penitentiary"],
      correct: "Subatomic Penitentiary",
      hint: "This prison is beyond the reach of the real world.",
    },
    {
      question: "What is the title of the third Avengers movie?",
      options: ["Age of Ultron", "Infinity War", "Endgame", "Civil War"],
      correct: "Infinity War",
      hint: "This movie features the Avengers facing Thanos.",
    },
    {
      question: "Which alien race does Ronan the Accuser belong to?",
      options: ["Kree", "Skrull", "Chitauri", "Asgardian"],
      correct: "Kree",
      hint: "This race has blue skin and advanced technology.",
    },
    {
      question: "Who is the ruler of the Dark Dimension?",
      options: ["Dormammu", "Loki", "Surtur", "Mephisto"],
      correct: "Dormammu",
      hint: "This entity attempted to conquer Earth in 'Doctor Strange.'",
    },
    {
      question: "Who wields the Ebony Blade?",
      options: ["Blade", "Black Knight", "Moon Knight", "Ghost Rider"],
      correct: "Black Knight",
      hint: "This character is a member of the Avengers and has a cursed sword.",
    },
    {
      question: "Which character has been both an Avenger and a member of the X-Men?",
      options: ["Wolverine", "Scarlet Witch", "Hawkeye", "Beast"],
      correct: "Beast",
      hint: "He is known for his blue fur and high intelligence.",
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