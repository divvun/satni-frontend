import { describe, it, expect, beforeEach, vi } from 'vitest';
import { paradigmCacheVar } from '../../apolloCache';
import { fetchParadigm, hasParadigm } from './paradigmService';
import apolloClient from '../../apolloClient';

// Mock Apollo Client
vi.mock('../../apolloClient', () => ({
  default: {
    query: vi.fn(),
  },
}));

const mockedApolloClient = apolloClient as any;

describe('paradigmService', () => {
  beforeEach(() => {
    // Clear cache before each test
    paradigmCacheVar({});
    vi.clearAllMocks();
  });

  describe('fetchParadigm', () => {
    const mockParadigmData = [
      {
        paradigmTemplate: 'N_NomSg',
        analyses: [
          { wordform: 'muorra', weight: 100 },
          { wordform: 'muoras', weight: 90 },
        ],
      },
    ];

    it('should fetch from API when not cached', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: { generated: mockParadigmData },
      });

      const result = await fetchParadigm('muorra', 'sme', ['N_NomSg']);

      expect(mockedApolloClient.query).toHaveBeenCalledWith({
        query: expect.any(Object),
        variables: {
          origform: 'muorra',
          language: 'sme',
          paradigmTemplates: ['N_NomSg'],
        },
      });
      expect(result).toEqual(mockParadigmData);
    });

    it('should cache the result after fetching', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: { generated: mockParadigmData },
      });

      await fetchParadigm('muorra', 'sme', ['N_NomSg']);

      const cache = paradigmCacheVar();
      expect(cache['sme:muorra:N_NomSg']).toEqual(mockParadigmData);
    });

    it('should return cached result without API call', async () => {
      // Pre-populate cache
      paradigmCacheVar({ 'sma:dïhte:N_NomSg': mockParadigmData });

      const result = await fetchParadigm('dïhte', 'sma', ['N_NomSg']);

      expect(mockedApolloClient.query).not.toHaveBeenCalled();
      expect(result).toEqual(mockParadigmData);
    });

    it('should handle API errors gracefully', async () => {
      mockedApolloClient.query.mockRejectedValue(new Error('Network error'));

      const result = await fetchParadigm('word', 'sme', ['N_NomSg']);

      expect(result).toEqual([]);
    });

    it('should cache multiple paradigm results', async () => {
      const mockData2 = [
        {
          paradigmTemplate: 'V_InfE',
          analyses: [{ wordform: 'boahtit', weight: 100 }],
        },
      ];

      mockedApolloClient.query
        .mockResolvedValueOnce({ data: { generated: mockParadigmData } })
        .mockResolvedValueOnce({ data: { generated: mockData2 } });

      await fetchParadigm('muorra', 'sme', ['N_NomSg']);
      await fetchParadigm('boahtit', 'sme', ['V_InfE']);

      const cache = paradigmCacheVar();
      expect(cache['sme:muorra:N_NomSg']).toEqual(mockParadigmData);
      expect(cache['sme:boahtit:V_InfE']).toEqual(mockData2);
    });

    it('should handle multiple templates in cache key', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: { generated: mockParadigmData },
      });

      await fetchParadigm('muorra', 'sme', ['N_NomSg', 'N_GenSg']);

      const cache = paradigmCacheVar();
      expect(cache['sme:muorra:N_NomSg,N_GenSg']).toEqual(mockParadigmData);
    });

    it('should return empty array when no data', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: { generated: [] },
      });

      const result = await fetchParadigm('invalid', 'sme', ['N_NomSg']);

      expect(result).toEqual([]);
    });
  });

  describe('hasParadigm', () => {
    it('should return true when paradigm exists', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: {
          generated: [
            {
              paradigmTemplate: 'N_NomSg',
              analyses: [{ wordform: 'muorra', weight: 100 }],
            },
          ],
        },
      });

      const result = await hasParadigm('muorra', 'sme', ['N_NomSg']);

      expect(result).toBe(true);
    });

    it('should return false when paradigm does not exist', async () => {
      mockedApolloClient.query.mockResolvedValue({
        data: { generated: [] },
      });

      const result = await hasParadigm('invalid', 'sme', ['N_NomSg']);

      expect(result).toBe(false);
    });

    it('should use cached data', async () => {
      // Pre-populate cache with empty result
      paradigmCacheVar({ 'fin:word:N_NomSg': [] });

      const result = await hasParadigm('word', 'fin', ['N_NomSg']);

      expect(mockedApolloClient.query).not.toHaveBeenCalled();
      expect(result).toBe(false);
    });
  });
});
