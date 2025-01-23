import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-900 bg-opacity-90 backdrop-blur-md shadow-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-yellow-400 font-bold text-2xl">
            Paris Futsal Academy
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-yellow-400 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/resultats"
              className="text-white font-medium hover:text-yellow-300 transition"
            >
              Résultats
            </Link>
            <Link
              to="/academie"
              className="text-white font-medium hover:text-yellow-300 transition"
            >
              Académie
            </Link>
            <Link
              to="/action-sociale"
              className="text-white font-medium hover:text-yellow-300 transition"
            >
              Action Sociale
            </Link>
            <Link
              to="/contact"
              className="text-white font-medium hover:text-yellow-300 transition"
            >
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } mt-4 bg-blue-800 rounded-lg shadow-lg`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <Link
              to="/resultats"
              className="text-white font-medium hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Résultats
            </Link>
            <Link
              to="/academie"
              className="text-white font-medium hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Académie
            </Link>
            <Link
              to="/action-sociale"
              className="text-white font-medium hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Action Sociale
            </Link>
            <Link
              to="/contact"
              className="text-white font-medium hover:text-yellow-300 transition"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
