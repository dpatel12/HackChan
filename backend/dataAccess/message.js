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


    let queryString = `INSERT INTO comment_thread VALUES (${threadParent.firstCreatedAt}, ${threadParent.lastCreatedAt}, '${threadParent.title}', 1); INSERT INTO comment_entry VALUES (${threadChild.timestamp}, '${threadChild.body}', ${threadChild.parentThreadTime});`;
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
    let queryString = `INSERT INTO comment_entry VALUES (${threadComment.timestamp}, '${threadComment.body}', ${threadComment.parentThreadTime}); UPDATE comment_thread SET number_of_comments = number_of_comments + 1 WHERE init_com_time = ${threadComment.parentThreadTime});`;
    db.query(queryString, (err, res) => {
      if (err) {
        throw "Could not reply to existing thread";
      }
    });
  },

  getThreadsByLatest: (params) => {

    let maxCount = params.maxCount;
    let queryString = `SELECT * FROM comment_thread ORDER BY parent_init_time DESC LIMIT ${maxCount};`;
    db.query(queryString, (err, res) => {
      if (err) {
        throw "Could not retrieve threads.";
      }
      let threads = [];
      threads.append(res);
      //run map function on res.rows
      return threads;
    });
  },

  getEntriesByLatest: (params, parent_time) => {

    let maxCount = params.maxCount;
    let queryString = `SELECT * FROM comment_thread WHERE parent_init_time = ${parent_time} ORDER BY comment_time DESC LIMIT ${maxCount};`;
    db.query(queryString, (err, res) => {
      if (err) {
        throw "Could not retrieve entries.";
      }
      let threads = [];
      threads.append(res);
      //run map function on res.rows
      return threads;
    });
  }

}
