import React from "react";
import { MapPin, Mail, Phone, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";

const Footer: React.FC = () => {
  const handleNavLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-primary-light border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
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
              <span className="font-serif text-3xl font-bold text-white tracking-wider">
                DARSHANIK <span className="text-accent">APPAREL</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Premium clothing manufacturing services for fashion startups, 
              influencers, and established brands. From design to delivery, 
              we bring your vision to life.
            </p>
            
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#home" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => handleNavLinkClick(e, "home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => handleNavLinkClick(e, "about")}
                >
                  About Us
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => handleNavLinkClick(e, "services")}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#why-us" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => handleNavLinkClick(e, "why-us")}
                >
                  Why Choose Us
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => handleNavLinkClick(e, "testimonials")}
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-gray-400 hover:text-accent transition-colors duration-300"
                  onClick={(e) => handleNavLinkClick(e, "contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="text-accent h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">Tiruppur, Tamil Nadu, India</span>
              </li>
              <li className="flex items-start">
                <Mail className="text-accent h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400 break-all">darshanikdhanasekeran@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="text-accent h-5 w-5 mt-1 mr-3" />
                <span className="text-gray-400">+91 7550319258</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} Darshanik Apparel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
