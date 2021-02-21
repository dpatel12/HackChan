const db = require('../db');
// callbacks :)


module.exports = {
  insertThread: (threadParent, threadChild) => {
    //db.query();

    if (false) {
      throw "Could not create new thread";
    }
  },

  updateThread: (threadComment) => {
    //db.query()

    if (false) {
      throw "Could not reply to existing thread";
    }
  },

  getThreadsByLatest: (params) => {

    let maxCount = params.maxCount;
    //write query
    let threads = [];
    return threads;
  }
}
