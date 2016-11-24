const React = require('react');



const Products = (props) =>
  <div>
    <h1>Stores Galore</h1>
    <ul>
      <li>{props.state.products[0].name}</li>
    </ul>
  </div>



module.exports = Products
