const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  switch (action.type) {
    case 'INCREMENT':
       newState.counter += 1
      return newState
    default:
      return newState

  }
}
