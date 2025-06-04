import React, { useState } from 'react';
import ImageUploader from '../components/ImageUploader';
import UpscaleControls from '../components/UpscaleControls';
import ResultViewer from '../components/ResultViewer';
import { upscaleImage } from '../services/picsartApi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BeforeAfter from '../components/BeforeAfter';
import HowItWorks from '../components/HowItWorks';
import Testimonials from '../components/Testimonials';


import '../assets/styles/App.css';
import '../assets/styles/Components.css';

const Home = () => {
  const [preview, setPreview] = useState(null);
  const [upscaledImage, setUpscaledImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [scale, setScale] = useState(2);

  const handleUpscale = async () => {
    if (!preview) return;

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(preview);
      const blob = await response.blob();
      const file = new File([blob], 'image.jpg', { type: blob.type });

      const result = await upscaleImage(file, scale);
      
      // Validate the result
      if (!result || !result.previewUrl) {
        throw new Error('Failed to process image. Please try again.');
      }
      
      setUpscaledImage(result);
    } catch (error) {
      setError(error.message || 'Failed to upscale image. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section (Uploader with background) */}
        
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          {upscaledImage ? (
            <ResultViewer original={preview} upscaled={upscaledImage} />
          ) : (
            <>
              <ImageUploader
                onImageSelect={(img) => {
                  setPreview(img);
                  setUpscaledImage(null);
                }}
              />
              
              {error && (
                <div className="error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                  {error}
                </div>
              )}

              {preview && (
                <UpscaleControls
                  onUpscale={handleUpscale}
                  scale={scale}
                  setScale={setScale}
                  isLoading={isLoading}
                />
              )}
            </>
          )}
        <BeforeAfter />
        <HowItWorks />
        <Testimonials />
        </div>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
