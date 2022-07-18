const express = require("express");
const port = process.env.PORT || 4000;
const routes = require("./Routes")

const app = express();

app.use('/', routes);

app.listen(port, ()=> console.log("servidor rodando na porta : ",port));