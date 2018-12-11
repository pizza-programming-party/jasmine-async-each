
const calculator = require('../src/calculator');
const Server = require('./server');

const server = new Server();

describe('add', () => {

  server.load().then((datasets) => {

    datasets.forEach((dataset) => {

      it(`${dataset.a} + ${dataset.b} = ${dataset.expected}`, () => {
        expect(calculator.add(dataset.a, dataset.b)).toEqual(dataset.expected);
      });

    });

  });

});
