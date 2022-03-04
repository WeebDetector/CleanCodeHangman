export class ViewGuessResponse {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly chosenWord: string;
  readonly lettersGuessed: string[];
  readonly missedGuesses: number;

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    chosenWord: string,
    lettersGuessed: string[],
    missedGuesses: number
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.chosenWord = chosenWord;
    this.lettersGuessed = lettersGuessed;
    this.missedGuesses = missedGuesses;
  }
}
