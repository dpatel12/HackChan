const db = require('../db');
const { DateTime } = require('luxon');

module.exports = {
  postThread: (req, res) => {
    let createdAt = new Date();
    createdAt = createdAt.toUTCString();
    console.log(req.body);
    let threadParent = [
      createdAt,
      createdAt,
      req.body.title,
      1
    ];

    let threadChild = [
      createdAt,
      req.body.text,
      createdAt
    ];
    console.log(threadParent);
    console.log(threadChild);
    let queryStringParent = `INSERT INTO comment_thread
    (
      init_com_time,
      recent_com_time,
      thread_name,
      number_of_comments
    )
    VALUES ($1, $2, $3, $4)`;
    let queryStringChild = `INSERT INTO comment_entry
    (
      comment_time,
      comment_text,
      parent_init_time
    )
    VALUES ($1, $2, $3)`;
    db.pool.query(queryStringParent, threadParent)
      .then(dbRes => {
        db.pool.query(queryStringChild, threadChild)
          .then(dbRes1 => {
              console.log("innermost return statement");
              return res.status(201).json({
                message: ""
              });
          });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).send("");
      });

  },

  updateThread: (req, res) => {
    let createdAt = new Date();
    let parentDate = new Date(req.body.parentTime);
    let threadComment = [
      createdAt,
      req.body.text,
      parentDate
    ];
    let update = [ parentDate ];
    let queryString = `INSERT INTO comment_entry
    (
      comment_time,
      comment_text,
      parent_init_time
    )
    VALUES ($1, $2, $3);`;
    let updateString = `UPDATE comment_thread SET number_of_comments = number_of_comments + 1 WHERE init_com_time = $1;`;
    db.pool.query(queryString, threadComment)
      .then(dbRes => {
        db.pool.query(updateString, update)
          .then( () => {
            return res.status(200).json({
              message: "not empty"
            });
          });
      }).catch(err => {
        console.error(err);
        return res.status(500).send("");
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
          let retObj = dbRes.rows.map(x => {
            console.log("a")
            return {
              createdAt: x.init_com_time,
              title: x.thread_name,
              count: x.number_of_comments
            };
          });
          console.log("hit")
          return res.status(200).json(retObj);
      })
      .catch(err => {
         console.error(err);
         return res.status(500);
      });
  },

  getEntries: (req, res) => {
    let maxCount = 50;
    let parsedTime = req.query.thread_time.replace(/_/g, ":");
    let threadTime = DateTime.fromISO(parsedTime).toJSDate();
    console.log(threadTime);
    let threadComment = [
      threadTime,
      maxCount
    ];
    let queryString = `SELECT * FROM comment_entry WHERE parent_init_time =
    $1 ORDER BY comment_time DESC LIMIT $2;`;
    db.pool.query(queryString, threadComment)
      .then(dbRes => {
        console.log(dbRes.rows);
        let retObj = {
          thread_time: parsedTime,
          comments: []
        };
        retObj.comments = dbRes.rows.map(x => {
          return {
            comment_time: x.comment_time,
            comment_text: x.comment_text
          };
        })
        return res.status(200).json(retObj);
      })
      .catch(err => {
        console.error(err);
        return res.status(500);
      });
  },

}
