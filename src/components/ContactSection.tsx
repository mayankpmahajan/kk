
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-podcast-lightGray">
      <div className="container px-4 md:px-6 mx-auto max-w-2xl">
        <div className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-podcast-navy mb-6">
              Contact
            </h2>
            <p className="text-podcast-gray mb-6">
              Have a question, idea, or feedback? Reach out directly to KK using the form below.
            </p>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-podcast-gray mb-1">
                    Name
                  </label>
                  <Input id="contact-name" placeholder="Your full name" />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-podcast-gray mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email address" />
                </div>
                
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-podcast-gray mb-1">
                    Message
                  </label>
                  <Textarea id="contact-message" placeholder="Your message" rows={6} />
                </div>
              </div>
              
              <Button type="submit" className="w-full bg-podcast-blue hover:bg-podcast-navy">
                Send Message
              </Button>
            </form>
          </div>
      </div>
    </section>
  );
};

export default ContactSection;
