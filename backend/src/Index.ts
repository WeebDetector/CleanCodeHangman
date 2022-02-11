import { App } from './App';
import { InMemoryGameGateway } from "./gateway/implementation/InMemoryGameGateway";
import { InMemoryPlayerGateway } from "./gateway/implementation/InMemoryPlayerGateway";
import { InMemoryWordGateway } from "./gateway/implementation/InMemoryWordGateway";
import { RandomIntGenerator } from "./gateway/implementation/RandomIntGenerator";

const generator = new RandomIntGenerator();
const wordGateway = new InMemoryWordGateway(generator);
const playerGateway = new InMemoryPlayerGateway();
const gameGateway = new InMemoryGameGateway();

const app = new App(wordGateway, playerGateway, gameGateway);
app.listen();