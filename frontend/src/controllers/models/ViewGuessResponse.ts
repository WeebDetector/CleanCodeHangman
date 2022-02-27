export class ViewGuessResponse {
  readonly isGuessCorrect: boolean;
  readonly stateDescription: string;
  readonly chosenWord: string;
  readonly lettersGuessed: string[];

  constructor(
    isGuessCorrect: boolean,
    stateDescription: string,
    chosenWord: string,
    lettersGuessed: string[]
  ) {
    this.isGuessCorrect = isGuessCorrect;
    this.stateDescription = stateDescription;
    this.chosenWord = chosenWord;
    this.lettersGuessed = lettersGuessed;
  }
}
