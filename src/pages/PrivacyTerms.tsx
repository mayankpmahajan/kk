import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const PrivacyTerms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Privacy Policy & Terms of Use"
        description="Read our privacy policy and terms of use for The CIO Diary podcast. We're committed to protecting your personal information and data."
        keywords="privacy policy, terms of use, data protection, GDPR compliance"
        canonicalUrl="https://theciodiary.com/privacy-terms"
      />
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="max-w-4xl mx-auto prose prose-lg">
            {/* Privacy Policy Section */}
            <section className="mb-16">
              <h1 className="text-4xl font-display font-bold text-podcast-navy mb-8">Privacy Policy</h1>
              
              <p className="text-gray-600 mb-6"><strong>Effective Date:</strong> 21 July 2025</p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6">
                At The CIO Diary, accessible via https://theciodiary.com, we respect your privacy and are committed to protecting your personal information in accordance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">What Information We Collect</h2>
              <p className="text-gray-700 mb-4">We may collect and process the following types of information:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, and any details you voluntarily provide via forms (such as contact forms, guest application forms, or newsletter subscriptions).</li>
                <li><strong>Technical Data:</strong> IP address, browser type, and website usage data collected through cookies and analytics tools.</li>
                <li><strong>Podcast Participation Data:</strong> Information shared during the course of podcast guest participation.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">How We Use Your Information</h2>
              <p className="text-gray-700 mb-4">Your information is processed for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>To share podcast episodes, newsletters, and updates;</li>
                <li>To respond to enquiries and guest applications;</li>
                <li>To improve the website's experience and functionality;</li>
                <li>To comply with legal obligations.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Legal Basis for Processing</h2>
              <p className="text-gray-700 mb-4">We process your personal data on one or more of the following legal grounds:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li><strong>Consent:</strong> For sending newsletters and podcast-related updates;</li>
                <li><strong>Legitimate Interests:</strong> To operate, develop, and improve The CIO Diary platform;</li>
                <li><strong>Contractual Obligation:</strong> Where necessary, such as podcast guest participation.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Data Sharing</h2>
              <p className="text-gray-700 mb-4">
                We do not sell or trade your personal data. However, your information may be shared with trusted third-party service providers, including:
              </p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Email marketing platforms (such as Mailchimp or ConvertKit);</li>
                <li>Podcast distribution services (such as Spotify or Apple Podcasts);</li>
                <li>Website analytics services (such as Google Analytics).</li>
              </ul>
              <p className="text-gray-700 mb-6">All service providers we use are UK GDPR compliant.</p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">In accordance with the UK GDPR, you have the following rights:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>The right to access, rectify, or delete your personal data;</li>
                <li>The right to withdraw consent at any time;</li>
                <li>The right to object to processing;</li>
                <li>The right to request data portability;</li>
                <li>The right to lodge a complaint with the Information Commissioner's Office (ICO) via <a href="https://ico.org.uk" className="text-podcast-purple hover:text-podcast-lightPurple">https://ico.org.uk</a>.</li>
              </ul>
              <p className="text-gray-700 mb-6">
                To exercise any of these rights, you can contact us at <a href="mailto:hello@theciodiary.com" className="text-podcast-purple hover:text-podcast-lightPurple">hello@theciodiary.com</a>.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Data Retention</h2>
              <p className="text-gray-700 mb-6">
                We will only retain your personal data for as long as necessary for the purposes outlined above. You can request data deletion at any time by contacting us.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions regarding this Privacy Policy, please contact us at:
              </p>
              <div className="text-gray-700 mb-8">
                <p><strong>Email:</strong> <a href="mailto:hello@theciodiary.com" className="text-podcast-purple hover:text-podcast-lightPurple">hello@theciodiary.com</a></p>
                <p><strong>Address:</strong> The CIO Diary, East London, United Kingdom</p>
              </div>
            </section>

            {/* Terms of Use Section */}
            <section>
              <h1 className="text-4xl font-display font-bold text-podcast-navy mb-8">Terms of Use</h1>
              
              <p className="text-gray-600 mb-6"><strong>Effective Date:</strong> 21 July 2025</p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Introduction</h2>
              <p className="text-gray-700 mb-6">
                Welcome to The CIO Diary. By accessing or using https://theciodiary.com, you agree to comply with and be bound by the following Terms of Use.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">1. Content Ownership</h2>
              <p className="text-gray-700 mb-4">
                All content published on this website, including podcast episodes, blog articles, and downloadable resources, is owned by The CIO Diary.
              </p>
              <p className="text-gray-700 mb-4">You are permitted to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Access, listen to, and share publicly available content for personal use.</li>
              </ul>
              <p className="text-gray-700 mb-4">You are not permitted to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Reproduce, modify, or redistribute content for commercial purposes without prior written permission.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">2. Podcast Guest Participation</h2>
              <p className="text-gray-700 mb-4">If you participate as a podcast guest, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 mb-6 space-y-2">
                <li>Allow the public distribution of recorded episodes;</li>
                <li>Accept minor editorial adjustments for clarity or length without altering the context or meaning of your contributions;</li>
                <li>Request withdrawal of consent for publication only under exceptional circumstances by contacting <a href="mailto:hello@theciodiary.com" className="text-podcast-purple hover:text-podcast-lightPurple">hello@theciodiary.com</a>.</li>
              </ul>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">3. Newsletter Subscription</h2>
              <p className="text-gray-700 mb-6">
                By subscribing to our newsletter, you agree to receive periodic updates from The CIO Diary. You can unsubscribe at any time via the unsubscribe link included in each email.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">4. Limitation of Liability</h2>
              <p className="text-gray-700 mb-6">
                All content on this website, including opinions expressed in podcast episodes and articles, is for informational purposes only. The CIO Diary does not provide professional advice and accepts no liability for actions taken based on its content.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">5. Amendments to Terms</h2>
              <p className="text-gray-700 mb-6">
                We reserve the right to update or modify these Terms of Use at any time. Continued use of the website after such changes signifies your acceptance of the revised terms.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">6. Governing Law</h2>
              <p className="text-gray-700 mb-6">
                These Terms of Use are governed by and construed in accordance with the laws of England and Wales. Any disputes arising shall be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
              
              <h2 className="text-2xl font-bold text-podcast-navy mt-8 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-6">
                For any questions related to these Terms of Use, you can contact us at:
              </p>
              <div className="text-gray-700">
                <p><strong>Email:</strong> <a href="mailto:hello@theciodiary.com" className="text-podcast-purple hover:text-podcast-lightPurple">hello@theciodiary.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyTerms;