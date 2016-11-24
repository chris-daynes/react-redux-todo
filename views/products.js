const React = require('react');





const Products = (props) =>
  <div>
    <h1>Stores Galore</h1>
    <ul>
    {props.state.products.map((product) => {
        return <li>
                  {product.name}:  ${product.price}
                  <button onClick= {
                    () => props.dispatch({type: 'ADD_ITEM', payload: product.id})}
                  >Add Item</button>

                  <button onClick={
                    () => props.dispatch({type: 'REMOVE_ITEM', payload: product.id})}
                  >Delete Item</button>
              </li>
        })
    }
    </ul>
  </div>

module.exports = Products
