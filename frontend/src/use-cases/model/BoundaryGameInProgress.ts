export class BoundaryGameInProgress {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly wordState: string;
  readonly lettersGuessed: string[];

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    wordState: string,
    lettersGuessed: string[]
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.wordState = wordState;
    this.lettersGuessed = lettersGuessed;
  }
}
