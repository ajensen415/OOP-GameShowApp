/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

//event listener that allows a new game to start once the button is clicked. 
let game;
document.getElementById("btn__reset").addEventListener("click", e => {
    game = new Game();
    game.startGame();
});

//event listener that listens for key clicks & then runs the handleInteraction method. 
document.querySelector("#qwerty").addEventListener("click", e => {
    if (e.target.className === 'key') {
        game.handleInteraction(e.target);
    }
});