/* eslint-disable no-underscore-dangle */
import { useQuery } from '@apollo/client';
import GET_LEMMAS from '../../operations/queries/getLemmas';
import GET_SEARCH_MODE from '../../operations/queries/getSearchMode';

function useStems(inputValue, wantedDicts, wantedLangs) {
  const searchModeQueryResult = useQuery(GET_SEARCH_MODE);
  const { searchMode } = searchModeQueryResult.data;
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
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const { newEdges, pageInfo } = fetchMoreResult.stemList;

        return newEdges.length
          ? {
              // Put the new comments at the end of the list and update `pageInfo`
              // so we have the new `endCursor` and `hasNextPage` values
              stemList: {
                __typename: previousResult.stemList.__typename,
                totalCount: previousResult.stemList.totalCount,
                edges: [...previousResult.stemList.edges, ...newEdges],
                pageInfo,
              },
            }
          : previousResult;
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
