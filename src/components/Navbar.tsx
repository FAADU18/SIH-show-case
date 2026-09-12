import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Architecture', href: '#architecture' },
    { label: 'How It Works', href: '#workflow' },
    { label: 'Privacy', href: '#privacy' },
    { label: 'Demo', href: '#demo' },
    { label: 'Research', href: '#research' },
    { label: 'Technology', href: '#technology' },
    { label: 'Team', href: '#team' },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200/80 bg-white/90 shadow-sm backdrop-blur-md">
      <div className="container-wide">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-1">
            <div className="text-2xl font-bold tracking-tight text-navy-900">VARMA</div>
            <div className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-tech-teal sm:block">On-device AI</div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.slice(0, 6).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-gray-600 hover:text-navy-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="#demo"
              className="btn-primary text-sm"
            >
              Live Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-navy-900"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-4 py-2 text-sm font-medium text-gray-600 hover:text-navy-900 hover:bg-gray-50 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-4 border-t border-gray-200">
              <a
                href="#demo"
                className="btn-primary block text-center text-sm"
              >
                Live Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
