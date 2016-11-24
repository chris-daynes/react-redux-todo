const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  switch (action.type) {
    case 'ADD_ITEM':
       const cart = newState.cart
       const productId = action.payload
       cart[productId] = cart[productId] + 1 || 1
      return newState
    default:
      return newState

  }
}
