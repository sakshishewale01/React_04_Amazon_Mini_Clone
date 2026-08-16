import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="bg-[#131921] px-8 py-4">
      <nav className="flex items-center justify-between">
        
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-white"
        >
          Amazon Clone
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link
            to="/"
            className="text-white hover:text-[#ff9900]"
          >
            Home
          </Link>

          <Link
            to="/products"
            className="text-white hover:text-[#ff9900]"
          >
            Products
          </Link>

          <Link
            to="/orders"
            className="text-white hover:text-[#ff9900]"
          >
            Orders
          </Link>

          <Link
            to="/cart"
            className="text-white hover:text-[#ff9900]"
          >
            Cart
          </Link>

          <Link
            to="/login"
            className="text-white hover:text-[#ff9900]"
          >
            Login
          </Link>
        </div>

      </nav>
    </header>
  );
}

export default Navbar;