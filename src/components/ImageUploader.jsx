import React, { useState } from 'react';

const ImageUploader = ({ onImageSelect, fileInputRef }) => {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [error, setError] = useState(null);

  const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB in bytes

  const handleFile = (file) => {
    setError(null); // Reset previous errors
    
    if (!file) {
      setError('Please select a file');
      return;
    }

    if (!file.type.match('image.*')) {
      setError('Please select an image file (JPG, PNG, or WEBP)');
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setError('Image size must be less than 5MB');
      return;
    }

    const url = URL.createObjectURL(file);
    setUploadedImage(url);
    onImageSelect(url);
  };

  const handleFileChange = (e) => {
    handleFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFile(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleRemoveImage = () => {
    if (uploadedImage) {
      URL.revokeObjectURL(uploadedImage); // Free up memory
    }
    setUploadedImage(null);
    onImageSelect(null);
    setError(null);
  };

  return (
    <div className="w-full flex items-center justify-center px-4">
      <div
        className="flex flex-col items-center justify-center text-center bg-cover bg-center bg-no-repeat rounded-lg w-full max-w-5xl min-h-[400px] p-6 relative overflow-hidden"
        style={{ backgroundImage: `url(${uploadedImage || '/background.png'})` }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {!uploadedImage ? (
          <div className="p-8 w-full max-w-2xl z-10">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Enhance Your Images with AI
            </h1>
            <p className="text-white mb-6">
              Transform your photos with our advanced AI technology. Improve clarity, color, and detail with just one click.
            </p>
            <label className="bg-blue-600 text-white font-medium px-6 py-3 rounded-lg cursor-pointer hover:bg-blue-700 transition">
              Upload Image (Max 5MB)
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                ref={fileInputRef}
              />
            </label>
            {error && (
              <p className="mt-4 text-red-600 font-medium">
                {error}
              </p>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={handleRemoveImage}
              className="absolute top-4 right-4 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-2 z-10 shadow-md transition"
              aria-label="Remove image"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src={uploadedImage} 
                alt="Uploaded preview" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;