
import { useReducer } from 'react';
import { useCart } from './CartContext';
import './ProductCard.css'

function reducer(state, action) {
  switch (action.type) {
    case 'incremented_count':
      return { count: state.count + 1 };

    case 'decremented_count':
      return { count: Math.max(1, state.count - 1) };

    case 'set_count':
      return { count: action.value };

    default:
      throw new Error('Unknown action: ' + action.type);
  }
}

function ProductCard({ product }) {
  const [state, dispatch] = useReducer(reducer, { count: 1 });

  const { addToCart } = useCart();

  return (
    <div className="product-card">

      <div className="product-image">
        <img
          src={product.thumbnail}
          alt={product.title}
        />
      </div>

      <div className="product-info">

        <h3>{product.title}</h3>

        <p className="product-price">
          ${product.price.toFixed(2)}
        </p>

        <p className="product-category">
          {product.category}
        </p>

        <div className="quantity-controls">

          <button
            onClick={() =>
              dispatch({ type: 'decremented_count' })
            }
          >
            −
          </button>

          <span>{state.count}</span>

          <button
            onClick={() =>
              dispatch({ type: 'incremented_count' })
            }
          >
            +
          </button>

        </div>

        <button
          className="add-to-cart-button"
          onClick={() => addToCart(product, state.count)}
        >
          Add to Cart
        </button>

      </div>
    </div>
  );
}

export default ProductCard;