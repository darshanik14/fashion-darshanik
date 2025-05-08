import React from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Home: React.FC = () => {
  // Add dark theme class to body
  React.useEffect(() => {
    document.documentElement.classList.add('dark');
    
    // Custom styling for brighter dark theme
    const style = document.createElement('style');
    style.innerHTML = `
      :root {
        color-scheme: dark;
      }
      
      body {
        background-color: hsl(230, 25%, 10%);
        background-image: 
          radial-gradient(at 40% 20%, rgba(59, 130, 246, 0.15) 0px, transparent 50%), 
          radial-gradient(at 80% 0%, rgba(236, 72, 153, 0.15) 0px, transparent 50%),
          radial-gradient(at 5% 90%, rgba(16, 185, 129, 0.15) 0px, transparent 50%);
      }
      
      .bg-primary-light {
        background-color: hsl(225, 25%, 15%);
      }
      
      .text-accent {
        color: hsl(330, 90%, 70%);
      }
      
      .bg-accent {
        background-color: hsl(330, 90%, 55%);
      }
      
      .hover\\:bg-accent-light:hover {
        background-color: hsl(330, 90%, 65%);
      }
      
      .border-accent {
        border-color: hsl(330, 90%, 55%);
      }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.documentElement.classList.remove('dark');
      document.head.removeChild(style);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-primary text-white font-sans">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
