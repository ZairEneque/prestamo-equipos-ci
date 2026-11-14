const test = require('node:test');
const assert = require('node:assert/strict');
const { registrarPrestamo } = require('../src/prestamos');

test('registra prestamo y descuenta stock', () => {
  assert.equal(registrarPrestamo(10, 3), 7);
});

test('error si no hay stock', () => {
  assert.throws(() => registrarPrestamo(0, 1));
});

test('error si pide mas de lo que hay', () => {
  assert.throws(() => registrarPrestamo(2, 5));
});

test('error con cantidad cero o negativa', () => {
  assert.throws(() => registrarPrestamo(5, 0));
  assert.throws(() => registrarPrestamo(5, -2));
});
