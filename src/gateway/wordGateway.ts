export interface WordGateway {
    pickARandomWord() : string;
    generateRandomIndex(totalAmountOfWords: number) : number;
}