import React from "react";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">
          🚀 MyApp
        </h1>

        {/* Nav */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a href="#" className="hover:text-yellow-300 transition">Home</a>
          <a href="#" className="hover:text-yellow-300 transition">About</a>
          <a href="#" className="hover:text-yellow-300 transition">Services</a>
          <a href="#" className="hover:text-yellow-300 transition">Contact</a>
        </nav>

        {/* Button */}
        <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 hover:text-black transition">
          Login
        </button>

      </div>
    </header>
  );
};

export default Header;