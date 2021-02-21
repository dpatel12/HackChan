const THREADS_URL = "http://localhost:5000/threads";
const COMMENTS_URL = "http://localhost:5000/threads/thread_id";

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

  async getCommentsForThread(timestamp) {
    let url = new URL(COMMENTS_URL);
    url.search = new URLSearchParams(timestamp).toString();
    const response = await fetch(url);
    return response.json();
  }

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
