import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Pricing</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4 text-center">Free</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4 text-center">$0</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 2x Image Enhancement</li>
                <li>✓ 5MB File Size Limit</li>
                <li>✓ Basic Features</li>
                <li><s>✓ 4x Upscaling</s></li>
                <li><s>✓ Priority Support</s></li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
                Get Started
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4 text-center">Premium</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4 text-center">$9.99/month</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ 2x Image Enhancement</li>
                <li>✓ 4x Image Enhancement</li>
                <li>✓ 10MB File Size Limit</li>
                <li>✓ Priority Support</li>
                <li>✓ No Watermarks</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
                Start Free Trial
              </button>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4 text-center">Enterprise</h2>
              <p className="text-3xl font-bold text-blue-600 mb-4 text-center">Contact Us</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Everything in Premium</li>
                <li>✓ Custom Solutions</li>
                <li>✓ Dedicated Support</li>
                <li>✓ API Access</li>
                <li>✓ Bulk Processing</li>
              </ul>
              <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg mt-4 hover:bg-blue-700">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
