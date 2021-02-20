var { DateTime } = require('luxon')

module.exports = {
  postThread: (req, res) => {

    /*
    Message body:
    {
      message: "string",
    }


    */
    //generate timestamp
    let createdAt = DateTime.now();
    let insertObject = {
      message: req.body.message,
      timestamp: createdAt.toISO()
    }
    console.log(insertObject);
    //insert into DB
    if (true) {
      return res.status(200).json(insertObject);
    }
  },

  getThreads: (req, res) => {
    //get messages from DB

    /*
    [
      {
        "id": ID,
        "message": text,
        "created": DateTime
      }
    ]
    Sorting order?
    Default number of threads (first 50? 100?)
    Maybe have a param to request time intervals (begin/end), num of entries
    */
    let listOfMessages = [];
    if (true) {
      return res.status(200).json(listOfMessages);
    }
  },

  getThread: (req, res) => {
      //Execute SELECT DB query for a specific thread by ID
      let threadID = req.params.id;
      let thread = {
        id: threadID
      };
      if (true) {
        return res.status(200).json(thread);
      } else {
        return res.status(404);
      }
  }
}
