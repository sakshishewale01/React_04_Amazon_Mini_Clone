import { Link } from "react-router-dom";

function Orders() {
  const orders = [
    {
      id: "ORD001",
      date: "17 August 2026",
      status: "Delivered",
      total: 2499,
      product: "Wireless Headphones",
    },
    {
      id: "ORD002",
      date: "15 August 2026",
      status: "Shipped",
      total: 4999,
      product: "Smart Watch",
    },
    {
      id: "ORD003",
      date: "10 August 2026",
      status: "Processing",
      total: 1599,
      product: "Bluetooth Speaker",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 md:px-8 py-10">

      <h1 className="text-3xl font-bold mb-8">
        Your Orders
      </h1>

      {orders.length === 0 ? (

        <div className="bg-white p-10 rounded-lg shadow text-center">

          <h2 className="text-2xl font-bold mb-4">
            You have no orders
          </h2>

          <Link
            to="/products"
            className="inline-block bg-[#ff9900] px-6 py-3 rounded font-semibold"
          >
            Start Shopping
          </Link>

        </div>

      ) : (

        <div className="space-y-6">

          {orders.map((order) => (

            <div
              key={order.id}
              className="bg-white rounded-lg shadow"
            >

              {/* Order Header */}
              <div className="bg-gray-100 p-5 rounded-t-lg flex flex-col md:flex-row md:justify-between gap-3">

                <div>
                  <p className="text-sm text-gray-500">
                    ORDER PLACED
                  </p>

                  <p className="font-semibold">
                    {order.date}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    ORDER ID
                  </p>

                  <p className="font-semibold">
                    {order.id}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    TOTAL
                  </p>

                  <p className="font-semibold">
                    ₹{order.total}
                  </p>
                </div>

              </div>

              {/* Order Details */}
              <div className="p-6">

                <h2 className="text-xl font-semibold mb-3">
                  {order.product}
                </h2>

                <p
                  className={`font-semibold ${
                    order.status === "Delivered"
                      ? "text-green-600"
                      : order.status === "Shipped"
                      ? "text-blue-600"
                      : "text-orange-500"
                  }`}
                >
                  {order.status}
                </p>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Orders;