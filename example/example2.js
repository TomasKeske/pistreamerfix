const express = require('express');
const app = express();
const port = 8070;
const server = require('http').createServer(app);
const PiStream = require('pistreamer').PiStream;
const Ws = require('ws').Server;
const ws_server = new Ws({server});
const stream = new PiStream(ws_server);

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.render("index");
});

app.post("/options", (req, res) => {
    console.log(req.body('heigth'));
})

server.listen(port, () => {
    console.clear();
    require('pistreamer').createClient('./public');
    console.log(`App running and listening to port ${port}`);
});