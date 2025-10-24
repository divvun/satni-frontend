import { korpCacheVar } from '../../apolloCache';
import doesLemmaExist from '../../api';

const createCacheKey = (language: string, lemma: string): string =>
  `${language}:${lemma}`;

/**
 * Check if a lemma exists in Korp corpus with caching
 * @param language - Language code (sma, sme, smj, smn, sms)
 * @param lemma - The lemma to search for
 * @returns Promise<boolean> - Whether the lemma exists in the corpus
 */
export const isLemmaInKorp = async (
  language: string,
  lemma: string,
): Promise<boolean> => {
  const cacheKey = createCacheKey(language, lemma);
  const cache = korpCacheVar();

  // Return cached result if available
  if (cache[cacheKey] !== undefined) {
    return cache[cacheKey];
  }

  // Fetch from API if not cached
  try {
    const exists = await doesLemmaExist(language, lemma);

    // Update cache
    korpCacheVar({
      ...cache,
      [cacheKey]: exists,
    });

    return exists;
  } catch (err) {
    console.error('Error checking lemma in Korp:', err);
    return false;
  }
};
