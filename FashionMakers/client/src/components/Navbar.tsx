import React, { useState, useEffect } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    // Close mobile menu if open
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false);
    }
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <header 
      id="header" 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-primary shadow-lg backdrop-blur-md bg-opacity-90" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                className="fill-accent logo-animate"
              >
                <path d="M20 3C10.6 3 3 10.6 3 20s7.6 17 17 17 17-7.6 17-17S29.4 3 20 3zm0 3c7.7 0 14 6.3 14 14s-6.3 14-14 14S6 27.7 6 20 12.3 6 20 6z"/>
                <path d="M20 11c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 3c3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6 2.7-6 6-6z"/>
                <path d="M20 17c-1.7 0-3 1.3-3 3s1.3 3 3 3 3-1.3 3-3-1.3-3-3-3z"/>
              </svg>
              <span className="font-serif text-2xl font-bold text-white tracking-wider">
                DARSHANIK <span className="text-accent">APPAREL</span>
              </span>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              type="button"
              className="text-gray-300 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          
          {/* Desktop menu */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => handleNavLinkClick(e, "home")}
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => handleNavLinkClick(e, "about")}
            >
              About
            </a>
            <a 
              href="#services" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => handleNavLinkClick(e, "services")}
            >
              Services
            </a>
            <a 
              href="#why-us" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => handleNavLinkClick(e, "why-us")}
            >
              Why Us
            </a>
            <a 
              href="#testimonials" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => handleNavLinkClick(e, "testimonials")}
            >
              Testimonials
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-white transition-colors duration-200"
              onClick={(e) => handleNavLinkClick(e, "contact")}
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div className={`md:hidden bg-primary-light ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a 
            href="#home" 
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-primary-light rounded-md"
            onClick={(e) => handleNavLinkClick(e, "home")}
          >
            Home
          </a>
          <a 
            href="#about" 
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-primary-light rounded-md"
            onClick={(e) => handleNavLinkClick(e, "about")}
          >
            About
          </a>
          <a 
            href="#services" 
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-primary-light rounded-md"
            onClick={(e) => handleNavLinkClick(e, "services")}
          >
            Services
          </a>
          <a 
            href="#why-us" 
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-primary-light rounded-md"
            onClick={(e) => handleNavLinkClick(e, "why-us")}
          >
            Why Us
          </a>
          <a 
            href="#testimonials" 
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-primary-light rounded-md"
            onClick={(e) => handleNavLinkClick(e, "testimonials")}
          >
            Testimonials
          </a>
          <a 
            href="#contact" 
            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-primary-light rounded-md"
            onClick={(e) => handleNavLinkClick(e, "contact")}
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
