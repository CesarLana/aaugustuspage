import React, { useState, useEffect } from 'react';
import { Mail, MessageCircle, Send, MapPin, Clock, X, CheckCircle } from 'lucide-react';

interface ContactProps {
  isVisible: boolean;
}

const Contact: React.FC<ContactProps> = ({ isVisible }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    if (isVisible) {
      setIsAnimated(true);
    }
  }, [isVisible]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission with realistic delay
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form submitted:', formData);
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: '', email: '', company: '', message: '' });
    
    // Hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  return (
    <section id="contact" className="py-32 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8">
        <div className={`text-center mb-20 transition-all duration-1000 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-yellow-600 mb-8 tracking-wider text-shadow">
            GET IN TOUCH
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-loose font-light">
            Ready to elevate your brand with AI-powered creativity? Let's start the conversation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className={`transition-all duration-1000 delay-300 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h3 className="font-serif text-3xl text-yellow-600 mb-12 tracking-wide">
              Let's Create Something Extraordinary
            </h3>
            
            <div className="space-y-8">
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-yellow-600/50">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-lg">Email Us</h4>
                  <p className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 cursor-pointer">hello@augustusstudios.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-yellow-600/50">
                  <MessageCircle className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-lg">WhatsApp</h4>
                  <p className="text-gray-400 hover:text-yellow-600 transition-colors duration-300 cursor-pointer">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-6 group">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-yellow-600/50">
                  <Clock className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2 text-lg">Response Time</h4>
                  <p className="text-gray-400">Within 4 hours during business days</p>
                </div>
              </div>
            </div>

            <div className="mt-16 p-8 bg-gradient-to-r from-yellow-600/10 to-yellow-500/10 border border-yellow-600/30 rounded-xl backdrop-blur-sm hover:border-yellow-600/50 transition-all duration-300 transform hover:scale-105">
              <h4 className="text-yellow-600 font-semibold mb-3 text-lg">Fast-Track Your Project</h4>
              <p className="text-gray-300 leading-relaxed">
                Include your brand details, project timeline, and budget range in your message 
                for a more detailed response.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-500 transform ${isAnimated ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label htmlFor="name" className="block text-white font-light mb-3 tracking-wide text-lg">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white transition-all duration-300 backdrop-blur-sm ${
                      focusedField === 'name' 
                        ? 'border-yellow-600 shadow-lg shadow-yellow-600/25 transform scale-105' 
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  />
                  {focusedField === 'name' && (
                    <div className="absolute inset-0 bg-yellow-600/5 rounded-xl pointer-events-none animate-pulse"></div>
                  )}
                </div>
                
                <div className="relative">
                  <label htmlFor="email" className="block text-white font-light mb-3 tracking-wide text-lg">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white transition-all duration-300 backdrop-blur-sm ${
                      focusedField === 'email' 
                        ? 'border-yellow-600 shadow-lg shadow-yellow-600/25 transform scale-105' 
                        : 'border-gray-700 hover:border-gray-600'
                    }`}
                  />
                  {focusedField === 'email' && (
                    <div className="absolute inset-0 bg-yellow-600/5 rounded-xl pointer-events-none animate-pulse"></div>
                  )}
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="company" className="block text-white font-light mb-3 tracking-wide text-lg">
                  Company / Brand
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  onFocus={() => handleFocus('company')}
                  onBlur={handleBlur}
                  className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white transition-all duration-300 backdrop-blur-sm ${
                    focusedField === 'company' 
                      ? 'border-yellow-600 shadow-lg shadow-yellow-600/25 transform scale-105' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                />
                {focusedField === 'company' && (
                  <div className="absolute inset-0 bg-yellow-600/5 rounded-xl pointer-events-none animate-pulse"></div>
                )}
              </div>
              
              <div className="relative">
                <label htmlFor="message" className="block text-white font-light mb-3 tracking-wide text-lg">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={handleBlur}
                  placeholder="Tell us about your project, timeline, and creative vision..."
                  className={`w-full bg-black/50 border-2 rounded-xl px-6 py-4 text-white transition-all duration-300 resize-none backdrop-blur-sm ${
                    focusedField === 'message' 
                      ? 'border-yellow-600 shadow-lg shadow-yellow-600/25 transform scale-105' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                />
                {focusedField === 'message' && (
                  <div className="absolute inset-0 bg-yellow-600/5 rounded-xl pointer-events-none animate-pulse"></div>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-500 text-black font-semibold py-5 rounded-xl hover:from-yellow-500 hover:to-yellow-400 transition-all duration-300 flex items-center justify-center space-x-3 tracking-wide disabled:opacity-50 transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-600/50 text-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin" />
                    <span>SENDING...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>SEND MESSAGE</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 animate-fade-in-up">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-yellow-600/30 rounded-2xl p-8 max-w-md mx-4 text-center transform animate-fade-in-up">
            <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-black" />
            </div>
            <h3 className="text-yellow-600 font-serif text-2xl mb-4">Message Sent!</h3>
            <p className="text-gray-300 mb-6">Thank you for reaching out. We'll get back to you within 4 hours.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-yellow-600 text-black px-6 py-2 rounded-lg hover:bg-yellow-500 transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-yellow-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-600/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;