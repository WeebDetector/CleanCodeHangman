import * as express from 'express';
const app = express();
const path = require('path');

app.listen(3000, () => console.log("Listening to app at 3000"));
app.use(express.static('src'));
app.use(express.json());

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname + '/game.html'));
});