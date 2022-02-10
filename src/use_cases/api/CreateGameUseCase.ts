import { BoundaryGameDataStruct } from "./entity/BoundaryGameDataStruct";

export interface CreateGameUseCase {
    execute() : BoundaryGameDataStruct;
}