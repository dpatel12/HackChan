const THREADS_URL = "http://hackchan.tech/threads";
const COMMENTS_URL = "http://hackchan.tech/threads/thread_id";

/*
Usage:
import Request from 'PATH/TO/fetch';

Request.createNewComment({
    parentTime: "2021-02-21T14:48:43.000Z",
    text: "lol nerd git gud"
})
.then(r => console.log(r))
.catch(e => console.error(e));

do stuff with r
*/




class Request {
  async getThreads() {
    const response = await fetch(THREADS_URL);
    return response.json();
    /*
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.error(err));
    */
  }

/*
{
  thread_time: "ISO TIMESTAMP WITH COLONS REPLACED BY UNDERSCORES"
}
*/

  async getCommentsForThread(timestamp) {
    let url = new URL(COMMENTS_URL);
    url.search = new URLSearchParams(timestamp).toString();
    const response = await fetch(url);

    return response.json();
  }

//see template.json
  async createNewThread(thread) {
      console.log(thread);
      const response = await fetch(THREADS_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(thread)
      });
      return response.json();
  }

//see template.json
  async createNewComment(comment) {
      console.log(comment)
      const response = await fetch(THREADS_URL, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
      });
      return response.json();
  }
}

export default new Request();
