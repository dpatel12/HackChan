const db = require('../db');
// callbacks :)


module.exports = {
  getThreadById: (id) => {
    //
    thread = {};
    return thread;
  },

  insertThread: (threadParent, threadChild) => {
    //db.query();

    if (false) {
      throw "Could not insert thread into DB";
    }
  },

  getThreads: (params) => {
    //query
    let threads = [];
    return threads;
  }
}
