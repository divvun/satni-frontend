import { ttsCacheVar } from "../../apolloCache";
import { fetchTTSAudio, isTTSAvailable } from "./speakerApi";

const createCacheKey = (
  text: string,
  language: string,
  voice: string | null,
): string => `${language}:${voice || "default"}:${text}`;

/**
 * Fetch TTS audio with caching
 * @param text - Text to convert to speech
 * @param language - Language code (sme, sma, smj)
 * @param voice - Optional voice name
 * @returns Promise<string | null> - URL to the audio blob or null if error
 */
export const fetchCachedTTSAudio = async (
  text: string,
  language: string,
  voice: string | null = null,
): Promise<string | null> => {
  // Check if TTS is available for this language
  if (!isTTSAvailable(language)) {
    return null;
  }

  const cacheKey = createCacheKey(text, language, voice);
  const cache = ttsCacheVar();

  // Return cached result if available
  if (cache[cacheKey] !== undefined) {
    return cache[cacheKey];
  }

  // Fetch from API if not cached
  try {
    const audioUrl = await fetchTTSAudio(text, language, voice);

    // Only cache successful results
    if (audioUrl) {
      ttsCacheVar({
        ...cache,
        [cacheKey]: audioUrl,
      });
    }

    return audioUrl;
  } catch (err) {
    console.error("Error fetching TTS audio:", err);
    return null;
  }
};
