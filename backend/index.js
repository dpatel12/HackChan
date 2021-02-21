const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const messageController = require('./controllers/message')

let NODE_PORT = 5000;
let app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post("/threads", messageController.postThread);
app.get("/threads", messageController.getThreads);
app.put("/threads", messageController.updateThread);


app.get("/*", (req, res) => {
  res.send("Default response, hello world!");
});


app.listen(NODE_PORT, () => { console.log(`Listening on ${NODE_PORT}`)});
