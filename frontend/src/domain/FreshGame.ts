export class FreshGame {
  readonly playerId: number;
  readonly chosenWord: [number, string][];

  constructor(playerId: number, chosenWord: [number, string][]) {
    this.playerId = playerId;
    this.chosenWord = chosenWord;
  }
}
