import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert("Login successful!");

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

      <div className="bg-white w-full max-w-md rounded-lg shadow-lg p-8">

        {/* Logo */}
        <h1 className="text-3xl font-bold text-center mb-2">
          Amazon Clone
        </h1>

        <p className="text-center text-gray-500 mb-8">
          Sign in to your account
        </p>

        <form onSubmit={handleSubmit}>

          {/* Email */}
          <div className="mb-5">

            <label className="block font-semibold mb-2">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-blue-500"
              required
            />

          </div>

          {/* Password */}
          <div className="mb-6">

            <label className="block font-semibold mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-3 outline-none focus:border-blue-500"
              required
            />

          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#ff9900] py-3 rounded font-semibold hover:bg-orange-400"
          >
            Sign In
          </button>

        </form>

        {/* Create Account */}
        <p className="text-center text-gray-500 mt-6">
          New to Amazon Clone?
        </p>

        <Link
          to="/"
          className="block text-center border border-gray-300 py-3 rounded mt-3 hover:bg-gray-100"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Login;