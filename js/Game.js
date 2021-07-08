/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game { 
    constructor() {
        this.missed = 0; 
        this.phrases = [
            {phrase: "you can do this"}, 
            {phrase: "no pressure no diamonds"}, 
            {phrase: "he who is brave is free"}, 
            {phrase: "see the good"}, 
            {phrase: "if not now when"}
            ];
        this.activePhrase = 'null';
    }
    startGame() { 
        let overlay = document.getElementById("overlay");
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        let phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        const randomPhrase = Math.floor( Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }
    handleInteraction() {

    }
    removeLife() {

    }
    checkForWin() {

    }
    gameOver() {

    }
}

