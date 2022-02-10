import { WordGateway } from "./WordGateway";

export class FakeWordGateway implements WordGateway {
    pickRandomWord(): string {
        return "table"
    }
}