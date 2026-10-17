import { Link } from 'react-router';
import { useCart } from '../pages/CartContext';
import './Navbar.css';

function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        ShopCart
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/shop">Shop</Link>

        <Link to="/cart" className="cart-link">
          🛒 Cart
          <span className="cart-count">
            {totalItems}
          </span>
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;