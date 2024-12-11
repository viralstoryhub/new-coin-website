import React from 'react';
import { Menu, X, Cpu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed w-full bg-black/90 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold flex items-center gap-2">
              <Cpu className="w-8 h-8 text-blue-500" />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">
                SolAIra
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-300 hover:text-white transition">
              Features
            </a>
            <a href="#ai-tools" className="text-gray-300 hover:text-white transition">
              AI Tools
            </a>
            <a href="#exchange" className="text-gray-300 hover:text-white transition">
              Exchange
            </a>
            <a href="#roadmap" className="text-gray-300 hover:text-white transition">
              Roadmap
            </a>
            <a href="#support" className="text-gray-300 hover:text-white transition">
              Support
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:opacity-90 transition">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#features"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#ai-tools"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                AI Tools
              </a>
              <a
                href="#exchange"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Exchange
              </a>
              <a
                href="#roadmap"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Roadmap
              </a>
              <a
                href="#support"
                className="block px-3 py-2 text-gray-300 hover:text-white transition"
              >
                Support
              </a>
              <div className="pt-4">
                <button className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-lg hover:opacity-90 transition">
                  Get Started
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
