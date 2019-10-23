const assert = require('assert');
const cols = require('../src/collection');

// Ejemplo, cambiar por una función real en módulo collection
const solution = (...args) => args;

describe('Colecciones', function() {
  it('Transformar lista en otra (multiplicar todo por 2)', function() {
    const input = [
      1, 2, 3,
    ];
    const expected = [
      2, 4, 6,
    ];
    assert.equal(cols.transform(input), expected);
  });

  it('Filtrar lista para obtener usuarios activos', function() {
    const input = [
      {"id": 25, "name": "User25", "active": true},
      {"id": 32, "name": "User32", "active": false},
      {"id": 123, "name": "User123", "active": true},
    ];
    const expected = [
      {"id": 25, "name": "User25", "active": true},
      {"id": 123, "name": "User123", "active": true},
    ];
    
    assert.equal(solution(input), expected);
  });

  it('Ordenar lista por atributo (nombre)', function() {
    const input = [
      {"id": 123, "name": "User123", "active": true},
      {"id": 25, "name": "User25", "active": true},
      {"id": 32, "name": "User32", "active": false},
    ];
    const expected = [
      {"id": 25, "name": "User25", "active": true},
      {"id": 32, "name": "User32", "active": false},
      {"id": 123, "name": "User123", "active": true},
    ];
    
    assert.equal(solution(input), expected);
  });

  it('Fusionar listas', function() {
    const input1 = [1, 2];
    const input2 = [3, 4];
    const expected = [1, 2, 3, 4];

    assert.equal(solution(input1, input2), expected);
  });

  it('Obtener el valor con la puntuación más alta', function() {
    const input = [20, 60, 10, 10];
    const expected = {"score": 60};

    assert.equal(solution(input), expected);
  });

  it('Obtener el objeto con la puntuación más alta', function() {
    const input = [
      {"score": 20},
      {"score": 60},
      {"score": 10},
      {"score": 10},
    ];
    const expected = {"score": 60};

    assert.equal(solution(input), expected);
  });

  it('Sumar valores de una lista de objectos', function() {
    const input = [
      {"price": 20},
      {"price": 60},
      {"price": 10},
      {"price": 10},
    ];
    const expected = 100;

    assert.equal(solution(input), expected);
  });

  it('Comprobar si un objeto está en una lista', function() {
    const blacklist = [
      {"id": 1, "name": "User1"},
      {"id": 5, "name": "User5"},
    ];
    assert.equal(solution(blacklist, {"id": 1, "name": "User1"}), true);
    assert.equal(solution(blacklist, {"id": 5, "name": "User100"}), false);
  })
});
