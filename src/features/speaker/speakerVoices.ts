/**
 * Available TTS voices for each Sami language
 */
export const availableVoices: Record<string, string[]> = {
  sme: ["biret", "mahtte", "sunna"],
  smj: ["abmut", "nihkol", "sigga"],
  sma: ["aanna"],
};

/**
 * User-friendly display names for voices
 * Maps API voice names to human-readable names with proper capitalization and special characters
 */
export const voiceDisplayNames: Record<string, string> = {
  biret: "Biret",
  mahtte: "Máhtte",
  sunna: "Sunná",
  abmut: "Ábmut",
  nihkol: "Nihkol",
  sigga: "Siggá",
  aanna: "Aanna",
};

/**
 * Get display name for a voice
 * @param voiceId - API voice identifier
 * @returns User-friendly display name
 */
export const getVoiceDisplayName = (voiceId: string): string => {
  return (
    voiceDisplayNames[voiceId] ||
    voiceId.charAt(0).toUpperCase() + voiceId.slice(1)
  );
};

/**
 * Default voice for each language
 */
export const defaultVoices: Record<string, string> = {
  sme: "biret",
  smj: "abmut",
  sma: "aanna",
};

/**
 * Get the selected voice for a language from localStorage or return default
 */
export const getSelectedVoice = (language: string): string => {
  const storedVoices = localStorage.getItem("ttsVoices");
  if (storedVoices) {
    try {
      const voices = JSON.parse(storedVoices);
      const storedVoice = voices[language];
      // Validate that the stored voice exists in availableVoices
      if (storedVoice && availableVoices[language]?.includes(storedVoice)) {
        return storedVoice;
      }
      return defaultVoices[language];
    } catch (_e) {
      return defaultVoices[language];
    }
  }
  return defaultVoices[language];
};

/**
 * Get all selected voices from localStorage or return defaults
 */
export const getAllSelectedVoices = (): Record<string, string> => {
  const storedVoices = localStorage.getItem("ttsVoices");
  if (storedVoices) {
    try {
      const parsed = JSON.parse(storedVoices);
      const validatedVoices: Record<string, string> = {};

      // Validate each stored voice exists in availableVoices
      for (const language in defaultVoices) {
        const storedVoice = parsed[language];
        if (storedVoice && availableVoices[language]?.includes(storedVoice)) {
          validatedVoices[language] = storedVoice;
        } else {
          validatedVoices[language] = defaultVoices[language];
        }
      }

      return validatedVoices;
    } catch (_e) {
      return defaultVoices;
    }
  }
  return defaultVoices;
};
