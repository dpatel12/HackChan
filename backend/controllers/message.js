var { DateTime } = require('luxon');
const db = require('../db/message');

module.exports = {
  postThread: (req, res) => {
    let createdAt = DateTime.now().toSQL();
    let threadEntry = {
      title: req.body.title,
      firstCreatedAt: createdAt,
      lastCreatedAt: createdAt
    };

    let threadBody = {
      body: req.body.text,
      timestamp: createdAt,
      parentThreadTime: createdAt
    };
    /*
    Message body:
    {
      title: "string",
      text: "string"
    }
    */

    //insert into DB
    try {
      db.insertThread(threadEntry, threadBody);
      return res.status(200).json(req.body);
    } catch(e) {
      console.error(e);
      return res.status(500);
    }
  },

  updateThread: (req, res) => {
    let createdAt = DateTime.now().toSQL();
    let threadBody = {
      body: req.body.text,
      timestamp: createdAt,
      parentThreadTime: req.body.parentTime
    }
    try {
      db.updateThread(threadComment);
      return res.status(201);
    } catch(e) {
      console.error(e);
      return res.status(500);
    }
  },

  getThreads: (req, res) => {
    //get messages from DB
    let range = req.query.hasOwnProperty("max") ?
    (req.query.max < 100 ? req.query.max : 100) :
    50;
    let params = {
      range: reange
    }


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
    let listOfMessages = db.getThreads();
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
