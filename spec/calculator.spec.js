
const calculator = require('../src/calculator');
const Server = require('./server');

describe('add', () => {

  Server.datasets.forEach((dataset) => {

    it(`${dataset.a} + ${dataset.b} = ${dataset.expected}`, () => {
      expect(calculator.add(dataset.a, dataset.b)).toEqual(dataset.expected);
    });

  });

});
