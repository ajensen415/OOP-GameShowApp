/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//Game class - constructor intializes # of missed keys, active phrase & the available random phrases. 
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

    //Start game method - remove start game overylay & selects/displays a random phrase (blank boxes).
    startGame() { 
        let overlay = document.getElementById("overlay");
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    //method that selects one of the random phrases in the game constructor 
    getRandomPhrase() {
        const randomPhrase = Math.floor( Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    //method that checks letter against the phrase, adjusts clicked keys, removes a life & checks for a win. 
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
       
    //method that removes one of the hearts/lives on the screen. 
    removeLife() {
        let hearts = document.querySelectorAll('img');
        hearts[this.missed].src="images/lostHeart.png"
        this.missed++;

        if (this.missed === 5 ){
            this.gameOver(false);
        }
    }

    //method that checks if the letters selected match the phrase & less than 5 incorrect guesses occurred. 
    checkForWin() {
        let clickedLetters = document.getElementsByClassName('hide');
        if (clickedLetters.length == 0 && this.missed < 5) {
            return true;
        } else {
            return false;
        }
    }

    //method that displays winning or losing text depending on user outcome. 
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

    //method that resets the phrase, keyboard & hearts/lives. 
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
        hearts[this.missed].src ="images/liveHeart.png"
    }
}
