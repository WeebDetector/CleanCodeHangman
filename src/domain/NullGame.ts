import { GameFramework } from "./GameFramework";

export class NullGame extends GameFramework {

    getMissedGuesses() : number {
        return -1;
    }

    getCorrectGuesses() : number {
        return -1;
    }

    getLettersGuessed() : string[] {
        return new Array();
    }

    getCurrentWordState() : string[] {
        return new Array();
    }

    getPlayerId() : number {
        return -1
    }

    getWordBeingGuessed() : string {
        return "";
    }

    isNull() : boolean {
        return true;
    }
}