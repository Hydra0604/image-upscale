import React from 'react';
import '../assets/styles/ResultViewer.css';

const ResultViewer = ({ original, upscaled }) => {
  if (!upscaled || !upscaled.previewUrl) {
    return null;
  }
  const handleDownload = async () => {
    if (!upscaled || !upscaled.originalUrl) return;

    try {
      // Use the original URL for downloading
      const response = await fetch(upscaled.originalUrl);
      const blob = await response.blob();

      // Create temporary download link
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `upscaled-image-${Date.now()}.jpg`; // Change extension if needed
      document.body.appendChild(a);
      a.click();

      // Cleanup
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  return (
    <div className="results-container">
      {original && (
        <div className="image-box">
          <h3>Original</h3>
          <img src={original} alt="Original" />
        </div>
      )}
      {upscaled && (
        <div className="image-box">
          <h3>Upscaled</h3>
          <div className="image-container">
            <img src={upscaled.previewUrl} alt="Upscaled" />
            <p className="url-text">{upscaled.originalUrl}</p>
          </div>
          <button onClick={handleDownload} className="download-button">
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default ResultViewer;
