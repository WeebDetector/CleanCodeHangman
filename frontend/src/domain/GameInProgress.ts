export class GameInProgress {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly wordState: [number, string][];

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    wordState: [number, string][]
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.wordState = wordState;
  }
}
