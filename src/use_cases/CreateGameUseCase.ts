import { BoundaryGameDataStruct } from "./BoundaryGameDataStruct";

export interface CreateGameUseCase {
    execute() : BoundaryGameDataStruct;
}