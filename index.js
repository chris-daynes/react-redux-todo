const React = require('react')
const {render} = require('react-dom')
const {createStore} = require('redux')
const { createFragment} = require('react')


const reducer = require('./reducer')
const Products = require('./views/products')
const Cart = require('./views/cart')

const initialState = {
  products: [
    {id: 0, name: 'Metallica', price: 10},
    {id: 1, name: 'Motorhead', price: 20}
  ],
  cart: {
    0: 2,
    1: 0
  }
}

var main = document.querySelector('main')
const { dispatch, subscribe, getState } = createStore(reducer, initialState)


subscribe(() => {
  const state = getState()
  render(
    <div className='container'>
      <Products state = {state} dispatch = {dispatch}/>
      <Cart state = {state} />
    </div> , main)
})


dispatch({type:'INIT'})
