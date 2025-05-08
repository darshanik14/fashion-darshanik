import React from "react";
import { 
  PencilRuler, 
  Scissors, 
  Factory, 
  Tag, 
  Truck, 
  Leaf 
} from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-primary-light p-6 rounded-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 border border-transparent hover:border-accent/50 relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-full group-hover:translate-x-0"></div>
      <div className="text-accent text-3xl mb-4 relative z-10">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-3 relative z-10">{title}</h3>
      <p className="text-gray-300 relative z-10">
        {description}
      </p>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <PencilRuler className="h-8 w-8" />,
      title: "Design & Development",
      description: "Turn your vision into reality with our expert design team. We help refine concepts, create technical drawings, and develop samples that match your brand aesthetics."
    },
    {
      icon: <Scissors className="h-8 w-8" />,
      title: "Sampling & Prototyping",
      description: "Perfect your products before production with our sampling services. We create high-quality prototypes for testing fit, materials, and design elements."
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: "Manufacturing",
      description: "State-of-the-art production facilities with flexible minimums. We maintain strict quality control while meeting your timeline requirements."
    },
    {
      icon: <Tag className="h-8 w-8" />,
      title: "Branding & Packaging",
      description: "Enhance your products with custom labels, tags, and packaging solutions that strengthen your brand identity and create a premium unboxing experience."
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: "Logistics & Shipping",
      description: "Streamline your supply chain with our comprehensive logistics solutions. We handle inventory management, quality checks, and worldwide shipping."
    },
    {
      icon: <Leaf className="h-8 w-8" />,
      title: "Sustainable Solutions",
      description: "Build an eco-conscious brand with our sustainable material options, ethical production practices, and environmentally friendly processes."
    }
  ];

  return (
    <section id="services" className="bg-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Our Services</h2>
          <div className="stitch-line mx-auto w-24 mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            From concept to creation, we provide end-to-end solutions for your clothing brand.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
