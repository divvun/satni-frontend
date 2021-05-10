import { gql } from '@apollo/client';
import { useQuery } from '@apollo/client';

const GET_LEMMAS = gql`
  query AllLemmas(
    $inputValue: String!
    $wantedLangs: [String]!
    $wantedDicts: [String]!
    $after: String
  ) {
    stemList(
      first: 100
      search: $inputValue
      wanted: $wantedLangs
      wantedDicts: $wantedDicts
      after: $after
    ) {
      totalCount
      edges {
        node {
          stem
          srclangs
          targetlangs
        }
      }
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;

function useStems(inputValue, wantedDicts, wantedLangs) {
  const { data, loading, fetchMore, error } = useQuery(GET_LEMMAS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      inputValue,
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
        const newEdges = fetchMoreResult.stemList.edges;
        const pageInfo = fetchMoreResult.stemList.pageInfo;

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
