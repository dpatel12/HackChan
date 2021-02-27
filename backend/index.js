const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageController = require('./controllers/message');
const dotenv = require('dotenv').config();
const path = require('path');

let NODE_PORT = process.env.PORT || 5000;
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'builtfrontend')));
app.set('trust proxy', true);

/*
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
})
*/

app.post("/threads", messageController.postThread);
app.get("/threads", messageController.getThreads);
app.get("/threads/thread_id", messageController.getEntries);
app.put("/threads", messageController.updateThread);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'builtfrontend', 'index.html'))
});


app.listen(NODE_PORT, () => { console.log(`Listening on ${NODE_PORT}`)});
