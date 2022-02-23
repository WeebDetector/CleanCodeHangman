/* eslint-disable no-restricted-imports */
import { GuessController } from "../../../controllers/GuessController";
import { ViewGuessResponse } from "../../../controllers/models/ViewGuessResponse";

export default function useLetterKeyboard(
  guessController: GuessController,
  setGame: (game: ViewGuessResponse) => void
): (playerId: number, letterGuessed: string) => void {
  const guess = (playerId: number, letterGuessed: string) => {
    guessController.guess(playerId, letterGuessed).subscribe(setGame);
  };

  return guess;
}
