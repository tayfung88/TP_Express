const express = require("express");
const logger = require("./logger");
const movierouter = require("./routes/movies.js");

const app = express();

app.use(logger);

/*** ROUTERS ***/
app.use(movierouter);

app.get("/", (req, res, next) => {
    res.send("Salut!");
});

app.listen(3000);