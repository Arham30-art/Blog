'use client'
import { buttonVariants } from '@/components/ui/button';
import React,{ useState } from 'react';

const Contact = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // State to store success/error message
  const [status, setStatus] = useState('');

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('Please fill in all fields.');
      return;
    }

    // In a real-world application, you can integrate an API for form submission here

    // If submission is successful
    setStatus('Message sent successfully! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white dark:bg-gray-800 shadow-xl rounded-3xl p-8 text-center">
        {/* Contact Form Title */}
        <h1 className="text-4xl font-extrabold text-pink-600 mb-6">
          Get in Touch
        </h1>

        {/* Status Message */}
        {status && (
          <div
            className={`mb-4 p-2 text-white ${
              status.includes('success') ? 'bg-green-500' : 'bg-red-500'
            } rounded-md`}
          >
            {status}
          </div>
        )}

        {/* Contact Form */}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows="4"
            ></textarea>
          </div>

          <button
            type="submit"
            className={`${buttonVariants({ variant: 'outline' })} w-full p-3 text-lg font-semibold bg-pink-500 text-white rounded-lg`}
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
