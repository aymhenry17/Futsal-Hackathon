import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-2xl">Paris Futsal Academy</Link>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/resultats" className="text-white hover:text-blue-400">Résultats</Link>
            <Link to="/academie" className="text-white hover:text-blue-400">Académie</Link>
            <Link to="/action-sociale" className="text-white hover:text-blue-400">Action Sociale</Link>
            <Link to="/contact" className="text-white hover:text-blue-400">Contact</Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} pt-4`}>
          <div className="flex flex-col space-y-4">
            <Link to="/resultats" className="text-white hover:text-blue-400">Résultats</Link>
            <Link to="/academie" className="text-white hover:text-blue-400">Académie</Link>
            <Link to="/action-sociale" className="text-white hover:text-blue-400">Action Sociale</Link>
            <Link to="/contact" className="text-white hover:text-blue-400">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}