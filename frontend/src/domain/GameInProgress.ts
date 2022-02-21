export class GameInProgress {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly chosenWord: [number, string][];

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    chosenWord: [number, string][]
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.chosenWord = chosenWord;
  }
}
