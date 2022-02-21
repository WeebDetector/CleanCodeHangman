/* eslint-disable no-restricted-imports */
import { GuessController } from "../../../controllers/GuessController";
import { ViewGameInProgress } from "../../../controllers/models/ViewGameInProgress";

export default function useLetterKeyboard(
  guessController: GuessController,
  setGame: (game: ViewGameInProgress) => void
): (playerId: number, letterGuessed: string) => void {
  const guess = (playerId: number, letterGuessed: string) => {
    guessController.guess(playerId, letterGuessed).subscribe(setGame);
  };

  return guess;
}
