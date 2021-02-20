module.exports = {
  postMessage: (req, res) => {
    console.log(req.body.message);
    //insert into DB
    if (true) {
      return res.status(200).send(`Let's echo your message back: ${req.body.message}`);
    }
  },

  getMessages: (req, res) => {
    //get messages from DB
    if (true) {
      return res.status(200).send("List messages (root level OP) here");
    }
  }
}
