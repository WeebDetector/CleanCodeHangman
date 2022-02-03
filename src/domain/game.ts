export class Game {
    private readonly missedGuesses: number;
    private readonly correctGuesses: number;
    private readonly lettersGuessed: string[];
    private readonly currentWordState: string[];
    private readonly playerId: number;
    private readonly wordBeingGuessed: string;

    constructor(playerId : number, chosenWordForTheGame : string) {
        this.missedGuesses = 0;
        this.correctGuesses = 0;
        this.lettersGuessed = new Array();
        this.currentWordState = this.initiateCurrentWordStateArray(chosenWordForTheGame);
        this.playerId = playerId;
        this.wordBeingGuessed = chosenWordForTheGame;
    }
    
    private initiateCurrentWordStateArray(chosenWordForTheGame : string) {
        var tempArray = new Array();

        for (let i = 0; i < chosenWordForTheGame.length; i++)
        {
            tempArray.push('_');
        }

        return tempArray
    }

    getMissedGuesses() {
        return this.missedGuesses;
    }

    getCorrectGuesses() {
        return this.correctGuesses;
    }

    getLettersGuessed() {
        return this.lettersGuessed;
    }

    getCurrentWordState() {
        return this.currentWordState;
    }

    getPlayerId() {
        return this.playerId;
    }

    getWordBeingGuessed() {
        return this.wordBeingGuessed;
    }
}