const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

let NODE_PORT = 5000;
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('trust proxy', true);


app.get("/*", (req, res) => {
  req.headers['x-forwarded-for'];
  res.send("IP FOUND: " + req.socket.remoteAddress);

});

app.listen(NODE_PORT, () => { console.log(`Listening on ${NODE_PORT}`)});
