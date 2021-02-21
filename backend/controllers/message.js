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

    let params = {
      maxCount: 50
    }
    db.getThreadsByLatest(params)
      .then(listOfMessages => {
        console.log(listOfMessages + "HEllo");
        return res.status(200).json(listOfMessages);
      })
      .catch(err => {
        console.error(err);
      })
  },


  getEntries: async (req, res) => {
    let params = {
      maxCount: 50
    }

    db.getThreadsByLatest(params, req.body.parentTime)
      .then(listOfMessages => {
        console.log(listOfMessages);
        return res.status(200).json(listOfMessages);
      })
      .catch(err => {
        console.error(err);
      })

  }
}
