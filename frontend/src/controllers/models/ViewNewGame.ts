export class ViewNewGame {
  readonly playerId: number;
  readonly chosenWord: string;

  constructor(playerId: number, chosenWord: string) {
    this.playerId = playerId;
    this.chosenWord = chosenWord;
  }
}
