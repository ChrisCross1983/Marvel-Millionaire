# Marvel Millionaire - Project Portfolio 2 - HTML, CSS, JavaScript

Welcome to “Marvel Millionaire”, an exciting quiz game inspired by the popular show “Who Wants to Be a Millionaire”. Challenge your knowledge of the Marvel universe as you answer increasingly challenging questions to climb the prize ladder. Equipped with different jokers and a ticking timer, you must prove that you are the ultimate Marvel fan!

![Responsive Mockup](/readme-img/mockup.png)

The live link for Marvel Millionaire can be found here: ["Welcome to Marvel Millionaire!"](https://chriscross1983.github.io/Marvel-Millionaire/)

## Software Developer

| Name            | Linkedin                                                                    | GitHub                                                          |
| --------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Christian Borza | [Link to his Linkedin Profile](https://www.linkedin.com/in/borzachristian/) | [Link to his GitHub Profile](https://github.com/ChrisCross1983) |

# Objectives

- **Answer Marvel Trivia**: Test your Marvel knowledge with questions that get harder as you progress.
- **Climb the Prize Ladder**: Each correct answer takes you closer to the grand prize.
- **Use Lifelines**: Utilize jokers like Thanos, Rocket, Thor, and Hulk to help you answer tough questions.
- **Beat the Clock**: Answer each question before the timer runs out!

# User Experince (UX)

## Target Audience

This game targets Marvel fans who enjoy trivia and seek a fun, interactive way to test their expertise. It's perfect for both casual players who want a quick challenge and die-hard fans who aim to prove their expertise.

### User Stories

1. **As a Marvel fan**, I want to challenge my knowledge of the Marvel universe in a fun and engaging way.
2. **As a casual player**, I want to play a quick game during my break.
3. **As a competitive player**, I want to achieve the highest score possible and beat my previous attempts.
4. **As a trivia enthusiast**, I want to enjoy a well-structured game with a variety of challenging questions.

### Site Aims

- **Entertainment**: Provide a fun and engaging game that Marvel fans and trivia lovers will enjoy.
- **Challenge**: Offer a progressively challenging experience to keep players engaged.
- **Accessibility**: Ensure the game is easy to play on both desktop and mobile devices.
- **Immersion**: Capture the Marvel universe feel through themed questions, sounds, and visuals.

# Design

## Color Scheme

Marvel Millionaire follows a dark, cinematic theme, reflecting the Marvel universe's dramatic and bold atmosphere. The background uses deep blacks and blues, while text is styled in white with a shadow effect for clear visibility. The buttons feature distinct colors representing the Marvel heroes' traits—red for danger, green for growth, gold for achievement, and blue for stability. This contrast creates a strong, immersive user experience.

![Color Schme](/readme-img/color_scheme.png)

## Typography

The game uses a clean sans-serif font to ensure readability on all devices. Headings are bold and prominent, drawing attention to important game elements, while body text is clear and easy to read, enhancing the overall user experience.

## Wireframes

The design and structure for this website was created with balsamiq. The designs produced were low fidelity wireframes for desktop, tablet and mobile version. The final designs and structure differ from the wireframes due to developments during the construction of the website.

<details> <summary>Low Fidelity Wireframes</summary>

![Screenshot Wireframe Homepage Desktop](/readme-img/wireframe_home_desktop.png)
![Screenshot Mobile Homepage Mobile](/readme-img/wireframe_home_mobile.png)
![Screenshot Wireframe Gamepage Desktop](/readme-img/wireframe_game_desktop.png)
![Screenshot Wireframe Gamepage Mobile](/readme-img/wireframe_game_mobile.png)

</details>

## Site Structure

The Marvel Millionaire website consists of two main pages: the Landing Page or [Home Page](index.html) and the [Game Page](game.html). The Landing Page introduces users to the game, with links to either start playing or view the rules. The Game Page hosts the actual quiz, where users answer questions and use jokers to progress. Both pages have a simple, intuitive design. A navigation link in the header allows users to return to the Home Page. For smaller screens, a responsive design ensures optimal usability.

# Features

## Gameplay

Marvel Millionaire offers an exciting quiz experience, challenging players with superhero-themed questions and strategic lifelines. Use jokers like Thanos' 50:50, Rocket's hint, Thor's timer pause, or Hulk's smash to navigate through tricky questions. Players earn increasing rewards in the style of the classic "Millionaire" game, tracking their progress with a dynamic score system. To heighten the thrill, each question is against the clock, ensuring a fast-paced and engaging experience.

- **Game Mode**: The game features two modes:
  - **Normal Mode**: In Normal Mode, players have 120 seconds to answer each question,
  - **Hard Mode**: In Hard Mode, the time is reduced to 60 seconds to increase difficulty. Additionally, the questions in Hard Mode are more challenging, making it ideal for seasoned players looking for a tougher test of their knowledge.
- **Question Rounds**: The game consists of 14 question rounds, each progressively more challenging.
- **Jokers** - Use lifelines like to assist with challenging questions:
  - **Thanos'** 50:50 (erases two incorrect answers)
  - **Rocket's** hint (gives a hint to the user)
  - **Thor's** timer pause (pause the timer for the current question round)
  - **Hulk's** smash (deletes one random incorrect answer)
- **Score System**: Track your progress with a score system that mirrors the classic "Millionaire" format, moving from low to high stakes.
- **Timed Challenge**: Answer each question before the countdown ends, adding a layer of urgency and excitement.

<details> <summary>See Gameplay Screenshots</summary>

![Screenshot Gameplay Desktop](/readme-img/gameplay_desktop.png)
![Screenshot Gameplay Mobile](/readme-img/gameplay_mobile.png)

</details>

## Navigation

The Landing Page offers intuitive navigation with a prominent header linking back to the home page, allowing users to easily return. It features two main navigation options: Play and Rules, each displayed in interactive flip-boxes. The front side shows an image, while the back provides a detailed description of the feature. Players can either start the game or review the rules, ensuring they are familiar with the gameplay mechanics before beginning their journey in Marvel Millionaire.

![Screenshot Navigation Bar](/readme-img/Navigation_bar.png)

<details> <summary>See more Screenshots</summary>

![Screenshot Navigation Desktop](/readme-img/navigation_desktop.png)
![Screenshot Navigation Mobile](/readme-img/navigation_mobile.png)

</details>

## Home Page

The Home Page acts as the central hub of Marvel Millionaire and greets players with a large header, "Welcome to Marvel Millionaire." Below, players receive an introduction to the game's concept and rules. From this point, they can start the game by clicking the "Let's Play" button, choosing between Normal or Hard mode. Each mode offers different difficulty questions to cater to varying player experiences.

![Screenshot Homepage](/readme-img/homepage.png)

## Game Page

The Game Page serves as the core gameplay area where users answer Marvel-related questions in a multiple-choice format. Players can track their score, utilize one of four jokers (50:50, Hint, Freeze Timer, or Smash), and view the countdown timer for each question. After submitting an answer, feedback is provided via popups for correct, incorrect, or missed answers. Players can also choose to exit or take the current winnings. Background music enhances the immersive experience.

![Screenshot Gamepage Mobile](/readme-img/gamepage.png)

## Future Features

- **Additional Question Packs**: Introduce new questions related to other Marvel movies, series, and comics.
- **Multiplayer Mode**: Allow users to challenge friends in real-time.
- **Global Leaderboard**: Track top scores and see where you stand against other players worldwide.
- **Achievement System**:
  - Unlock achievments based on perfomance, like answering all questions without using jokers.
  - Reaching certain question rounds secures guaranteed prize payouts.
- **Joker Effects**: Smashing sound for Hulk or thunder for Thor.

# Technologies Used

## Languages Used

- HTML5
- CSS3
- JavaScript

## Frameworks, Libraries & Programs Used

- For debugging and perfomance optimization [Chrome DevTools](https://developer.chrome.com/docs/devtools)
- Interface for transfer and pushing the code to GitHub using [GitHub Desktop](https://desktop.github.com/download/)
- Local coding environment and developing with [VS Code](https://code.visualstudio.com/)
- Drafts were drawn with help of [balsamiq](https://balsamiq.com)
- Created a repository and deployed the live project with [GitHub](https://github.com/)
- Inspiration and help to create readable text with [ChatGPT](https://chatgpt.com/)

# Deployment

## Project Depoloyment via GitHub

Marvel Millionaire is stored on GitHub. The site was created using VS Code and GitHub Desktop, the live site is hosted on GitHub Pages. This is a guide to deploying a site on GitHub Pages using GitHub.

1. Sign in to GitHub and find the repository in the repositories menu.
2. Click to open the repository and click on the settings icon to open the settings menu for the repository.
3. In the settings menu, click on the pages tab on the left side of the screen.
4. Under source, select branch: main, leave the folder on the root, and click save.
5. The page will then automatically refresh and provide a link to the published site when it has finished processing.

The live link for Marvel Millionaire can be found here - [Link to deployed live site](https://chriscross1983.github.io/Marvel-Millionaire/)

## How to fork a repository via GitHub

A copy of a local GitHub repository can be made by forking the GitHub repository. The purpose of this is to allow changes to be made to the copy without affecting the original repository. This is a guide to forking a repository on GitHub.

1. Sign in to GitHub, locate the repository, and click to open the repository.
2. On the right-hand side of the repository menu there is a button called fork. Click the button to make a copy of the repository into your GitHub account.

## How to create a local clone of a project

This is a guide on how to clone a repository from GitHub.

1. Sign in to GitHub, locate the repository, and click to open the repository.
2. On the repository main page, click the code button above where the files are located. This will open a drop-down menu.
3. In the dropdown menu stay on the HTTPS option and click the copy icon button next to the URL to copy it.
4. Now minimize/close your browser and open your local IDE, e.g. Visual Studio Code or Brackets.
5. Open Git Bash and change the current working directory to the file location you want the cloned directory to be made.
6. Type git clone into the command line and then paste the URL copied from GitHub.
7. Press enter and the local repository clone will be created.

# Testing

## Mobile Optimization

Marvel Millionaire follows a mobile-first approach, ensuring that all features are fully responsive across devices. The layout, images, and gameplay mechanics have been optimized for mobile users, ensuring an engaging experience on smaller screens without compromising usability. The interface adapts fluidly to various screen sizes, and elements like buttons, text, and navigation remain accessible and functional on smartphones and tablets. Tested extensively using Chrome DevTools and multiple mobile devices, ensuring seamless interaction and optimal performance on mobile platforms.

## Code Validation

Marvel Millionaire has been validated via W3C HTML Validator, W3C CSS Validator and the JavaSript Code by JSHint. There were several small errors coming up on different places, which were immediately fixed and reported in the bugs section.

W3C Code Validation - index.html:

![Image W3 Code Validation](/readme-img/w3c_index-html.png)

W3C Code Validation - game.html:

![Image W3 Code Validation](/readme-img/w3c_game-html.png)

W3C Code Validation - CSS:

![Image of W3 CSS Code Validation](/readme-img/w3c_css.png)

JSHint Code Validation - JavaScript js files:

![Image of JSHint Code Validation](/readme-img/jshint_validation.png)

## Accessibility & Responsiveness

Accessibility was tested by experte.com [Accessibility Audit](https://experte.com/) and manual with WebAIM: Contrast Checker [WebAIM](https://webaim.org/resources/contrastchecker/).

![Image of Accessibility Audit](/readme-img/Accessibility.png)

Responsiveness was tested by a few different mediums manually (Apple iphone XS, iphone 14pro and iPad Pro), including Chrome Devtools and the [Responsivetesttool](https://responsivetesttool.com/).

<details> <summary>See Responsiveness Screenshots</summary>

Mobile:

![Index Responsive on mobile](/readme-img/mobile_index.png)
![GameResponsive on mobile](/readme-img/mobile_game.png)

Tablet:

![Index Responsive on tablet](/readme-img/tablet_index.png)
![Game Responsive on tablet](/readme-img/tablet_game.png)

Laptop:

![Index Responsive on Laptop](/readme-img/laptop_index.png)
![Game Responsive on Laptop](/readme-img/laptop_game.png)

</details>

## Lighthouse Testing

The website was also put through Lighthouse testing via Chrome Devtools which tests a site under 4 different headings: Performance, Accessibility, Best Practices and SEO and it tests it under mobile and desktop criteria.

Index Page (Mobile/Desktop):

![Lighthouse Audit Index Page Mobile](/readme-img/index_mobile_lighthouse.png)
![Lighthouse Audit Index Page Desktop](/readme-img/index_desktop_lighthouse.png)

Game Page (Mobile/Desktop):

![Lighthouse Audit Game Page Mobile](/readme-img/game_mobile_lighthouse.png)
![Lighthouse Audit Game Page Desktop](/readme-img/game_desktop_lighthouse.png)

## Manuel Testing

## Navigation Menu

- Verified that the logo links back to the Home Page when clicked.
- Confirmed consistent hover effects across all buttons.
- Verified that the navigation is fully responsive.

## Home Page

- Confirmed that the hero image is optimized and fully responsive.
- Verified the flip effect on the "Play" and "Rules" sections works smoothly.
- Verified all images have appropriate alt text and are optimized.
- Ensured that all elements on the Home Page are fully responsive.
- Verified that the link to start the game works properly and redirects to the gamepage.

## Game Page

**Gameplay Testing**:
 - Verified the initial Ready-Question is loading before game start.
 - Verified the proper loading of questions.
 - Ensured the 50:50 Joker removes two incorrect answers.
 - Confirmed Rocket's hint message appers, Thor's freeze stops the timer, and Hulk's smash functionality delets one incorrect answer.
 - Confirmed the timer functions as expected with a reset for each question.
 - Verified correct answer submission and score updating.
 - Verified the correct functionality of the "Take Money" and "Exit" buttons.
 - Ensured the full countdown, win/lose popups, and score tracking are working.
 - Confirmed correct functionality of question selection and joker options.
 - Ensured countdown timer functions properly after using several interupting buttons.
 - Verified that all game elements are optimized and responsive.

## Browser Testing

- Manually tested Marvel Millionaire on Google Chrome, Microsoft Edge, and Mozilla Firefox on both desktop and mobile.
- Verified that all images load correctly and consistently across browsers.
- Confirmed full responsiveness across all browsers and screen sizes.
- Verified the game play work and the functionality is fluent.

# Bugs

## Solved Bugs:

### Structural Issues:
- Unnecessary `<div>` section inside an `<h>` element.
- Formatting issues due to an unnecessary backslash (`/ >`) added by the Prettier extension.

### Timer-Related Bugs:
- Timer counts into negative values.
- Timer fails to start when a new question appears.
- Timer resets incorrectly after clicking the "Exit" or "Take Money" button.
- Timer display does not update after using Thor's freeze joker.

### Joker-Related Bugs:
- Thanos 50:50 joker disables already removed answers from Hulk's smash.
- Thanos joker can be used multiple times in a single round.
- Hulk's smash removes an already disabled answer.
- Jokers reappear in the next round despite being used.
- Not all jokers can be used in a single round.
- After submitting an answer, it's still possible to use a joker.
- Hidden answers from used jokers remain hidden in the next round.

### Game Logic Bugs:
- Incorrect answers still appear after restarting the game.
- Selected answer effects carry over to the next round.
- Game crashes after the 5th question due to incorrect `currentQuestionIndex` handling.
- Actual score shows the reward for the next question, not the current one.
- After submitting an answer, it remains possible to select another.

# Credits

## Content and Code

- How to rotate an img - https://www.w3schools.com/howto/howto_css_flip_image.asp
- How to load another page with JS - https://www.w3schools.com/jsref/event_onload.asp
- How to use session storage - https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage
- How to set and delete timer - https://www.w3schools.com/jsref/met_win_setinterval.asp
- How to create an pulsating button - https://stackoverflow.com/questions/22163163/how-to-do-a-dynamic-pulsating-button-in-javascript & https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes
- How to check if action is completed - https://stackoverflow.com/questions/36506931/javascript-how-to-check-if-operation-has-been-completed-on-this-event
- How to create random values - https://www.w3schools.com/js/js_random.asp
- How to use trim method - https://www.w3schools.com/jsref/jsref_trim_string.asp
- How to create shake effect - https://www.w3schools.com/howto/howto_css_shake_image.asp
- How to add background music - https://stackoverflow.com/questions/6529645/how-to-add-background-music-to-a-web-page
- How to add canvas effects - https://www.w3schools.com/html/html5_canvas.asp

## Media

- Hero Background - [Link to website](https://wallpapers.com)
- Favicon Title - [Link to website](https://realfavicongenerator.net)
- Font Awesome for different icons [Font Awesome](https://fontawesome.com/icons)
- Joker Images - [Link to website](https://freepik.com), (https://wallpapers.com), (https://wallpapercave.com)
- Background Music - [Link to website](https://pixabay.com/sound-effects/search/music/)
- Sound Effects - [Link to website](https://freesound.org/)

## Acknowledgements

Big thanks to my mentor, the slack community, Code Insititue Tutors and my Cohort Faciliator Kay and classmate Dominik for supporting me through this project.
