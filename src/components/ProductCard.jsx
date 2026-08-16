import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-5 hover:shadow-lg transition">

      {/* Product Image */}
      <div className="h-48 bg-gray-100 rounded-md flex items-center justify-center mb-4">
        <img
          src={product.image}
          alt={product.title}
          className="h-full w-full object-contain rounded-md"
        />
      </div>

      {/* Product Title */}
      <h2 className="text-lg font-semibold line-clamp-2">
        {product.title}
      </h2>

      {/* Price */}
      <p className="text-xl font-bold mt-2">
        ₹{product.price}
      </p>

      {/* Rating */}
      <p className="text-yellow-500 mt-1">
        ⭐ {product.rating.rate}
      </p>

      {/* View Details */}
      <Link
        to={`/products/${product.id}`}
        className="block text-center bg-[#ff9900] mt-4 py-2 rounded font-semibold hover:bg-orange-400"
      >
        View Details
      </Link>

    </div>
  );
}

export default ProductCard; 