"use client";
import Link from "next/link";
import { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser, FaHeart } from "react-icons/fa";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <img src="/logo.jpg" alt="Logo" className="w-8 h-8" />
          <span className="text-xl font-bold text-gray-800">Furniro</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-gray-600">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="hover:text-gray-900">
            Shop
          </Link>
          <Link href="/About" className="hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-900">
            Contact
          </Link>
          <Link href="/Blog" className="hover:text-gray-900">
           Blog
          </Link>
        </nav>

        {/* Icon Buttons */}
        <div className="flex space-x-4 text-gray-600">
          <FaUser className="w-5 h-5 hover:text-gray-900 cursor-pointer" />
          <FaSearch className="w-5 h-5 hover:text-gray-900 cursor-pointer" />
          <FaHeart className="w-5 h-5 hover:text-gray-900 cursor-pointer" />
          <Link href="/cart">
            <FaShoppingCart className="w-5 h-5 hover:text-gray-900 cursor-pointer" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-xl text-gray-600 hover:text-gray-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-md space-y-2 px-6 py-4">
          <Link href="/" className="block text-gray-600 hover:text-gray-900">
            Home
          </Link>
          <Link href="/shop" className="block text-gray-600 hover:text-gray-900">
            Shop
          </Link>
          <Link href="/about" className="block text-gray-600 hover:text-gray-900">
            About
          </Link>
          <Link href="/contact" className="block text-gray-600 hover:text-gray-900">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
}