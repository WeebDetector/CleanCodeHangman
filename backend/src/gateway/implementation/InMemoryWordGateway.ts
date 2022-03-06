import { RandomIntGenerator } from "./RandomIntGenerator";
import { WordGateway } from "../api/WordGateway";

export class InMemoryWordGateway implements WordGateway {
    private readonly wordsToPickFrom = ['table', 'hello', 'sunshine', 'knowledge', 'interface', 'skeleton', 'wok',
                                        'bubbles', 'children', 'ears', 'fruits', 'apple', 'orange'];
    private readonly numberGenerator : RandomIntGenerator

    constructor(rnd : RandomIntGenerator) {
        this.numberGenerator = rnd;
    }

    pickRandomWord(): string {
        return this.wordsToPickFrom[this.generateRandomIndex(this.wordsToPickFrom.length)];
    }

    private generateRandomIndex(totalAmountOfWords: number) : number {
        return this.numberGenerator.generateNumber(totalAmountOfWords);
    }
}