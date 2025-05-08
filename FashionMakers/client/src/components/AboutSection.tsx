import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-primary-light py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">About Darshanik Apparels</h2>
          <div className="stitch-line mx-auto w-24 mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Located in the textile hub of Tiruppur, we partner with emerging and established brands 
            to bring their clothing visions to life with precision and excellence.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6956800/pexels-photo-6956800.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Clothing factory with t-shirts" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-40 rounded-lg"></div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-serif font-bold text-accent">Our Story</h3>
            <p className="text-gray-300">
              Founded over 15 years ago, Darshanik Apparels has grown from a small local manufacturer to a trusted partner for brands worldwide. 
              Our journey has been defined by our commitment to quality, innovation, and customer satisfaction.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-accent">Our Mission</h3>
            <p className="text-gray-300">
              We're dedicated to empowering fashion entrepreneurs by providing accessible manufacturing solutions 
              that don't compromise on quality. We believe great fashion should be available to all brands, 
              regardless of size.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-accent">Our Approach</h3>
            <p className="text-gray-300">
              We offer a comprehensive design-to-delivery service, supporting you through every step of the manufacturing process. 
              Our flexible minimums and personalized approach make us the ideal partner for brands at any stage.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
