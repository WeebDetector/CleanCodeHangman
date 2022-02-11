export class RandomIntGenerator {
    generateNumber(maxNumber : number) {
        return Math.floor(Math.random() * maxNumber);
    }
}