import { Link } from 'react-router';
import './Home.css';

function Home() {
  return (
    <main className="home-page">

      <section className="hero-section">

        <div className="hero-content">
          <p className="hero-tag">WELCOME TO SHOPCART</p>

          <h1>
            Everything you need,
            <br />
            all in one place.
          </h1>

          <p className="hero-description">
            Discover great products, add your favorites
            to your cart, and enjoy a simple shopping
            experience.
          </p>

          <Link to="/shop" className="shop-now-button">
            Shop Now
          </Link>
        </div>

      </section>

      <section className="features-section">

        <div className="feature">
          <h3>🛍️ Wide Selection</h3>
          <p>
            Browse through a variety of products
            available in our shop.
          </p>
        </div>

        <div className="feature">
          <h3>🛒 Easy Cart</h3>
          <p>
            Easily manage products and quantities
            in your shopping cart.
          </p>
        </div>

        <div className="feature">
          <h3>⚡ Simple Checkout</h3>
          <p>
            Review your order and get ready for
            a quick checkout.
          </p>
        </div>

      </section>

    </main>
  );
}

export default Home;