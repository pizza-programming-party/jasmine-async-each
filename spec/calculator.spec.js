
const calculator = require('../src/calculator');
const Server = require('./server');

describe('add', () => {

  Server.datasets.forEach((dataset) => {

    it(`${dataset.a} + ${dataset.b} = ${dataset.answer}`, () => {
      expect(calculator.add(dataset.a, dataset.b)).toEqual(dataset.answer);
    });

  });

});
