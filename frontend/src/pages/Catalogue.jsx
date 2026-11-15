import Navbar from "../components/Navbar";

function Catalogue() {

  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      price: 399,
      category: "Fiction",
      cover: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg"
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      price: 499,
      category: "Self Help",
      cover: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg"
    },
    {
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 350,
      category: "Finance",
      cover: "https://covers.openlibrary.org/b/isbn/9781612680194-L.jpg"
    },
    {
      title: "The Psychology of Money",
      author: "Morgan Housel",
      price: 450,
      category: "Finance",
      cover: "https://covers.openlibrary.org/b/isbn/9780857197689-L.jpg"
    }
  ];

  return (
    <>
      <Navbar />

      <section className="catalogue">

        <h1>Book Catalogue</h1>

        <p className="catalogue-subtitle">
          Explore our collection of books
        </p>

        <div className="book-grid">

          {books.map((book) => (

            <div className="book-card" key={book.title}>

              <div className="book-image">
                <img
                  src={book.cover}
                  alt={`${book.title} cover`}
                  loading="lazy"
                />
              </div>

              <div className="book-info">

                <h2>{book.title}</h2>

                <p>By {book.author}</p>

                <span>{book.category}</span>

                <h3>₹{book.price}</h3>

                <button>
                  View Details
                </button>

              </div>

            </div>

          ))}

        </div>

      </section>
    </>
  );
}

export default Catalogue;