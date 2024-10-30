import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="animate-fadeIn">
      <h2 className="text-3xl font-bold text-green-500 mb-8">Get In Touch</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-500/20 text-green-500">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-green-400">Email</h3>
                <p className="text-gray-400">contact@example.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-500/20 text-green-500">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-green-400">Phone</h3>
                <p className="text-gray-400">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="p-3 rounded-lg bg-green-500/20 text-green-500">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-green-400">Location</h3>
                <p className="text-gray-400">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-gray-800 rounded-lg border border-green-500/30">
            <h3 className="text-xl font-bold text-green-400 mb-4">Office Hours</h3>
            <div className="space-y-2 text-gray-300">
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 border border-green-500/30 rounded-lg focus:outline-none focus:border-green-500 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2 bg-gray-800 border border-green-500/30 rounded-lg focus:outline-none focus:border-green-500 text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={4}
              className="w-full px-4 py-2 bg-gray-800 border border-green-500/30 rounded-lg focus:outline-none focus:border-green-500 text-white resize-none"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors flex items-center justify-center space-x-2 group"
          >
            <span>Send Message</span>
            <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </form>
      </div>
    </div>
  );
}