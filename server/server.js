const express = require('express');
const app = express();

const PORT = 8080;

const api = require('./rutas/api.rutas.js');

const bodyParser = require('body-parser');
const cors = require('cors')

app.use(bodyParser.json());
app.use(cors());

app.use('', api);

const server = app.listen(PORT, () => {
    console.log('server iniciado')
});

server.on("error", err => console.log(err));
