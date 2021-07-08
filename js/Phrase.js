/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phraseText) {
        //console.log(phraseText);
        this.phrase = phraseText.toLowerCase();
    }
    addPhraseToDisplay() {
        const ul = document.getElementById('phrase').children[0];
        for (let i = 0; i < this.phrase.length; i++) {
            let li = document.createElement('li');
            ul.appendChild(li);
            li.innerHTML = this.phrase[i];
            if (this.phrase[i] == " ") {
                li.className += "space";
            } else {
                li.className += `hide letter ${this.phrase[i]}`;
            }
        }

    }
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }
    showMatchedLetter(letter) {
        const clickedLetters = document.getElementsByClassName(letter);
        for (let i = 0; i < clickedLetters.length; i++) {
            clickedLetters[i].classList.replace('hide', 'show');
        }    
    }
}
