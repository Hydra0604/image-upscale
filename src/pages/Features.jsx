import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Features</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">AI-Powered Enhancement</h2>
              <p className="text-gray-600 mb-4">Our advanced AI algorithms automatically enhance your photos with improved clarity, color, and detail.</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Automatic color correction</li>
                <li>✓ Noise reduction</li>
                <li>✓ Detail enhancement</li>
                <li>✓ Smart sharpening</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">4x Upscaling</h2>
              <p className="text-gray-600 mb-4">Premium users can upscale their photos by 4x while maintaining quality and detail.</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Preserve image quality</li>
                <li>✓ Maintain natural details</li>
                <li>✓ Fast processing</li>
                <li>✓ Premium feature</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Before & After Preview</h2>
              <p className="text-gray-600 mb-4">Compare your original and enhanced images side by side to see the difference.</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Side-by-side comparison</li>
                <li>✓ Zoom in/out capability</li>
                <li>✓ Smooth transitions</li>
                <li>✓ Export options</li>
              </ul>
            </div>
            <div className="p-6 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-4">Easy to Use</h2>
              <p className="text-gray-600 mb-4">Simple and intuitive interface that anyone can use without technical knowledge.</p>
              <ul className="space-y-2 text-gray-600">
                <li>✓ Drag and drop support</li>
                <li>✓ One-click enhancement</li>
                <li>✓ Clear instructions</li>
                <li>✓ Quick processing</li>
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
