export abstract class GameFramework {
    abstract getMissedGuesses() : number;
    abstract getCorrectGuesses() : number;
    abstract getLettersGuessed() : string[];
    abstract getCurrentWordState() : string[];
    abstract getPlayerId() : number;
    abstract getWordBeingGuessed() : string;
    abstract isNull() : boolean;
}