import { korpCacheVar } from '../../apolloCache';
import apolloClient from '../../apolloClient';
import { GET_KORP_LEMMA_EXISTS } from '../../operations/queries/getKorpLemmaExists';

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

  // Fetch from satni-backend (which caches the upstream Korp lookup) if not cached
  try {
    const { data } = await apolloClient.query({
      query: GET_KORP_LEMMA_EXISTS,
      variables: { language, lemma },
    });

    const exists = data?.korpLemmaExists ?? false;

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
