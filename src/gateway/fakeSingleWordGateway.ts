import { WordGateway } from "./wordGateway";

export class FakeSingleWordGateway implements WordGateway {
    readonly wordsToPickFrom = ['table'];

    pickARandomWord(): string {
        return this.wordsToPickFrom[this.generateRandomIndex(this.wordsToPickFrom.length)];
    }

    generateRandomIndex(totalAmountOfWords: number) : number {
        return Math.floor((Math.random() * totalAmountOfWords))
    }
}