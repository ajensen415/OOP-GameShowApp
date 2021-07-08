/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */


//Declaration of Phrase class. Constructor converts phrase to all lower case letters. 
class Phrase {
    constructor(phraseText) {
        //console.log(phraseText);
        this.phrase = phraseText.toLowerCase();
    }

    //Method which adds the random phrase to the page & applies class names to spaces/letters.
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

    //Method which checks if the phrase includes a speciifc letter that was clicked. 
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

    //Method which displays a correctly guessed letter in the phrase. 
    showMatchedLetter(letter) {
        const clickedLetters = document.getElementsByClassName(letter);
        for (let i = 0; i < clickedLetters.length; i++) {
            clickedLetters[i].classList.replace('hide', 'show');
        }    
    }
}
