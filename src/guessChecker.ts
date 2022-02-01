export class GuessChecker {
    private wordBeingGuessed : string;

    constructor(wordChosenForSession: string) {
        this.wordBeingGuessed = wordChosenForSession;
    }

    isLetterInTheWord(guess: string) {
        return this.getWordBeingGuessed().includes(guess);
    }

    getWordBeingGuessed() {
        return this.wordBeingGuessed;
    }
}