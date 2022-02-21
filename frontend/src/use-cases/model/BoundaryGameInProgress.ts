export class BoundaryGameInProgress {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly chosenWord: string;

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    chosenWord: string
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.chosenWord = chosenWord;
  }
}
