import { App } from './App';
import { InMemoryGameGateway } from "./gateway/InMemoryGameGateway";
import { InMemoryPlayerGateway } from "./gateway/InMemoryPlayerGateway";
import { InMemoryWordGateway } from "./gateway/InMemoryWordGateway";
import { RandomIntGenerator } from "./gateway/RandomIntGenerator";

const generator = new RandomIntGenerator();
const wordGateway = new InMemoryWordGateway(generator);
const playerGateway = new InMemoryPlayerGateway();
const gameGateway = new InMemoryGameGateway();

const app = new App(wordGateway, playerGateway, gameGateway);
app.listen();