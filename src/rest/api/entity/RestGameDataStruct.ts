export class RestGameDataStruct {
    private playerId : number
    private chosenWord : string

    constructor(playerId : number, chosenWord : string) {
        this.playerId = playerId;
        this.chosenWord = chosenWord;
    }
}