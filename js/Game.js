/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game { 
    constructor() {
        this.missed = 0; 
        this.phrases = [
            new Phrase("you can do this"), 
            new Phrase("no pressure no diamonds"), 
            new Phrase("he who is brave is free"), 
            new Phrase("see the good"), 
            new Phrase("if not now when")
            ];
        this.activePhrase = 'null';
    }
    startGame() { 
        let overlay = document.getElementById("overlay");
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }
    getRandomPhrase() {
        const randomPhrase = Math.floor( Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }
    handleInteraction(key) {
        key.disabled = true;
        if (this.activePhrase.checkLetter(key.textContent)) {
            key.classList.add("chosen");
            this.activePhrase.showMatchedLetter(key.textContent);
                if(this.checkForWin()){
                    this.gameOver(true);
                }
            }
            else {
                key.classList.add("wrong");
                this.removeLife();
            }
        }
        
    removeLife() {
        let hearts = document.querySelectorAll('img');
        hearts[this.missed].src="images/lostHeart.png"
        this.missed++;

        if (this.missed === 5 ){
            this.gameOver(false);
        }
    }
    checkForWin() {
        let clickedLetters = document.getElementsByClassName('hide');
        if (clickedLetters.length == 0 && this.missed < 5) {
            return true;
        } else {
            return false;
        }
    }
    gameOver(gameWon) {
        let overlay = document.getElementById("overlay");
        let gameOver = document.getElementById("game-over-message");
        overlay.style.display = 'flex';
        this.resetGame();

        if (gameWon) {
            gameOver.textContent = "Congrats, you won!";
            overlay.classList = 'win';
        } else {
            gameOver.textContent = "Sorry, you lost. Try again!";
            overlay.classList = 'lose';
        }
    }
    resetGame() {
        let ul = document.getElementById("phrase").children[0];
        ul.innerHTML = '';

        let keyboard = document.getElementsByClassName("key");
        for (let i = 0; i < keyboard.length; i++) {
            keyboard[i].classList.remove('wrong');
            keyboard[i].classList.remove('chosen');
            keyboard[i].disabled = false;
        }
        
        let hearts = document.querySelectorAll('img');
        this.missed = 0;
        hearts[this.missed].src="images/liveHeart.png"
    }
}
