import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-100">

      {/* Hero Section */}
      <section className="bg-[#232f3e] px-8 py-20 text-center text-white">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Amazon Clone 🛒
        </h1>

        <p className="text-lg text-gray-300 mb-8">
          Discover amazing products at great prices.
        </p>

        <Link
          to="/products"
          className="inline-block bg-[#ff9900] px-6 py-3 font-semibold text-black rounded hover:bg-orange-400"
        >
          Shop Now
        </Link>
      </section>


      {/* Categories Section */}
      <section className="px-8 py-12">

        <h2 className="text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Electronics */}
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <div className="text-5xl mb-4">💻</div>

            <h3 className="text-xl font-bold mb-2">
              Electronics
            </h3>

            <p className="text-gray-600 mb-4">
              Laptops, phones, headphones and more.
            </p>

            <Link
              to="/products"
              className="text-blue-600 hover:underline"
            >
              Explore →
            </Link>
          </div>


          {/* Fashion */}
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <div className="text-5xl mb-4">👕</div>

            <h3 className="text-xl font-bold mb-2">
              Fashion
            </h3>

            <p className="text-gray-600 mb-4">
              Find clothes, shoes and accessories.
            </p>

            <Link
              to="/products"
              className="text-blue-600 hover:underline"
            >
              Explore →
            </Link>
          </div>


          {/* Home */}
          <div className="bg-white p-8 rounded-lg shadow text-center">
            <div className="text-5xl mb-4">🏠</div>

            <h3 className="text-xl font-bold mb-2">
              Home & Kitchen
            </h3>

            <p className="text-gray-600 mb-4">
              Everything you need for your home.
            </p>

            <Link
              to="/products"
              className="text-blue-600 hover:underline"
            >
              Explore →
            </Link>
          </div>

        </div>
      </section>


      {/* Call To Action */}
      <section className="bg-white py-12 text-center">

        <h2 className="text-2xl font-bold mb-4">
          Ready to start shopping?
        </h2>

        <Link
          to="/products"
          className="inline-block bg-[#ff9900] px-6 py-3 rounded font-semibold hover:bg-orange-400"
        >
          View All Products
        </Link>

      </section>

    </div>
  );
}

export default Home;