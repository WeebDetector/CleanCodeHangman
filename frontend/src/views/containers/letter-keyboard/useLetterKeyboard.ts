/* eslint-disable no-restricted-imports */
import { GuessController } from "../../../controllers/GuessController";
import { ViewGuessResponse } from "../../../controllers/models/ViewGuessResponse";
import { useObserver } from "../observer/useObserver";

export default function useLetterKeyboard(
  guessController: GuessController,
  setGame: (game: ViewGuessResponse) => void
): (playerId: number, letterGuessed: string) => void {
  const observer = useObserver(setGame);
  const guess = (playerId: number, letterGuessed: string) => {
    guessController.guess(playerId, letterGuessed).subscribe(observer);
  };

  return guess;
}
