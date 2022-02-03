import { WordGateway } from "./wordGateway";

export class FakeWordGateway implements WordGateway {
    readonly wordsToPickFrom = ['table', 'hello', 'sunshine', 'knowledge', 'interface'];

    pickARandomWord(): string {
        return this.wordsToPickFrom[this.generateRandomIndex(this.wordsToPickFrom.length)];
    }

    private generateRandomIndex(totalAmountOfWords: number) : number {
        return Math.floor((Math.random() * totalAmountOfWords))
    }
}