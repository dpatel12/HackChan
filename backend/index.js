const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageController = require('./controllers/message');
const dotenv = require('dotenv').config();

let NODE_PORT = 5000;
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set('trust proxy', true);

app.post("/threads", messageController.postThread);
app.get("/threads", messageController.getThreads);
app.get("/threads/thread_id", messageController.getEntries);
app.put("/threads", messageController.updateThread);



app.get("/*", (req, res) => {
  req.headers['x-forwarded-for'];
  res.send("IP FOUND: " + req.socket.remoteAddress);

});


app.listen(NODE_PORT, () => { console.log(`Listening on ${NODE_PORT}`)});
