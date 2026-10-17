import { useCart } from './CartContext';
import { Link } from 'react-router'
import { useState} from 'react';
import './cart.css'

function Cart() {
    const [orderPlaced , setOrderPlaced] = useState(false);

  const {
    cartItems,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function handleCheckout() {
  clearCart();
  setOrderPlaced(true);
}

 // Show success screen after checkout
  if (orderPlaced) {
    return (
      <div className="order-success">
        <div className="success-icon">✓</div>

        <h1>Order placed successfully!</h1>

        <p>Thank you for shopping with us.</p>

        <Link to="/shop" className="shop-now-button">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
  <h2>Your cart is empty</h2>

  <p>
    Looks like you haven't added anything yet.
  </p>

  <Link to="/shop" className="shop-now-button">
    Continue Shopping
  </Link>
</div>
      ) : (
        <div className="cart-layout">

          {/* Cart Items */}
          <div className="cart-items">

            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>

                {/* Product Image */}
                <img
                  src={item.thumbnail}
                  alt={item.title}
                />

                {/* Product Information */}
                <div className="cart-item-info">
                  <h3>{item.title}</h3>

                  <p className="cart-item-price">
                    ${item.price.toFixed(2)}
                  </p>

                  {/* Quantity Controls */}
                  <div className="quantity-controls">
                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity - 1
                        )
                      }
                    >
                      −
                    </button>

                    <span>{item.quantity}</span>

                    <button
                      onClick={() =>
                        updateQuantity(
                          item.id,
                          item.quantity + 1
                        )
                      }
                    >
                      +
                    </button>
                  </div>

                  {/* Remove */}
                  <button
                    className="remove-button"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>

                {/* Item Subtotal */}
                <div className="item-subtotal">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

              </div>
            ))}

          </div>

          {/* Cart Summary */}
          <div className="cart-summary">
            <h2>Order Summary</h2>

            <div className="summary-row">
              <span>Items</span>
              <span>
                {cartItems.reduce(
                  (total, item) => total + item.quantity,
                  0
                )}
              </span>
            </div>

            <div className="summary-row">
              <span>Total</span>
              <strong>
                ${totalPrice.toFixed(2)}
              </strong>
            </div>

            <button className="checkout-button" onClick = { handleCheckout}>
              Checkout
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default Cart;