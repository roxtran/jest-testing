const { expect } = require('@jest/globals')
const sum = require('./sum')

test('properly adds 2 numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
