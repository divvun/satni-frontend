import { paradigmCacheVar } from '../../apolloCache';
import apolloClient from '../../apolloClient';
import GET_NOUN from '../../operations/queries/getNoun';

interface ParadigmAnalysis {
  wordform: string;
  weight: number;
}

interface ParadigmResult {
  paradigmTemplate: string;
  analyses: ParadigmAnalysis[];
}

interface GeneratedData {
  generated: ParadigmResult[];
}

const createCacheKey = (
  lemma: string,
  language: string,
  paradigmTemplates: string[],
): string => `${language}:${lemma}:${paradigmTemplates.join(',')}`;

/**
 * Check if paradigm data exists for a word with caching
 * @param lemma - The word lemma
 * @param language - Language code
 * @param paradigmTemplates - Array of paradigm templates to generate
 * @returns Promise<ParadigmResult[]> - Generated paradigm data
 */
export const fetchParadigm = async (
  lemma: string,
  language: string,
  paradigmTemplates: string[],
): Promise<ParadigmResult[]> => {
  const cacheKey = createCacheKey(lemma, language, paradigmTemplates);
  const cache = paradigmCacheVar();

  // Return cached result if available
  if (cache[cacheKey] !== undefined) {
    return cache[cacheKey];
  }

  // Fetch from API if not cached
  try {
    const { data } = await apolloClient.query<GeneratedData>({
      query: GET_NOUN,
      variables: {
        origform: lemma,
        language,
        paradigmTemplates,
      },
    });

    const result = data?.generated || [];

    // Update cache
    paradigmCacheVar({
      ...cache,
      [cacheKey]: result,
    });

    return result;
  } catch (err) {
    console.error('Error fetching paradigm:', err);
    return [];
  }
};

/**
 * Check if paradigm exists (for button display)
 * @param lemma - The word lemma
 * @param language - Language code
 * @param paradigmTemplates - Array of paradigm templates to check (usually just first one)
 * @returns Promise<boolean> - Whether paradigm data exists
 */
export const hasParadigm = async (
  lemma: string,
  language: string,
  paradigmTemplates: string[],
): Promise<boolean> => {
  const result = await fetchParadigm(lemma, language, paradigmTemplates);
  return result.length > 0;
};
