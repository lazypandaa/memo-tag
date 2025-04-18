import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import * as FaIcons from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { to: 'hero', label: 'Home' },
    { to: 'features', label: 'Features' },
    { to: 'howItWorks', label: 'How It Works' },
    { to: 'testimonials', label: 'Testimonials' },
    { to: 'pricing', label: 'Pricing' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold"
          >
            <span className="text-primary">Memo</span>
            <span className="text-secondary">Tag</span>
          </motion.div>

          {/* Desktop Menu */}
          <motion.ul 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
            className="hidden md:flex space-x-6"
          >
            {navLinks.map((link, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className={`cursor-pointer hover:text-primary font-medium transition-colors ${scrolled ? 'text-dark' : 'text-dark'}`}
                >
                  {link.label}
                </Link>
              </motion.li>
            ))}
          </motion.ul>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu}
              className={`focus:outline-none ${scrolled ? 'text-dark' : 'text-dark'}`}
            >
              {isOpen 
                ? React.createElement(FaIcons.FaTimes, { size: 24 }) 
                : React.createElement(FaIcons.FaBars, { size: 24 })}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ 
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className="px-4 py-2">
          <ul className="flex flex-col space-y-4 py-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu}
                  className="block cursor-pointer hover:text-primary font-medium"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar; 