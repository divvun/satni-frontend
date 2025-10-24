import { getSelectedVoice } from './speakerVoices';

const TTS_API_BASE = 'https://api-giellalt.uit.no/tts';

/**
 * Fetch TTS audio from GiellaLT API
 * @param text - Text to convert to speech
 * @param language - Language code (se, sma, smj)
 * @param voice - Optional voice name, if not provided uses selected voice
 * @returns URL to the audio blob or null if error
 */
export const fetchTTSAudio = async (
  text: string,
  language: string,
  voice: string | null = null,
): Promise<string | null> => {
  // Map language codes to API language codes
  const langMap: Record<string, string> = {
    sme: 'se',
    smj: 'smj',
    sma: 'sma',
  };

  const apiLang = langMap[language];

  // If language not supported by TTS API, return null
  if (!apiLang) {
    return null;
  }

  // Get the selected voice for this language if not provided
  const selectedVoice = voice || getSelectedVoice(language);

  try {
    const response = await fetch(
      `${TTS_API_BASE}/${apiLang}/${selectedVoice}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'audio/mpeg', // Request MP3 format
        },
        body: JSON.stringify({ text }),
      },
    );

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
 * @param language - Language code
 * @returns boolean indicating TTS availability
 */
export const isTTSAvailable = (language: string): boolean => {
  const supportedLanguages = ['sme', 'smj', 'sma'];
  return supportedLanguages.includes(language);
};
