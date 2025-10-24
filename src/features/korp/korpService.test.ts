import { describe, it, expect, beforeEach, vi } from 'vitest';
import { korpCacheVar } from '../../apolloCache';
import { isLemmaInKorp } from './korpService';
import doesLemmaExist from '../../api';

// Mock the API
vi.mock('../../api');
const mockedDoesLemmaExist = doesLemmaExist as ReturnType<typeof vi.fn>;

describe('korpService', () => {
  beforeEach(() => {
    // Clear cache before each test
    korpCacheVar({});
    vi.clearAllMocks();
  });

  describe('isLemmaInKorp', () => {
    it('should fetch from API when not cached', async () => {
      mockedDoesLemmaExist.mockResolvedValue(true);

      const result = await isLemmaInKorp('sme', 'muorra');

      expect(mockedDoesLemmaExist).toHaveBeenCalledWith('sme', 'muorra');
      expect(result).toBe(true);
    });

    it('should cache the result after fetching', async () => {
      mockedDoesLemmaExist.mockResolvedValue(true);

      await isLemmaInKorp('sme', 'muorra');

      const cache = korpCacheVar();
      expect(cache['sme:muorra']).toBe(true);
    });

    it('should return cached result without API call', async () => {
      // Pre-populate cache
      korpCacheVar({ 'sma:dïhte': false });

      const result = await isLemmaInKorp('sma', 'dïhte');

      expect(mockedDoesLemmaExist).not.toHaveBeenCalled();
      expect(result).toBe(false);
    });

    it('should handle API errors gracefully', async () => {
      mockedDoesLemmaExist.mockRejectedValue(new Error('Network error'));

      const result = await isLemmaInKorp('smj', 'word');

      expect(result).toBe(false);
    });

    it('should cache multiple results', async () => {
      mockedDoesLemmaExist
        .mockResolvedValueOnce(true)
        .mockResolvedValueOnce(false);

      await isLemmaInKorp('sme', 'muorra');
      await isLemmaInKorp('sma', 'dïhte');

      const cache = korpCacheVar();
      expect(cache['sme:muorra']).toBe(true);
      expect(cache['sma:dïhte']).toBe(false);
    });
  });
});
