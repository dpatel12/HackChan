const db = require('../db');
// callbacks :)

module.exports = {
  insertThread: async (threadParent, threadChild) => {
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
    await db.query(queryString, (err, res) => {
      if (err) {
        console.error(err);
        throw "Could not create new thread";
      }
    });

  },

  updateThread: async (threadComment) => {
    /*
    let threadComment = {
      body: req.body.text,
      timestamp: createdAt,
      parentThreadTime: req.body.parentTime
    }
    */
    let queryString = `INSERT INTO comment_entry VALUES (${threadComment.timestamp}, '${threadComment.body}', ${threadComment.parentThreadTime}); UPDATE comment_thread SET number_of_comments = number_of_comments + 1 WHERE init_com_time = ${threadComment.parentThreadTime});`;
    await db.query(queryString, (err, res) => {
      if (err) {
        throw "Could not reply to existing thread";
      }
    });
  },

  getThreadsByLatest: async (params) => {

    let maxCount = params.maxCount;
    let queryString = `SELECT * FROM comment_thread ORDER BY init_com_time DESC LIMIT ${maxCount};`;
    console.log(queryString);
    await db.query(queryString, (err, res) => {
      if (err) {
        console.error(err);
        throw "Could not retrieve threads.";
      }
      console.log(res.rows);
      let threads = res.rows.map(entry => entry);

      //run map function on res.rows
      return threads;
    });
  },

  getEntriesByLatest: async (params, parent_time) => {

    let maxCount = params.maxCount;
    let queryString = `SELECT * FROM comment_entry WHERE parent_init_time = ${parent_time} ORDER BY comment_time DESC LIMIT ${maxCount};`;
    await db.query(queryString, (err, res) => {
      if (err) {
        console.error(err);
        throw "Could not retrieve entries.";
      }
      let threads = res.rows;

      //run map function on res.rows
      return threads;
    });
  }

}
