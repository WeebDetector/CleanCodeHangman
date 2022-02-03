import { WordGateway } from "./wordGateway";

export class SingleWordGateway implements WordGateway {
    readonly wordsToPickFrom = ['table'];

    pickARandomWord(): string {
        return this.wordsToPickFrom[this.generateRandomIndex(this.wordsToPickFrom.length)];
    }

    private generateRandomIndex(totalAmountOfWords: number) : number {
        return 0;
    }
}