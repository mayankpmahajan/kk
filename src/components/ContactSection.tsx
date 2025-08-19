import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const handleInputChange = (e) => {
    const { id, name, value } = e.target;
    const fieldName = id ? id.replace("contact-", "") : name;
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    try {
      // Using Formspree API
      const response = await fetch("https://formspree.io/f/movlzgnp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          company: formData.company,
          subject: formData.subject,
          message: formData.message,
          _subject: "Contact Form - KK Podcast", // Consistent subject for threading
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({
          name: "",
          email: "",
          company: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Error sending email:", error);

      // Fallback: mailto link (opens user's email client)
      const subject = encodeURIComponent("Contact Form - KK Podcast");
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company}\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:hello@ciodiary.com?subject=${subject}&body=${body}`;

      setSubmitStatus("fallback");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl font-display text-gray-900 mb-4 leading-tight">
            Get in touch
          </h2>
          <p className="text-gray-600 text-lg max-w-lg">
            Interested in being a guest or have something to share? We'd love to
            hear from you.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cG9kY2FzdHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Podcast recording setup"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div>
            {/* Status Messages */}
            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800">
                  Thank you! Your message has been sent successfully.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800">
                  Sorry, there was an error sending your message. Please try
                  again.
                </p>
              </div>
            )}

            {submitStatus === "fallback" && (
              <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-blue-800">
                  Your email client should have opened. If not, please email us
                  directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Input
                    id="contact-name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-3 text-base focus:border-gray-900 bg-transparent"
                  />
                </div>
                <div>
                  <Input
                    id="contact-email"
                    value={formData.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                    required
                    className="border-0 border-b border-gray-300 rounded-none px-0 py-3 text-base focus:border-gray-900 bg-transparent"
                  />
                </div>
              </div>

              <div>
                <Input
                  id="contact-company"
                  value={formData.company}
                  onChange={handleInputChange}
                  placeholder="Company"
                  className="border-0 border-b border-gray-300 rounded-none px-0 py-3 text-base focus:border-gray-900 bg-transparent"
                />
              </div>

              <div>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full border-0 border-b border-gray-300 rounded-none px-0 py-3 text-base focus:border-gray-900 bg-transparent focus:outline-none text-gray-900"
                >
                  <option value="">Subject</option>
                  <option value="guest">Guest opportunity</option>
                  <option value="feedback">Feedback</option>
                  <option value="partnership">Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <Textarea
                  id="contact-message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message"
                  rows={4}
                  required
                  className="border border-gray-300 rounded-none resize-none text-base focus:border-gray-900 bg-transparent p-4"
                />
              </div>

              <div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gray-900 hover:bg-black text-white px-8 py-3 text-base font-normal transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
