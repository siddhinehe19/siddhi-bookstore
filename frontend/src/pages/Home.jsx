import Navbar from "../components/Navbar";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <div className="hero-content">

          <h1>Welcome to BookStore</h1>

          <p>
            Discover your next favorite book.
            Explore our collection of books at affordable prices.
          </p>

          <a href="/catalogue" className="hero-button">
            Browse Books
          </a>

        </div>
      </section>

      <section className="features">

        <div className="feature-card">
          <h2>📚 Large Collection</h2>
          <p>
            Explore books from different categories and authors.
          </p>
        </div>

        <div className="feature-card">
          <h2>💰 Affordable Prices</h2>
          <p>
            Find your favorite books at reasonable prices.
          </p>
        </div>

        <div className="feature-card">
          <h2>🚚 Easy Shopping</h2>
          <p>
            Enjoy a simple and convenient online bookstore.
          </p>
        </div>

      </section>
    </>
  );
}

export default Home;