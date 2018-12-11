
class Server {

  static load() {
    return this.fetch()
      .then((datasets) => {
        this.datasets = datasets;
      });
  }

  static fetch() {
    return Promise.resolve([
      { a: 0, b: 1, answer: 1 },
      { a: 1, b: 1, answer: 2 },
      { a: 0, b: 3, answer: 3 },
      { a: 2, b: 2, answer: 4 },
      { a: 1, b: 4, answer: 5 },
    ]);
  }

}

module.exports = Server;
