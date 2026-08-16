import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useCart();

  // Calculate total price
  const totalPrice = cart.reduce(
    (total, product) => total + product.price,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-8 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Shopping Cart
      </h1>

      {cart.length === 0 ? (

        // Empty Cart
        <div className="bg-white rounded-lg shadow p-10 text-center">

          <div className="text-6xl mb-4">
            🛒
          </div>

          <h2 className="text-2xl font-bold mb-3">
            Your cart is empty
          </h2>

          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything to your cart yet.
          </p>

          <Link
            to="/products"
            className="inline-block bg-[#ff9900] px-6 py-3 rounded font-semibold hover:bg-orange-400"
          >
            Continue Shopping
          </Link>

        </div>

      ) : (

        // Cart with Products
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Products */}
          <div className="lg:col-span-2 space-y-4">

            {cart.map((product) => (

              <div
                key={product.id}
                className="bg-white rounded-lg shadow p-5 flex flex-col sm:flex-row items-center gap-6"
              >

                {/* Image */}
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-32 h-32 object-contain"
                />

                {/* Product Information */}
                <div className="flex-1 text-center sm:text-left">

                  <h2 className="font-semibold text-lg">
                    {product.title}
                  </h2>

                  <p className="text-gray-500 text-sm mt-2">
                    {product.category}
                  </p>

                  <p className="text-xl font-bold mt-3">
                    ₹{product.price}
                  </p>

                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow p-6 h-fit">

            <h2 className="text-2xl font-bold mb-6">
              Order Summary
            </h2>

            <div className="flex justify-between mb-4">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between mb-4">
              <span>Subtotal</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <div className="border-t pt-4 flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹{totalPrice.toFixed(2)}</span>
            </div>

            <button
              className="w-full bg-[#ff9900] mt-6 py-3 rounded font-semibold hover:bg-orange-400"
            >
              Proceed to Checkout
            </button>

          </div>

        </div>

      )}

    </div>
  );
}

export default Cart;