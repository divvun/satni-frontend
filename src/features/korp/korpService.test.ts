import { beforeEach, describe, expect, it, vi } from 'vitest';
import { korpCacheVar } from '../../apolloCache';
import apolloClient from '../../apolloClient';
import { isLemmaInKorp } from './korpService';

// Mock Apollo Client
vi.mock('../../apolloClient', () => ({
  default: {
    query: vi.fn(),
  },
}));

const mockedApolloClient = apolloClient as any;

describe('korpService', () => {
  beforeEach(() => {
    // Clear cache before each test
    korpCacheVar({});
    vi.clearAllMocks();
  });

  describe('isLemmaInKorp', () => {
    it('should fetch from API when not cached', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: { korpLemmaExists: true },
      });

      const result = await isLemmaInKorp('sme', 'muorra');

      expect(mockedApolloClient.query).toHaveBeenCalledWith({
        query: expect.any(Object),
        variables: { language: 'sme', lemma: 'muorra' },
      });
      expect(result).toBe(true);
    });

    it('should cache the result after fetching', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: { korpLemmaExists: true },
      });

      await isLemmaInKorp('sme', 'muorra');

      const cache = korpCacheVar();
      expect(cache['sme:muorra']).toBe(true);
    });

    it('should return cached result without API call', async () => {
      // Pre-populate cache
      korpCacheVar({ 'sma:dïhte': false });

      const result = await isLemmaInKorp('sma', 'dïhte');

      expect(mockedApolloClient.query).not.toHaveBeenCalled();
      expect(result).toBe(false);
    });

    it('should handle API errors gracefully', async () => {
      mockedApolloClient.query.mockRejectedValue(new Error('Network error'));

      const result = await isLemmaInKorp('smj', 'word');

      expect(result).toBe(false);
    });

    it('should cache multiple results', async () => {
      mockedApolloClient.query
        .mockResolvedValueOnce({ data: { korpLemmaExists: true } })
        .mockResolvedValueOnce({ data: { korpLemmaExists: false } });

      await isLemmaInKorp('sme', 'muorra');
      await isLemmaInKorp('sma', 'dïhte');

      const cache = korpCacheVar();
      expect(cache['sme:muorra']).toBe(true);
      expect(cache['sma:dïhte']).toBe(false);
    });
  });
});
