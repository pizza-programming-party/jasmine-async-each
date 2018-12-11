
class Server {

  load() {
    return Promise.resolve([
      {
        a: 1,
        b: 1,
        expected: 2
      },
      {
        a: 2,
        b: 2,
        expected: 4
      }
    ]);
  }

}

module.exports = Server;
