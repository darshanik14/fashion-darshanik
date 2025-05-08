import React from "react";
import { Medal, CheckCircle, Package, Headphones } from "lucide-react";

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-primary bg-opacity-80 p-6 rounded-lg shadow-lg hover:shadow-accent/20 transition-all duration-300 border-l-2 border-accent">
      <div className="text-accent text-3xl mb-3 transform transition-transform duration-300 hover:scale-110 inline-block">
        {icon}
      </div>
      <h3 className="text-xl font-serif font-bold mb-2">{title}</h3>
      <p className="text-gray-300">
        {description}
      </p>
    </div>
  );
};

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Medal className="h-7 w-7" />,
      title: "15+ Years Experience",
      description: "Benefit from our decades of manufacturing expertise and industry knowledge."
    },
    {
      icon: <CheckCircle className="h-7 w-7" />,
      title: "Quality Assurance",
      description: "Rigorous quality control at every stage ensures premium finished products."
    },
    {
      icon: <Package className="h-7 w-7" />,
      title: "Low MOQs",
      description: "Flexible minimum order quantities perfect for startups and small brands."
    },
    {
      icon: <Headphones className="h-7 w-7" />,
      title: "Dedicated Support",
      description: "Personal account managers guide you through the entire production process."
    }
  ];

  return (
    <section id="why-us" className="fabric-animate py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Why Choose Us</h2>
          <div className="stitch-line mx-auto w-24 mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Our commitment to quality and service sets us apart in the industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
          
          <div className="order-1 md:order-2">
            <img 
              src="https://images.pexels.com/photos/4614226/pexels-photo-4614226.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
              alt="Clothing manufacturing process" 
              className="rounded-lg shadow-2xl w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
