/* Show and Hide Game Modus */

function showModusBox() {
    const modus = document.getElementById('game-select');
    modus.classList.remove('hidden');
}

function closeModusBox() {
    const modus = document.getElementById('game-select');
    modus.classList.add('hidden')
}

/* Start Game */

function startGame(mode) {
    if (mode === 'normal') {
        alert('Starting Normal Version with 4 Jokers!');
    } else if (mode === 'hard') {
        alert('Starting Hard Version with 3 Jokers!')
    }
    closeModusBox();
}

/* Event listener for starting the game & close the box */

document.getElementById('play-button').addEventListener('click', showModusBox);

document.getElementById('normal-mode').addEventListener('click', function() {
    startGame('normal');
});

document.getElementById('hard-mode').addEventListener('click', function() {
    startGame('hard');
});



