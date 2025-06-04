import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Support</h1>
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-medium">How does the image enhancement work?</h3>
                  <p className="text-gray-600 mt-2">Our AI algorithms analyze your image and apply intelligent enhancements to improve clarity, color, and detail while preserving the original quality.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium">What file formats are supported?</h3>
                  <p className="text-gray-600 mt-2">We support JPG, PNG, and WEBP file formats. The maximum file size is 5MB for free users and 10MB for premium users.</p>
                </div>
                <div className="border-b pb-4">
                  <h3 className="font-medium">How long does it take to enhance an image?</h3>
                  <p className="text-gray-600 mt-2">Processing time varies depending on the image size and complexity, but typically takes less than a minute.</p>
                </div>
                <div>
                  <h3 className="font-medium">Can I use the enhanced images commercially?</h3>
                  <p className="text-gray-600 mt-2">Yes, you can use the enhanced images for any purpose. Premium users receive enhanced images without watermarks.</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-2xl font-semibold mb-4">Contact Support</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name</label>
                  <input type="text" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input type="email" className="w-full p-2 border rounded-md" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Message</label>
                  <textarea className="w-full p-2 border rounded-md h-32" />
                </div>
                <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Support;
