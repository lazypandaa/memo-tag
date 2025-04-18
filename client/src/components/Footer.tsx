import React from 'react';
import { Link } from 'react-scroll';
import * as FaIcons from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    product: [
      { label: 'Features', to: 'features' },
      { label: 'How It Works', to: 'howItWorks' },
      { label: 'Pricing', to: 'pricing' },
      { label: 'FAQ', to: '#' }
    ],
    company: [
      { label: 'About Us', to: '#' },
      { label: 'Careers', to: '#' },
      { label: 'Blog', to: '#' },
      { label: 'Press', to: '#' }
    ],
    support: [
      { label: 'Help Center', to: '#' },
      { label: 'Contact Us', to: 'contact' },
      { label: 'Privacy Policy', to: '#' },
      { label: 'Terms of Service', to: '#' }
    ]
  };

  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-4/12 px-4 mb-8 lg:mb-0">
            <div className="mb-4">
              <div className="text-2xl font-bold">
                <span className="text-primary">Memo</span>
                <span className="text-secondary">Tag</span>
              </div>
            </div>
            <p className="mb-6 text-gray-400 text-sm max-w-sm">
              The smart tagging system that helps you organize and recall information instantly.
              Never forget important details again!
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                {React.createElement(FaIcons.FaFacebook)}
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                {React.createElement(FaIcons.FaTwitter)}
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                {React.createElement(FaIcons.FaInstagram)}
              </a>
              <a 
                href="#" 
                className="bg-gray-800 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                {React.createElement(FaIcons.FaLinkedin)}
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-8/12 px-4">
            <div className="flex flex-wrap">
              <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
                <h3 className="text-lg font-bold mb-4">Product</h3>
                <ul className="space-y-2">
                  {footerLinks.product.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full sm:w-1/3 mb-8 sm:mb-0">
                <h3 className="text-lg font-bold mb-4">Company</h3>
                <ul className="space-y-2">
                  {footerLinks.company.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="w-full sm:w-1/3">
                <h3 className="text-lg font-bold mb-4">Support</h3>
                <ul className="space-y-2">
                  {footerLinks.support.map((link, index) => (
                    <li key={index}>
                      <Link
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                        className="text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} MemoTag. All rights reserved.
          </p>
          
          <Link
            to="hero"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="mt-4 md:mt-0 bg-gray-800 hover:bg-primary text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors cursor-pointer"
          >
            {React.createElement(FaIcons.FaArrowUp)}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 