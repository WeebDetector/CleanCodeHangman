import { WordGateway } from "../api/WordGateway";

export class FakeWordGateway implements WordGateway {
    pickRandomWord(): string {
        return "table"
    }
}