import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';

import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';
import GET_LEMMAS from '../../operations/queries/getLemmas';
import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';
import { locationParser } from '../../utils';

interface Stem {
  [key: string]: any;
}

interface StemListData {
  stemList: {
    totalCount: number;
    edges: Array<{ node: Stem }>;
    pageInfo: {
      endCursor: string;
      hasNextPage: boolean;
    };
  };
}

interface SearchModeData {
  searchMode: string;
}

interface LangsDictsData {
  srcLangs: string[];
  targetLangs: string[];
  wantedDicts: string[];
}

interface UseStemsResult {
  totalCount?: number;
  stems: Stem[];
  error?: any;
  hasNextPage?: boolean;
  loading: boolean;
  loadMore?: () => void;
}

function useStems(inputValue: string): UseStemsResult {
  const searchModeQueryResult = useQuery<SearchModeData>(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data || { searchMode: '' };
  const langsDictsQueryResult = useQuery<LangsDictsData>(GET_LANGS_DICTS);
  const { srcLangs, targetLangs } = langsDictsQueryResult.data || {
    srcLangs: [],
    targetLangs: [],
  };

  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data?.wantedDicts || [];

  const { data, loading, fetchMore, error } = useQuery<StemListData>(
    GET_LEMMAS,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        inputValue,
        searchMode,
        srcLangs,
        targetLangs,
        wantedDicts,
      },
    },
  );

  if (loading && !data) return { loading, stems: [] };
  if (error) return { error, stems: [], loading: false };

  const loadMore = () =>
    fetchMore({
      variables: {
        after: data?.stemList.pageInfo.endCursor,
      },
    });

  return {
    totalCount: data?.stemList.totalCount,
    stems: data?.stemList.edges.map(({ node }) => node) || [],
    error,
    hasNextPage: data?.stemList.pageInfo.hasNextPage,
    loading,
    loadMore,
  };
}

export default useStems;
