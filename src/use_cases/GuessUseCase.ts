export interface GuessUseCase {
    isLetterInWord(playerId: number, guessedLetter : string) : boolean;
}