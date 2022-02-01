export class WordSelector {
    wordsToPickFrom = ['table', 'hello', 'sunshine', 'knowledge', 'interface'];

    pickAWord() : string {
        return this.wordsToPickFrom[this.generateARandomIndex()];
    }

    generateARandomIndex() : number {
        return Math.floor((Math.random() * this.wordsToPickFrom.length))
    }
}