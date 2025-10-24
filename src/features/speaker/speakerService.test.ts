import { describe, it, expect, beforeEach, vi } from 'vitest';
import { ttsCacheVar } from '../../apolloCache';
import { fetchCachedTTSAudio } from './speakerService';
import { fetchTTSAudio } from './speakerApi';

// Mock the API
vi.mock('./speakerApi');
const mockedFetchTTSAudio = fetchTTSAudio as ReturnType<typeof vi.fn>;

describe('speakerService', () => {
  beforeEach(() => {
    // Clear cache before each test
    ttsCacheVar({});
    vi.clearAllMocks();
  });

  describe('fetchCachedTTSAudio', () => {
    it('should fetch from API when not cached', async () => {
      mockedFetchTTSAudio.mockResolvedValue('blob:http://example.com/audio');

      const result = await fetchCachedTTSAudio('mun', 'sme');

      expect(mockedFetchTTSAudio).toHaveBeenCalledWith('mun', 'sme', null);
      expect(result).toBe('blob:http://example.com/audio');
    });

    it('should cache the result after fetching', async () => {
      mockedFetchTTSAudio.mockResolvedValue('blob:http://example.com/audio');

      await fetchCachedTTSAudio('mun', 'sme');

      const cache = ttsCacheVar();
      expect(cache['sme:default:mun']).toBe('blob:http://example.com/audio');
    });

    it('should return cached result without API call', async () => {
      // Pre-populate cache
      ttsCacheVar({ 'sma:default:dïhte': 'blob:http://example.com/cached' });

      const result = await fetchCachedTTSAudio('dïhte', 'sma');

      expect(mockedFetchTTSAudio).not.toHaveBeenCalled();
      expect(result).toBe('blob:http://example.com/cached');
    });

    it('should not cache null results', async () => {
      mockedFetchTTSAudio.mockResolvedValue(null);

      await fetchCachedTTSAudio('word', 'fin');

      const cache = ttsCacheVar();
      expect(cache['fin:default:word']).toBeUndefined();
    });

    it('should handle API errors gracefully', async () => {
      mockedFetchTTSAudio.mockRejectedValue(new Error('Network error'));

      const result = await fetchCachedTTSAudio('word', 'sme');

      expect(result).toBe(null);
    });

    it('should cache multiple results', async () => {
      mockedFetchTTSAudio
        .mockResolvedValueOnce('blob:http://example.com/audio1')
        .mockResolvedValueOnce('blob:http://example.com/audio2');

      await fetchCachedTTSAudio('mun', 'sme');
      await fetchCachedTTSAudio('dïhte', 'sma');

      const cache = ttsCacheVar();
      expect(cache['sme:default:mun']).toBe('blob:http://example.com/audio1');
      expect(cache['sma:default:dïhte']).toBe('blob:http://example.com/audio2');
    });

    it('should use custom voice in cache key', async () => {
      mockedFetchTTSAudio.mockResolvedValue('blob:http://example.com/audio');

      await fetchCachedTTSAudio('mun', 'sme', 'custom-voice');

      const cache = ttsCacheVar();
      expect(cache['sme:custom-voice:mun']).toBe(
        'blob:http://example.com/audio',
      );
    });

    it('should return null for unsupported languages', async () => {
      const result = await fetchCachedTTSAudio('hello', 'eng');

      expect(mockedFetchTTSAudio).not.toHaveBeenCalled();
      expect(result).toBe(null);
    });
  });
});
