const React = require('react');


const Cart = (props) =>
  <div>
    <h3>Here is the cart: </h3>
    <ul>
      {
        Object.keys(props.state.cart).map((item, index) => {
         return <li>{props.state.products[index].name}
                     <p>Qty: {props.state.cart[index]} Price: ${(props.state.products[index].price)* props.state.cart[index]}</p>
                </li>
      })}
    </ul>
  </div>



module.exports = Cart
