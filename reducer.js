const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  switch (action.type) {
    case 'ADD_ITEM':
       let cart = newState.cart
       let productId = action.payload
       cart[productId] = cart[productId] + 1 || 1
      return newState

    case 'REMOVE_ITEM':
      cart = newState.cart
      productId = action.payload
      cart[productId] = cart[productId] - 1
      if(!cart[productId]) {
        delete cart[productId]
      }
      return newState


    default:
      return newState

  }
}
