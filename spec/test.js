
const Jasmine = require('jasmine');
const Server = require('./server');

Server.load()
  .then(() => {
    console.log(`dataset count is ${Server.datasets.length}`);
    const jasmine = new Jasmine();
    jasmine.loadConfigFile('./spec/support/jasmine.json');
    jasmine.execute();
  });
