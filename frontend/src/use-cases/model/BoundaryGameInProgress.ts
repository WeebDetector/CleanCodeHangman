export class BoundaryGameInProgress {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly wordState: string;

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    wordState: string
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.wordState = wordState;
  }
}
