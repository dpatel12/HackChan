var { DateTime } = require('luxon');
//const db = require('../dataAccess/message');
const db = require('../db');

module.exports = {
  postThread: (req, res) => {
    let createdAt = DateTime.now().toSQL();
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
    let queryStringParent = `INSERT INTO comment_thread VALUES (${threadParent.firstCreatedAt}, ${threadParent.lastCreatedAt}, '${threadParent.title}', 1);`;
    let queryStringChild = `INSERT INTO comment_entry VALUES (${threadChild.timestamp}, '${threadChild.body}', ${threadChild.parentThreadTime});`;
    db.pool.query(queryStringParent)
      .then(dbRes => {
        db.pool.query(queryStringChild)
          .then(dbRes => {
            return res.status(201);
          });
      })
      .catch(err => {
        console.error(err);
        return res.status(500);
      });
  },

  updateThread: (req, res) => {
    let createdAt = DateTime.now().toSQL();
    let threadComment = {
      body: req.body.text,
      timestamp: createdAt,
      parentThreadTime: req.body.parentTime
    }

    let queryString = `INSERT INTO comment_entry VALUES (${threadComment.timestamp}, '${threadComment.body}', ${threadComment.parentThreadTime}); UPDATE comment_thread SET number_of_comments = number_of_comments + 1 WHERE init_com_time = ${threadComment.parentThreadTime});`;
    db.pool.query(queryString)
      .then(dbRes => {
        return res.status(201);
      }).catch(err => {
        console.error(err);
        return res.status(500);
      });
  },

  getThreads: (req, res) => {
    let params = {
      maxCount: 50
    };
    let maxCount = params.maxCount;
      let queryString = `SELECT * FROM comment_thread ORDER BY init_com_time DESC LIMIT ${maxCount};`;
      console.log(queryString);

      db.pool.query(queryString)
        .then(dbRes => {
          return res.status(200).json(dbRes.rows);
        })
        .catch(err => {
          console.error(err);
          throw "Could not retrieve threads.";
        });

    /*
    db.getThreadsByLatest(params)
      .then(listOfMessages => {
        console.log(listOfMessages + "HEllo");
        return res.status(200).json(listOfMessages);
      })
      .catch(err => {
        console.error(err);
      });
      */
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

  getEntries: (req, res) => {
    let maxCount = 50;
    let queryString = `SELECT * FROM comment_entry WHERE parent_init_time = ${parent_time} ORDER BY comment_time DESC LIMIT ${maxCount};`;
    db.pool.query(queryString)
      .then(dbRes => {
        console.log(dbRes.rows);
        return res.status(200).json(dbRes.rows);
      })
      .catch(err => {
        console.error(err);
      });

  }
}
