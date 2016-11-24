const React = require('react')
const {render} = require('react-dom')
const {createStore} = require('redux')

const reducer = require('./reducer');

const initialState = {
  counter: 5
}

var main = document.querySelector('main')

const {dispatch, subscribe, getState} = createStore(reducer, initialState)

const Counter = (props) =>
 <div onClick= {props.increment}>
    <h1>Counter: {props.state.counter}</h1>
  </div>


subscribe(() => {
  const state = getState()
  render(<Counter state={state}
      increment={() => dispatch({type: 'INCREMENT'})}
     />, main)
})


dispatch({type:'INIT'})
