import { App } from '../../src/App';
import { InMemoryGameGateway } from '../../src/gateway/InMemoryGameGateway';
import { InMemoryPlayerGateway } from '../../src/gateway/InMemoryPlayerGateway';
import { FakeWordGateway } from '../../src/gateway/FakeWordGateway';

const wordGateway = new FakeWordGateway();
const playerGateway = new InMemoryPlayerGateway();
const gameGateway = new InMemoryGameGateway();

const app = new App(wordGateway, playerGateway, gameGateway);

export default app;