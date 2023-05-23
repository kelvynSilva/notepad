require('dotenv').config()
const express = require("express");
const cors = require('cors');
const app = express();
const routes = require('./routes');

app.use(express.json());
require('./config/dbConfig');

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3001, _ => console.log('logado'));
