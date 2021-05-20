import { useQuery } from '@apollo/client';
import { useLocation } from 'react-router-dom';
import { locationParser } from '../../utils';
import GET_LEMMAS from '../../operations/queries/getLemmas';
import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';
import GET_LANGS_DICTS from '../../operations/queries/getLangsDicts';

function useStems(inputValue) {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data;
  const langsDictsQueryResult = useQuery(GET_LANGS_DICTS);
  const { wantedLangs } = langsDictsQueryResult.data;

  const location = useLocation();
  const { currentDict } = locationParser(location.pathname);

  const wantedDicts = currentDict
    ? [currentDict]
    : langsDictsQueryResult.data.wantedDicts;

  const { data, loading, fetchMore, error } = useQuery(GET_LEMMAS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      inputValue,
      searchMode,
      wantedLangs,
      wantedDicts,
    },
  });

  if (loading && !data) return { loading, stems: [] };
  if (error) return { error, stems: [] };

  const loadMore = () =>
    fetchMore({
      variables: {
        after: data.stemList.pageInfo.endCursor,
      },
    });

  return {
    totalCount: data.stemList.totalCount,
    stems: data.stemList.edges.map(({ node }) => node),
    error,
    hasNextPage: data.stemList.pageInfo.hasNextPage,
    loading,
    loadMore,
  };
}

export default useStems;
