export class BoundaryGuessResponse {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly wordState: string;
  readonly lettersGuessed: string[];
  readonly missedGuesses: number;

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    wordState: string,
    lettersGuessed: string[],
    missedGuesses: number
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.wordState = wordState;
    this.lettersGuessed = lettersGuessed;
    this.missedGuesses = missedGuesses;
  }
}
