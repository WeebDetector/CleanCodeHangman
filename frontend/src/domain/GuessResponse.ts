export class GuessResponse {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly wordState: [number, string][];
  readonly lettersGuessed: string[];
  readonly missedGuesses: number;

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    wordState: [number, string][],
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
