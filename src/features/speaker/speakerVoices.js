/**
 * Available TTS voices for each Sami language
 */
export const availableVoices = {
  sme: ['biret', 'mahtte', 'sunna'],
  smj: ['abmut', 'nihkol', 'sigga'],
  sma: ['aanna'],
};

/**
 * Default voice for each language
 */
export const defaultVoices = {
  sme: 'biret',
  smj: 'abmut',
  sma: 'aanna',
};

/**
 * Get the selected voice for a language from localStorage or return default
 */
export const getSelectedVoice = (language) => {
  const storedVoices = localStorage.getItem('ttsVoices');
  if (storedVoices) {
    try {
      const voices = JSON.parse(storedVoices);
      return voices[language] || defaultVoices[language];
    } catch (e) {
      return defaultVoices[language];
    }
  }
  return defaultVoices[language];
};

/**
 * Get all selected voices from localStorage or return defaults
 */
export const getAllSelectedVoices = () => {
  const storedVoices = localStorage.getItem('ttsVoices');
  if (storedVoices) {
    try {
      return { ...defaultVoices, ...JSON.parse(storedVoices) };
    } catch (e) {
      return defaultVoices;
    }
  }
  return defaultVoices;
};
