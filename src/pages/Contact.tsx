import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { Button } from '../components/Button';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the message to a backend
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-16">
      <section className="text-center space-y-4 bg-gradient-to-br from-pink-600 to-purple-700 text-white rounded-2xl p-12">
        <h1 className="text-4xl font-bold">Contact Us</h1>
        <p className="text-xl opacity-90">
          We're here to help and answer any questions you might have
        </p>
      </section>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center gap-4 mb-6">
            <Mail className="w-8 h-8 text-pink-500" />
            <div>
              <h3 className="text-xl font-semibold">Email Support</h3>
              <p className="text-gray-600">Get in touch with our support team</p>
            </div>
          </div>
          <a 
            href="mailto:support@connectioncompass.com" 
            className="text-pink-600 hover:text-pink-700 font-medium"
          >
            support@connectioncompass.com
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-8">
          {submitted ? (
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                <Send className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold">Message Sent!</h3>
              <p className="text-gray-600">
                Thank you for reaching out. We'll get back to you as soon as possible.
              </p>
              <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                  />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}