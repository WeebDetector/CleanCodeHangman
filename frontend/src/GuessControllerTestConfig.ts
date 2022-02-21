import { ViewGameInProgress } from "./controllers/models/ViewGameInProgress";
import { BoundaryGameInProgress } from "./use-cases/model/BoundaryGameInProgress";

export const expectedUCValue = new BoundaryGameInProgress(
  true,
  "in-progress",
  "______"
);
export const expectedControllerValue = new ViewGameInProgress(
  true,
  "in-progress",
  "______"
);
