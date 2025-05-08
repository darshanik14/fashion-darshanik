import React from "react";

const HeroSection: React.FC = () => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      window.scrollTo({
        top: contactSection.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="fabric-animate min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="inline-block">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Build Your <span className="text-accent">Brand</span> With Us
              </h1>
              <div className="stitch-line mt-4"></div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 mt-6 max-w-xl">
              Helping fashion startups, influencers, and clothing brands launch their own apparel lines with premium manufacturing solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 bg-accent text-primary font-semibold rounded-md transition-all duration-300 hover:bg-accent-light transform hover:-translate-y-1 text-center"
                onClick={handleScrollToContact}
              >
                Start Your Brand
              </a>
              <a 
                href="#contact" 
                className="inline-block px-8 py-3 border-2 border-white text-white font-semibold rounded-md transition-all duration-300 hover:bg-white hover:text-primary transform hover:-translate-y-1 text-center"
                onClick={handleScrollToContact}
              >
                Get a Quote
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <img 
              src="https://images.pexels.com/photos/5698851/pexels-photo-5698851.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Oversized clothing collection" 
              className="rounded-lg shadow-2xl w-full object-cover transform transition-all duration-500 hover:scale-105"
            />
            <div className="absolute -bottom-5 -right-5 bg-accent text-primary p-4 rounded shadow-lg">
              <p className="font-serif font-bold">15+ Years</p>
              <p className="text-sm">of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
