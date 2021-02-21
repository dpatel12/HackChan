const db = require('../db');
// callbacks :)


module.exports = {
  insertThread: (threadParent, threadChild) => {
    /*
    let threadParent = {
      title: req.body.title,
      firstCreatedAt: createdAt,
      lastCreatedAt: createdAt
    };

    let threadChild = {
      body: req.body.text,
      timestamp: createdAt,
      parentThreadTime: createdAt
    };
    */

    let queryString = "";
    db.query(queryString, (err, res) => {
      if (err) {
        throw "Could not create new thread";
      }
    });

  },

  updateThread: (threadComment) => {
    /*
    let threadComment = {
      body: req.body.text,
      timestamp: createdAt,
      parentThreadTime: req.body.parentTime
    }
    */
    let queryString = "";
    db.query(queryString, (err, res) => {
      if (err) {
        throw "Could not reply to existing thread";
      }
    });
  },

  getThreadsByLatest: (params) => {

    let maxCount = params.maxCount;
    let queryString = "";
    db.query(queryString, (err, res) => {
      if (err) {
        throw "Could not retrieve threads.";
      }
      let threads = [];
      //run map function on res.rows
      return threads;
    });
  }
}
