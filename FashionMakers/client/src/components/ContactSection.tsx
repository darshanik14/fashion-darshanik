import React, { useState } from "react";
import { MapPin, Mail, Phone, Clock, Instagram, Facebook, Linkedin, Twitter } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  company: z.string().optional(),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactSection: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    // Simulate form submission (static site)
    setTimeout(() => {
      toast({
        title: "Message Received!",
        description: "Thank you for your message. We will get back to you soon.",
        variant: "default",
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="bg-primary py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Get In Touch</h2>
          <div className="stitch-line mx-auto w-24 mb-8"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Ready to start your clothing line? Contact us for a free consultation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-primary-light p-8 rounded-lg shadow-xl">
            <h3 className="text-2xl font-serif font-bold mb-6">Send Us a Message</h3>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name"
                            className="bg-primary border border-gray-600 text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-medium text-gray-300">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="your@email.com"
                            className="bg-primary border border-gray-600 text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Phone</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your phone number"
                          className="bg-primary border border-gray-600 text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Company/Brand</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Your company or brand name"
                          className="bg-primary border border-gray-600 text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-300">Message</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project"
                          rows={4}
                          className="bg-primary border border-gray-600 text-white placeholder-gray-400 focus:ring-accent focus:border-accent"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-accent text-primary font-semibold py-3 px-6 rounded-md transition-all duration-300 hover:bg-accent-light transform hover:-translate-y-1"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
          
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="text-accent text-xl mr-4">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Location</h4>
                    <p className="text-gray-300">Tiruppur, Tamil Nadu, India</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-xl mr-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-300">darshanikdhanasekeran@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-xl mr-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-300">+91 7550319258</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="text-accent text-xl mr-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-bold">Working Hours</h4>
                    <p className="text-gray-300">Monday - Saturday: 9AM - 6PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <h3 className="text-2xl font-serif font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-gray-300 hover:text-accent transition-colors duration-300">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-gray-300 hover:text-accent transition-colors duration-300">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-gray-300 hover:text-accent transition-colors duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary-light flex items-center justify-center text-gray-300 hover:text-accent transition-colors duration-300">
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </div>
            
            <div className="mt-8 relative rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/4620623/pexels-photo-4620623.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" 
                alt="Clothing manufacturing detail" 
                className="w-full h-auto rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="text-xl font-serif font-bold">Quality Craftsmanship</h4>
                <p className="text-sm text-gray-300">Every stitch reflects our commitment to excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
