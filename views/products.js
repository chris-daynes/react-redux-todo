const React = require('react');





const Products = (props) =>
  <div>
    <h1>Stores Galore</h1>
    <ul>
      {props.state.products.map((product) => {
          return <li>
                    {product.name}:  ${product.price}
                </li>
          })
      }
    </ul>
  </div>





module.exports = Products
