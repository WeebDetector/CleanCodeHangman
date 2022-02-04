import { RandomGenerator } from "./RandomGenerator";
import { WordGateway } from "./WordGateway";

export class InMemoryWordGateway implements WordGateway {
    private readonly wordsToPickFrom = ['table', 'hello', 'sunshine', 'knowledge', 'interface'];
    private readonly numberGenerator : RandomGenerator

    constructor(rnd : RandomGenerator) {
        this.numberGenerator = rnd;
    }

    pickRandomWord(): string {
        return this.wordsToPickFrom[this.generateRandomIndex(this.wordsToPickFrom.length)];
    }

    private generateRandomIndex(totalAmountOfWords: number) : number {
        return Math.floor((this.numberGenerator.generateNumber(totalAmountOfWords)));
    }
}