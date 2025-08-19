import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    const fieldName = id.replace('contact-', '');
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Option 1: Formspree (easiest setup)
      const response = await fetch('https://formspree.io/f/movlzgnp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: 'Contact Form - KK Podcast', // Consistent subject for threading
          _replyto: formData.email
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      
      // Fallback: mailto link (opens user's email client)
      const subject = encodeURIComponent('Contact Form - KK Podcast');
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:your-email@example.com?subject=${subject}&body=${body}`;
      
      setSubmitStatus('fallback');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto max-w-2xl">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Contact
          </h2>
          <p className="text-gray-600 mb-6">
            Have a question, idea, or feedback? Reach out directly to KK using the form below.
          </p>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">Thank you! Your message has been sent successfully.</p>
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-red-800">Sorry, there was an error sending your message. Please try again.</p>
            </div>
          )}

          {submitStatus === 'fallback' && (
            <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-blue-800">Your email client should have opened. If not, please email us directly.</p>
            </div>
          )}
          
          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <Input 
                  id="contact-name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name" 
                />
              </div>
              
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input 
                  id="contact-email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Your email address" 
                />
              </div>
              
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <Textarea 
                  id="contact-message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message" 
                  rows={6} 
                />
              </div>
            </div>
            
            <Button 
              onClick={handleSubmit}
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting || !formData.name || !formData.email || !formData.message}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;