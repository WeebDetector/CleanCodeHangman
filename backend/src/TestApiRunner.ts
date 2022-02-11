import { App } from './App';
import { InMemoryGameGateway } from './gateway/implementation/InMemoryGameGateway';
import { InMemoryPlayerGateway } from './gateway/implementation/InMemoryPlayerGateway';
import { FakeWordGateway } from './gateway/fake/FakeWordGateway';

const wordGateway = new FakeWordGateway();
const playerGateway = new InMemoryPlayerGateway();
const gameGateway = new InMemoryGameGateway();

const app = new App(wordGateway, playerGateway, gameGateway);

export default app;