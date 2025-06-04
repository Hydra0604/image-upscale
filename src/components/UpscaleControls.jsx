import React from 'react';
import './../assets/styles/Components.css'; // Make sure to import CSS

const UpscaleControls = ({ onUpscale, scale, setScale, isLoading }) => {
  return (
    <div className="controls-container">
      <select value={scale} onChange={(e) => setScale(e.target.value)} disabled={isLoading}>
        <option value="2">2x</option>
        <option value="4">4x</option>
      </select>
      <button onClick={onUpscale} disabled={isLoading}>
        {isLoading ? (
          <>
            <span className="spinner"></span> Processing...
          </>
        ) : (
          'Upscale'
        )}
      </button>
    </div>
  );
};

export default UpscaleControls;