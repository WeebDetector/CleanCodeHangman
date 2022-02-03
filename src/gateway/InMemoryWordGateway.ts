import { WordGateway } from "./WordGateway";

export class InMemoryWordGateway implements WordGateway {
    readonly wordsToPickFrom = ['table', 'hello', 'sunshine', 'knowledge', 'interface'];

    pickRandomWord(): string {
        return this.wordsToPickFrom[this.generateRandomIndex(this.wordsToPickFrom.length)];
    }

    private generateRandomIndex(totalAmountOfWords: number) : number {
        return Math.floor((Math.random() * totalAmountOfWords))
    }
}