/**
 * Upscales an image using PicsArt API
 * @param {File} imageFile - The image file to upscale
 * @param {number} [scaleFactor=2] - Upscale factor (1-4)
 * @param {string} [format='JPG'] - Output format (JPG or PNG)
 * @returns {Promise<{url: string, blob: Blob, blobUrl: string}>} - Result with URL, Blob and object URL
 * @throws {Error} If the API request fails
 */
export const upscaleImage = async (imageFile, scaleFactor = 2, format = 'JPG') => {
  // Use environment variable or fallback to hardcoded key for testing
  const apiKey = import.meta.env.VITE_PICSART_API_KEY;

  const formData = new FormData();
  formData.append('image', imageFile);
  formData.append('upscale_factor', scaleFactor.toString());
  formData.append('format', format);
  formData.append('mode', 'sync');  // Add mode parameter

  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'X-Picsart-API-Key': apiKey.trim()
    },
    body: formData
  };

  try {
    // Using the ultra endpoint
    const response = await fetch('https://api.picsart.io/tools/1.0/upscale/ultra', options);
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      console.error('API Error:', {
        status: response.status,
        error: errorData
      });
      throw new Error(errorData.message || `API request failed (${response.status})`);
    }

    const result = await response.json();
    
    if (!result.data?.url) {
      throw new Error('API did not return an image URL');
    }

    // Download the processed image
    const imageResponse = await fetch(result.data.url);
    if (!imageResponse.ok) {
      throw new Error(`Failed to download upscaled image (${imageResponse.status})`);
    }
    
    const imageBlob = await imageResponse.blob();
    const blobUrl = URL.createObjectURL(imageBlob);
    
    return {
      originalUrl: result.data.url,
      previewUrl: result.data.url, // Use original URL for better compatibility
      blob: imageBlob
    };
    
  } catch (error) {
    console.error('Upscale Error:', error);
    
    // Convert specific errors to user-friendly messages
    if (error.message.includes('Failed to fetch')) {
      throw new Error('Network error - please check your connection');
    }
    if (error.message.includes('401')) {
      throw new Error('Invalid API key - please check your configuration');
    }
    
    throw new Error(error.message || 'Image upscaling failed');
  }
};

/**
 * Quick validation for the API key
 */
export const validateApiKey = () => {
  const key = import.meta.env.VITE_PICSART_API_KEY;
  return key && key.startsWith('eyJ') && key.length > 100;
};

// Initial validation log
console.log('PicsArt API:', validateApiKey() ? 'Configured' : 'Using fallback key');