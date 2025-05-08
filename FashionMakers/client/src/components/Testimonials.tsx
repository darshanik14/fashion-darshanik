import React from "react";
import { Star } from "lucide-react";

interface TestimonialProps {
  rating: number;
  text: string;
  avatar: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ rating, text, avatar, name, title }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-accent text-accent" />);
    }
    
    if (hasHalfStar) {
      stars.push(
        <div key="half-star" className="relative">
          <Star className="h-4 w-4 text-accent" />
          <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
            <Star className="h-4 w-4 fill-accent text-accent" />
          </div>
        </div>
      );
    }
    
    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-star-${i}`} className="h-4 w-4 text-accent" />);
    }
    
    return stars;
  };

  return (
    <div className="bg-primary p-6 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="flex items-center mb-4">
        <div className="text-accent flex">
          {renderStars()}
        </div>
      </div>
      <p className="text-gray-300 italic mb-6">
        {text}
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-primary font-bold">
          {avatar}
        </div>
        <div className="ml-4">
          <h4 className="font-bold">{name}</h4>
          <p className="text-sm text-gray-400">{title}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      rating: 5,
      text: "Darshanik Apparels transformed our concept into a full-fledged clothing line. Their attention to detail and quality craftsmanship exceeded our expectations.",
      avatar: "MS",
      name: "Maria Smith",
      title: "Fashion Startup Founder"
    },
    {
      rating: 5,
      text: "The team at Darshanik worked closely with us to perfect our designs and manufacturing process. Their flexibility with our small initial orders was crucial to our growth.",
      avatar: "JD",
      name: "James Davis",
      title: "Streetwear Brand Owner"
    },
    {
      rating: 4.5,
      text: "As an influencer launching my first merch line, I needed guidance through the whole process. Darshanik provided exactly that and delivered outstanding quality products.",
      avatar: "AK",
      name: "Aisha Khan",
      title: "Content Creator"
    }
  ];

  return (
    <section id="testimonials" className="bg-primary-light py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">What Our Clients Say</h2>
          <div className="stitch-line mx-auto w-24 mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            We've helped numerous brands bring their vision to reality.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              rating={testimonial.rating}
              text={testimonial.text}
              avatar={testimonial.avatar}
              name={testimonial.name}
              title={testimonial.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
