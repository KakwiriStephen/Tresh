"use client";

import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-white shadow-md fixed  w-full z-20">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6 md:py-4">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <Link href="/">
            <img
              src="/assets/Frame 37.png" // Replace with the actual logo path
              alt="Treshaw International School Logo"
              className="h-10 w-10 md:h-12 md:w-12" // Adjust size based on screen size
            />
          </Link>
          <div>
            <h1 className="text-lg md:text-xl font-bold text-blue-800">
              TRESHAW INTERNATIONAL SCHOOL
            </h1>
            <p className="text-xs md:text-sm font-medium text-green-500">
              YOUR IDEAL ACADEMIC SOLUTION PROVIDER
            </p>
          </div>
        </div>

        {/* Desktop Links */}
        <nav className="hidden lg:flex space-x-4 lg:space-x-6">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            About
          </Link>
          {/* Only show "What We Offer" and "Subject & Classes" on screens larger than 1079px */}
          <Link
            href="/offer"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            What We Offer
          </Link>
          <Link
            href="/subject"
            className="hidden xl:inline-block text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            Subject & Classes
          </Link>
          <Link
            href="/contactUs"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-300"
          >
            Contact
          </Link>
        </nav>

        {/* Internal Button */}
        <button
          className="hidden lg:inline-block text-white px-5 py-2 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-1"
          style={{ backgroundColor: "#2CB34C" }}
        >
          Internal
        </button>

        {/* Hamburger Icon for Mobile */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-gray-700 focus:outline-none"
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <nav className="lg:hidden bg-white shadow-lg pb-4">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            href="/offer"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            What We Offer
          </Link>
          <Link
            href="/subject-classes"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Subject & Classes
          </Link>
          <Link
            href="/contactUs"
            onClick={toggleMenu}
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          >
            Contact
          </Link>
          <button
            className="w-full text-left text-white px-4 py-2 mt-3 rounded-lg shadow-[0px_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0px_6px_25px_rgba(0,0,0,0.4)] transition-all duration-300 transform hover:translate-y-1"
            style={{ backgroundColor: "#2CB34C" }}
            onClick={toggleMenu}
          >
            Internal
          </button>
        </nav>
      )}
    </header>
  );
}
