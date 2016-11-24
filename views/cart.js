const React = require('react');


const Cart = (props) =>
  <div>
    <h3>Here is the cart: </h3>
    <ul>
      {
        Object.keys(props.state.cart).map((id) => {
         return <li>{props.state.products[id].name}
                     <p>Qty: {props.state.cart[id]}</p>
                </li>
      })}
    </ul>
  </div>



module.exports = Cart
