const test = require('tape')
const freeze = require('deep-freeze')
const clone = require('clone')
const reducer = require('../reducer');


test('Hello world test', (t) => {
  t.ok(true)
  t.end()
})

test('ADD_ITEM adds one when that item is not in the cart', (t) => {
  //arrange
  const state = {
    products: [
      {id: 0, name: 'Metallica', price: 10},
      {id: 1, name: 'Motorhead', price: 20}
    ],
    cart: {
      0: 0,
      1: 0
    }
  }
  const action = {type: 'ADD_ITEM', payload: 0}
  freeze(state)
  freeze(action)

  const expected = {
    products: [
      {id: 0, name: 'Metallica', price: 10},
      {id: 1, name: 'Motorhead', price: 20}
    ],
    cart: {
      0: 1,
      1: 0
    }
  }

  //act
  const actual = reducer(state, action)
  //assert
  t.deepEqual(actual, expected, 'Successfully adds an item to the cart')
  t.end()
})

test('REMOVE_ITEM removes an item from the cart if it exists', (t) => {
  const state = {
    products: [
      {id: 0, name: 'Metallica', price: 10},
      {id: 1, name: 'Motorhead', price: 20}
    ],
    cart: {
      0: 2,
      1: 0
    }
  }
  const action = {type: 'REMOVE_ITEM', payload: 0}
  freeze(state)
  freeze(action)

  const expected = {
    products: [
      {id: 0, name: 'Metallica', price: 10},
      {id: 1, name: 'Motorhead', price: 20}
    ],
    cart: {
      0: 1,
      1: 0
    }
  }

  const actual = reducer(state, action)
  t.deepEqual(actual, expected, 'Successfully removes item from the cart')
  t.end()
})
