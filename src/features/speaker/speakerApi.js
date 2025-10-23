const TTS_API_BASE = 'https://api-giellalt.uit.no/tts';

/**
 * Fetch TTS audio from GiellaLT API
 * @param {string} text - Text to convert to speech
 * @param {string} language - Language code (se, sma, smj)
 * @returns {Promise<string>} - URL to the audio blob or null if error
 */
export const fetchTTSAudio = async (text, language) => {
  // Map language codes to API language codes
  const langMap = {
    sme: 'se',
    smj: 'smj',
    sma: 'sma',
  };

  const apiLang = langMap[language];

  // If language not supported by TTS API, return null
  if (!apiLang) {
    return null;
  }

  try {
    const response = await fetch(`${TTS_API_BASE}/${apiLang}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'audio/mpeg', // Request MP3 format
      },
      body: JSON.stringify({ text }),
    });

    if (!response.ok) {
      console.error('TTS API error:', response.status);
      return null;
    }

    // Get the MP3 audio as a blob
    const audioBlob = await response.blob();

    // Create a URL for the blob
    const audioUrl = URL.createObjectURL(audioBlob);

    return audioUrl;
  } catch (error) {
    console.error('Error fetching TTS audio:', error);
    return null;
  }
};

/**
 * Check if TTS is available for a given language
 * @param {string} language - Language code
 * @returns {boolean}
 */
export const isTTSAvailable = (language) => {
  const supportedLanguages = ['sme', 'smj', 'sma'];
  return supportedLanguages.includes(language);
};
