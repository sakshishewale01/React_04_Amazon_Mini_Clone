import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();

  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h2 className="text-2xl font-bold">Loading...</h2>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 px-8 py-10">

      <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md p-8">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

          {/* Product Image */}
          <div className="flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>

          {/* Product Information */}
          <div>

            <p className="text-gray-500 uppercase text-sm mb-2">
              {product.category}
            </p>

            <h1 className="text-3xl font-bold mb-4">
              {product.title}
            </h1>

            <p className="text-yellow-500 mb-4">
              ⭐ {product.rating.rate}
              <span className="text-gray-500 ml-2">
                ({product.rating.count} reviews)
              </span>
            </p>

            <p className="text-3xl font-bold mb-6">
              ₹{product.price}
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              {product.description}
            </p>

            <div className="flex gap-4">

              <button
                onClick={() => addToCart(product)}
                className="bg-[#ff9900] px-6 py-3 rounded font-semibold hover:bg-orange-400"
              >
                Add to Cart
              </button>

              <Link
                to="/products"
                className="border border-gray-400 px-6 py-3 rounded font-semibold hover:bg-gray-100"
              >
                Back to Products
              </Link>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default ProductDetails;