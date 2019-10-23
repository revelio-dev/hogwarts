var assert = require('assert');

function solution(input) {
  return input;
};

describe('Colecciones', function() {
  it('Convertir una lista de objetos en otra', function() {
    const users = [
      {"id": 25, "name": "User25"},
      {"id": 32, "name": "User32"},
      {"id": 123, "name": "User123"},
    ];
    const expected = [1, 2, 3];
    const actual = solution(users);
    assert.equal(actual, expected);
  });
});
