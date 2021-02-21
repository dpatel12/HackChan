var { DateTime } = require('luxon');
const db = require('../dataAccess/message');

module.exports = {
  postThread: async (req, res) => {
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
      await db.insertThread(threadEntry, threadBody);
      return res.status(200).json({
        time: DateTime.now().toISO()
      });
    } catch(e) {
      console.error(e);
      return res.status(500);
    }
  },

  updateThread: async (req, res) => {
    let createdAt = DateTime.now().toSQL();
    let threadComment = {
      body: req.body.text,
      timestamp: createdAt,
      parentThreadTime: req.body.parentTime
    }
    try {
      await db.updateThread(threadComment);
      return res.status(201);
    } catch(e) {
      console.error(e);
      return res.status(500);
    }
  },

  getThreads: async (req, res) => {
    //get messages from DB
    //TODO: add support for query strings to tailor DB SELECT
    /*
    let range = req.query.hasOwnProperty("max") ?
    (req.query.max < 100 ? req.query.max : 100) :
    50;
    */
    let params = {
      maxCount: 50
    }


    /*
    [
      {
        "parent":
        {
          "title": text,
          "count": number,
          "createdAt": time
        },
        "comments":
        [
          "text": text
          "createdAt": time
        ]
      }
    ]
    Sorting order?
    Default number of threads (first 50? 100?)
    Maybe have a param to request time intervals (begin/end), num of entries
    */
    let listOfMessages = await db.getThreadsByLatest(params);
    if (true) {
      return res.status(200).json(listOfMessages);
    }
  },


  /*
  getThread: (req, res) => {
      //Execute SELECT DB query for a specific thread by timestamp
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
  */

  getEntries: async (req, res) => {
    let params = {
      maxCount: 50
    }

    let listOfMessages = await db.getEntriesByLatest(params, req.body.parentTime);
    if (true) {
      return res.status(200).json(listOfMessages);
    }
  }
}
