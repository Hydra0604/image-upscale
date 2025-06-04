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
import Reviews from '../components/Reviews';
import { useUser } from '@clerk/clerk-react';
import { SignInButton, SignOutButton } from '@clerk/clerk-react';
import { ScrollWrapper, Element } from '../components/ScrollWrapper';

import '../assets/styles/App.css';
import '../assets/styles/Components.css';

export default function Home() {
  const [preview, setPreview] = useState(null);
  const [upscaledImage, setUpscaledImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { user } = useUser();
  const isPremium = user?.isPremium || false;
  const [scale, setScale] = useState(2);
  const [fileInputRef, setFileInputRef] = useState(null);

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
    <ScrollWrapper>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Navbar onUploadClick={() => fileInputRef?.current?.click()} />
        <main className="flex-grow">
          <div className="w-full max-w-4xl mx-auto px-4 py-8">
             <Element name="features" className="section">
               {upscaledImage ? (
                 <ResultViewer original={preview} upscaled={upscaledImage} />
               ) : (
                 <>
                   <ImageUploader
                     onImageSelect={(img) => {
                       setPreview(img);
                       setUpscaledImage(null);
                     }}
                     fileInputRef={fileInputRef}
                   />
                   
                   {error && (
                     <div className="error-message bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
                       {error}
                     </div>
                   )}

                   {preview && (
                     <div className="flex flex-col gap-4">
                       <UpscaleControls
                      onUpscale={handleUpscale}
                      scale={scale}
                      setScale={(newScale) => {
                        if (newScale > 2 && !user) {
                          setError('4x upscale is available for signed-in users only. Please sign in to access this feature.');
                          return;
                        }
                        setScale(newScale);
                      }}
                      isLoading={isLoading}
                      isPremium={isPremium}
                      user={user}
                    />
                     </div>
                   )}
                 </>
               )}
             </Element>
            <Element name="before-after" className="section">
              <BeforeAfter />
            </Element>
            <Element name="how-it-works" className="section">
              <HowItWorks />
            </Element>
            <Element name="testimonials" className="section">
              <Testimonials />
            </Element>
          </div>
        </main>
        <Footer />
      </div>
    </ScrollWrapper>
  );
}
